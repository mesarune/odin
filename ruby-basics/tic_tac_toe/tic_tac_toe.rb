def turn(board, player)
  player.get_input(board)
  
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
