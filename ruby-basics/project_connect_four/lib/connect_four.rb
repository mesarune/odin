require_relative 'board'

class ConnectFour
  def initialize
    @board = Board.new
    @current_player = 'o'
  end

  def play
    loop do
      display_board
      puts "Player #{@current_player}, choose a column (0-6)."
      column = gets.chomp.to_i

      if @board.drop_piece(column, @current_player)
        if @board.win?(@current_player)
          display_board
          puts "Congratulations. Player #{@current_player} wins."
          break
        end
        switch_player
      else
        puts "Invalid column. Try again."
      end
    end
  end

  private

  def switch_player
    @current_player = (@current_player == 'o' ? 'x' : 'o')
  end

  def display_board
    puts "\n 0 1 2 3 4 5 6"
    @board.grid.each do |row|
      print "|"
      row.each { |cell| print cell.nil? ? " |" : "#{cell}|" }
      puts
    end
    puts "---------------"
  end
end

game = ConnectFour.new
game.play