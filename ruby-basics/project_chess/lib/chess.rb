require_relative 'board', 'pieces'

board = Board.new
current_player = 'player1'

loop do
  board.display_board