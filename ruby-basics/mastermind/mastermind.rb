require_relative 'board.rb'
require_relative 'computer.rb'
require_relative 'player.rb'

description = <<EOS
\e[31m●\e[0m|\e[32m●\e[0m|\e[33m●\e[0m|\e[34m●\e[0m|\e[35m●\e[0m|\e[36m●\e[0m
-+-+-+-+-+-
r|g|y|p|m|c

m c p g -> \e[35m●\e[0m|\e[36m●\e[0m|\e[34m●\e[0m|\e[32m●\e[0m

アルファベットをスペース区切りで入力して４色の組み合わせを作成してください。
EOS

puts description

def check_input(input, solution)
    if input == solution
        puts "あなたの勝ち"
        exit
    end
end

class Board
    def initialize
        @guesses = []
        @solution = []
    end
    
    def set_input(input)
        @guesses << input
    end

    def set_solution(solution)
        @solution << solution
    end

    def display_board
        puts 

board = Board.new
com = Computer.new
player = Player.new

solution = com.get_input
board.set_solution(solution)

10.times do |i|
    input = player.get_input
    board.set_input(input)
    board.set_feedback
    board.display_board
    board.check_input(input, solution)
end

puts "あなたの負け"

exit
