require_relative 'board.rb'
require_relative 'player.rb'

description = <<EOS
\e[31m●\e[0m|\e[32m●\e[0m|\e[33m●\e[0m|\e[34m●\e[0m|\e[35m●\e[0m|\e[36m●\e[0m
-+-+-+-+-+-
r|g|y|p|m|c

mcpg -> \e[35m●\e[0m|\e[36m●\e[0m|\e[34m●\e[0m|\e[32m●\e[0m

アルファベットを入力して４色の組み合わせを作成してください。
EOS

puts description

class Board

    colors = {
        "r"; "\e[31m●\e[0m",
        "g"; "\e[32m●\e[0m",
        "y"; "\e[33m●\e[0m",
        "p"; "\e[34m●\e[0m",
        "m"; "\e[35m●\e[0m",
        "c"; "\e[36m●\e[0m",
        "b"; "\e[30m●\e[0m",
        "w"; "\e[37m●\e[0m",
    }

    def initialize
        @solution = []
        @guesses = []
        @feedback = []
    end
    
    def set_solution
        choices = "rgypmc".split("")
        @solution = choices.shuffle.take(4)
    end

    def set_input(input)
        @guesses = input
        set_feedback
    end

    def set_feedback
        @feedback = @guesses.zip(@solution).map do |a| 
            if a[0] == a[1]
                return "b"
            elsif @solution.include?(a[0])
                return "w"
            else
                return " "
            end
        end
    end
        
    def display_board
        guesses = @guesses.map{ |s| colors[s] }
        feedback = @feedback.map{ |s| colors[s] }
        display = [guesses, feedback]
        puts display.map { |row| row.join("|") }.join("\n-+-+-+-\n")
    end

    def check_input
        if @guesses == @solution
            puts "あなたの勝ち"
            exit
        end
    end

end

class Player

    valid_input = ["r", "g", "y", "p", "m", "c"]

    def get_input
        loop do
            puts "入力してください”
            input = gets.chomp.split
            
            if !input.all? { |s| valid_input.include?(s) }
             puts "無効な入力です"
            elsif !input.length == 4
             puts "無効な入力です"
            else
             return input
            end
        end
    end

end

board = Board.new
player = Player.new

board.set_solution

10.times do |i|
    board.set_input(player.get_input)
    board.display_board
    board.check_input
end

puts "あなたの負け"

exit
