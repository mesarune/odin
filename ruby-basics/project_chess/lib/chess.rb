require_relative 'board'

def translate_location(string)
  columns = { "a" => 0, "b" => 1, "c" => 2, "d" => 3, "e" => 4, "f" => 5, "g" => 6, "h" => 7 }
  row = 8 - string[1].to_i
  col = columns[string[0]]
  [row, col]
end

board = Board.new
current_player = :white

if File.exist?("savegame.json")
  print "Save file found. Load game? (y/n): "
  if gets.chomp.downcase == 'y'
    current_player = board.load_game
    puts "Game loaded. It's #{current_player}'s turn."
  end
end

loop do
  board.display_board
  puts "Player #{current_player}, move your piece. (a2,b7): "
  player_input = gets.chomp.downcase

  break if player_input == 'exit'

  if player_input == 'save'
    board.save_game(current_player)
    next
  end

  unless player_input =~ /^[a-h][1-8],[a-h][1-8]$/
    puts "Invalid input format. Please use 'a2,b7' style."
    next
  end

  input = player_input.split(",")

  from_position = translate_location(input[0])
  to_position = translate_location(input[1])

  moving_piece = board.find_piece_at(from_position)

  if moving_piece && moving_piece.color == current_player
    if board.move_piece(from_position, to_position)
      break if board.game_over?(current_player)
      current_player = (current_player == :white ? :black : :white)
      if board.in_check?(current_player)
        puts "CHECK. King is under attack."
      end
    else
      puts "Invalid move."
    end
  else
    puts "No piece found there."
  end

end