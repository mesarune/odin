require_relative 'board', 'pieces'

board = Board.new
current_player = 'white'

loop do
  board.display_board
  puts "Player #{current_player}, place your piece. exp(a2,b7)"
  player_input = gets.chomp.split(",")
  piece = board.find_piece_at(player_input[0])