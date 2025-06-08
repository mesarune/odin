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
