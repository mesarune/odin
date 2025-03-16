require_relative 'board.rb'
require_relative 'player.rb'

def turn(board, player)
  while !player.get_input(board) do
    puts "
  
  board.display_board
  
  if board.check_result(player)
    puts "#{player} の勝ち"
    exit
  end
end
  
board = Board.new
  
x = Player.new("x")
  
o = Player.new("o")
  
9.times do |i|
  current_player = i%2 == 0? x : o

  turn(board, current_player)
end
  
puts "引き分け"
