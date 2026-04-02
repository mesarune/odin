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
  if current_player == :black
    puts "Player black is thinking..."
    sleep(5)
    moves = board.all_valid_moves(:black)
    if moves.empty?
      puts "-----------------------------"
      puts "STALEMATE. Player white wins."
      puts "-----------------------------"
      break
    end
    # --- Minimax (Depth 2) --- #
    best_score = 99999
    selected_move = moves.sample
    moves.each do |move|
      captured = board.execute_move(move[:from], move[:to])
      opponent_moves = board.all_valid_moves(:white)
      max_score_for_white = -99999
      if opponent_moves.empty?
        max_score_for_white = -999
      else
        opponent_moves.each do |o_move|
          o_captured = board.execute_move(o_move[:from], o_move[:to])
          current_evaluate = board.evaluate
          if current_evaluate > max_score_for_white
            max_score_for_white = current_evaluate
          end
          board.undo_move(o_move[:from], o_move[:to], o_captured)
        end
      end
      if max_score_for_white < best_score
        best_score = max_score_for_white
        selected_move = move
      end
      board.undo_move(move[:from], move[:to], captured)
    end
    # ------------------------- #
    from_str = "#{(selected_move[:from][1] + 97).chr}#{8 - selected_move[:from][0]}"
    to_str = "#{(selected_move[:to][1] + 97).chr}#{8 - selected_move[:to][0]}"
    player_input = "#{from_str},#{to_str}"
    puts "Player black: #{player_input} (Score: #{best_score})"
  else
    puts "Player white, move your piece. (e2,e4): "
    player_input = gets.chomp.downcase
  end

  break if player_input == 'exit'

  if player_input == 'save'
    board.save_game(current_player)
    next
  end

  unless player_input =~ /^[a-h][1-8],[a-h][1-8]$/
    puts "Invalid input format. Please use 'e2,e4' style."
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
    else
      puts "Invalid move."
    end
  else
    puts "No piece found there."
  end

end