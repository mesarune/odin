require_relative 'board'

def translate_location(string)
  columns = { "a" => 0, "b" => 1, "c" => 2, "d" => 3, "e" => 4, "f" => 5, "g" => 6, "h" => 7 }
  row = 8 - string[1].to_i
  col = columns[string[0].downcase]
  [row, col]
end

board = Board.new
current_player = :white

loop do
  board.display_board
  puts "Player #{current_player}, move your piece. (exp: a2,b7)"
  player_input = gets.chomp

  break if player_input.downcase == 'exit'

  input = player_input.split(",")
  next if input.length != 2

  from_position = translate_location(input[0])
  to_position = translate_location(input[1])

  moving_piece = board.find_piece_at(from_position)

  if moving_piece && moving_piece.color == current_player
    if board.move_piece(from_position, to_position)
      current_player = (current_player == :white ? :black : :white)
    else
      puts "Invalid move."
    end
  else
    puts "No piece found there."
  end

end