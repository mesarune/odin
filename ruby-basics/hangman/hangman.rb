# hangman.rb

require 'yaml' # For YAML, as a more human-readable alternative, though Marshal is also fine.
              # We will use Marshal as per the prompt's spirit of serialization.

# HangmanGame クラス: ゲームのロジックと状態を管理します。
class HangmanGame
  attr_accessor :secret_word, :correct_letters, :incorrect_letters, :guesses_left

  def initialize
    @secret_word = select_secret_word
    @correct_letters = Array.new(@secret_word.length, '_')
    @incorrect_letters = []
    @guesses_left = 7
  end

  # ゲームのメインループ
  def play
    loop do
      display_game_state
      
      # 勝利または敗北のチェック
      if game_over?
        break
      end
      
      print "Enter your guess (or 'save' to save the game): "
      input = gets.chomp.downcase

      if input == 'save'
        save_game
        break
      end

      unless validate_guess(input)
        puts "Invalid input. Please enter a single, un-guessed letter."
        next
      end

      process_guess(input)
    end
  end

  # ゲームの状態を表示
  def display_game_state
    puts "\n" + "-" * 30
    puts "Incorrect guesses left: #{guesses_left}"
    puts "Incorrect letters: #{incorrect_letters.join(' ')}"
    puts "Word: #{correct_letters.join(' ')}"
    puts "-" * 30
    puts "\n"
  end

  # 秘密の単語をランダムに選択
  def select_secret_word
    words = []
    begin
      File.readlines('google-10000-english-no-swears.txt').each do |word|
        word = word.chomp
        words << word if word.length >= 5 && word.length <= 12
      end
    rescue Errno::ENOENT
      puts "Error: Dictionary file not found. Make sure 'google-10000-english-no-swears.txt' is in the same directory."
      exit
    end
    words.sample
  end

  # プレイヤーの推測を処理
  def process_guess(letter)
    if secret_word.include?(letter)
      puts "Correct guess!"
      secret_word.split('').each_with_index do |char, index|
        correct_letters[index] = letter if char == letter
      end
    else
      puts "Incorrect guess."
      incorrect_letters << letter
      self.guesses_left -= 1
    end
  end

  # 推測の入力が正しいか検証
  def validate_guess(input)
    # 単一の文字であり、かつ既に推測されていないか確認
    input.length == 1 &&
    ('a'..'z').include?(input) &&
    !correct_letters.include?(input) &&
    !incorrect_letters.include?(input)
  end

  # ゲームが終了したかチェック
  def game_over?
    if is_won?
      puts "Congratulations! You won! The word was: #{secret_word}"
      true
    elsif is_lost?
      puts "Game over! You lost. The word was: #{secret_word}"
      true
    else
      false
    end
  end

  # 勝利条件のチェック
  def is_won?
    correct_letters.join('') == secret_word
  end

  # 敗北条件のチェック
  def is_lost?
    guesses_left == 0
  end

  # ゲームをファイルに保存
  def save_game
    puts "Saving game..."
    Dir.mkdir('saved_games') unless Dir.exist?('saved_games')
    print "Enter a filename to save (e.g., my_game): "
    filename = gets.chomp
    File.open("saved_games/#{filename}.sav", 'w') do |file|
      Marshal.dump(self, file)
    end
    puts "Game saved successfully!"
  rescue
    puts "Failed to save the game."
  end
  
  # ファイルからゲームを読み込む
  def self.load_game
    puts "Loading game..."
    saved_games = Dir.glob('saved_games/*.sav')
    if saved_games.empty?
      puts "No saved games found."
      return nil
    end

    puts "Saved games found:"
    saved_games.each_with_index { |file, i| puts "#{i + 1}. #{File.basename(file, '.sav')}" }
    print "Enter the number of the game you want to load: "
    file_index = gets.chomp.to_i - 1

    if file_index >= 0 && file_index < saved_games.length
      File.open(saved_games[file_index], 'r') do |file|
        Marshal.load(file)
      end
    else
      puts "Invalid selection."
      nil
    end
  rescue
    puts "Failed to load the game. The file might be corrupted."
    nil
  end
end

# メインプログラムの実行
loop do
  puts "Welcome to Hangman!"
  puts "Do you want to (1) Start a new game or (2) Load a saved game? (1/2)"
  choice = gets.chomp

  if choice == '1'
    game = HangmanGame.new
    game.play
  elsif choice == '2'
    game = HangmanGame.load_game
    game.play if game
  else
    puts "Invalid choice. Please enter 1 or 2."
  end
  
  puts "Play again? (y/n)"
  break unless gets.chomp.downcase == 'y'
end