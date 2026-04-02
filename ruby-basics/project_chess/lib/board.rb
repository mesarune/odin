require 'json'
require_relative 'pieces'

class Board
    attr_accessor :white_pieces, :black_pieces

    def initialize
        @white_pieces = []
        @black_pieces = []
        setup_pieces
    end

    def save_game(current_player)
        data = {
            current_player: current_player,
            white: @white_pieces.map { |piece| { class: piece.class.name, color: piece.color, position: piece.position } },
            black: @black_pieces.map { |piece| { class: piece.class.name, color: piece.color, position: piece.position } }
        }

        File.open("savegame.json", "w") do |file|
            file.write(JSON.pretty_generate(data))
        end
        puts "Game saved."
    end

    def load_game
        return unless File.exist?("savegame.json")

        file = File.read("savegame.json")
        data = JSON.parse(file)

        @white_pieces = []
        @black_pieces = []

        data["white"].each do |piece|
            @white_pieces << Object.const_get(piece["class"]).new(piece["color"].to_sym, piece["position"])
        end

        data["black"].each do |piece|
            @black_pieces << Object.const_get(piece["class"]).new(piece["color"].to_sym, piece["position"])
        end

        data["current_player"].to_sym
    end

    def setup_pieces
        8.times do |col|
            @white_pieces << Pawn.new(:white, [6, col])
            @black_pieces << Pawn.new(:black, [1, col])
        end

        setup_back_row(:white, 7, @white_pieces)
        setup_back_row(:black, 0, @black_pieces)
    end

    def setup_back_row(color, row, piece_list)
        back_row_pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]
        back_row_pieces.each_with_index do |piece, col|
            piece_list << piece.new(color, [row, col])
        end
    end

    def all_pieces
        @white_pieces + @black_pieces
    end

    def find_piece_at(position)
        all_pieces.find { |piece| piece.position == position }
    end

    def ally_at?(position, color)
        piece = find_piece_at(position)
        piece && piece.color == color
    end

    def enemy_at?(position, color)
        piece = find_piece_at(position)
        piece && piece.color != color
    end

    def display_board
        grid = Array.new(8) { Array.new(8, "·") }

        all_pieces.each do |piece|
            row, col = piece.position
            grid[row][col] = piece.symbol
        end

        puts "\n    a b c d e f g h"
        puts "  +-----------------+"
        grid.each_with_index do |row, i|
            puts "#{8 - i} | #{row.join(' ')} | #{8 - i}"
        end
        puts "  +-----------------+"
        puts "    a b c d e f g h\n"
    end

    def out_of_bounds?(position)
        row, col = position
        !(row.between?(0, 7) && col.between?(0, 7))
    end

    def get_path_coords(from_position, to_position)
        path = []

        if to_position[0] > from_position[0]
            step_row = 1
        elsif to_position[0] < from_position[0]
            step_row = -1
        else
            step_row = 0
        end

        if to_position[1] > from_position[1]
            step_col = 1
        elsif to_position[1] < from_position[1]
            step_col = -1
        else
            step_col = 0
        end

        current_row = from_position[0] + step_row
        current_col = from_position[1] + step_col

        while [current_row, current_col] != to_position
            path << [current_row, current_col]
            current_row += step_row
            current_col += step_col
        end
        path
    end

    def path_blocked?(from_position, to_position)
        path = get_path_coords(from_position, to_position)

        path.any? { |position| find_piece_at(position) }
    end

    def capture_piece_at(to_position)
        @white_pieces.reject! { |piece| piece.position == to_position }
        @black_pieces.reject! { |piece| piece.position == to_position }
    end

    def move_piece(from_position, to_position)
        moving_piece = find_piece_at(from_position)

        return false if moving_piece.nil?
        return false if out_of_bounds?(to_position)
        return false if ally_at?(to_position, moving_piece.color)
        
        if moving_piece.valid_move?(to_position, self)
            capture_piece_at(to_position)
            moving_piece.position = to_position
            if (["♟", "♙"].include?(moving_piece.symbol)) && (moving_piece.position[0] == 0 || moving_piece.position[0] == 7)
                promote_pawn(moving_piece)
            end
            true
        else
            false
        end
    end

    def in_check?(color)
        king = (color == :white ? @white_pieces : @black_pieces).find { |piece| piece.is_a?(King) }
        return false unless king

        enemy_pieces = (color == :white ? @black_pieces : @white_pieces)

        enemy_pieces.any? do |piece|
            piece.valid_move?(king.position, self)
        end
    end

    def game_over?(current_player)
        pieces = (current_player == :white ? @black_pieces : @white_pieces)
        if pieces.none? { |piece| piece.symbol == "♚" || piece.symbol == "♔" }
          puts "-----------------------------"
          puts "CHECKMATE. Player #{current_player} wins."
          puts "-----------------------------"
          return true
        end
        false
    end

    def evaluate
        score = 0
        @white_pieces.each { |p| score += p.value }
        @black_pieces.each { |p| score -= p.value }
        score
    end

    def execute_move(from_position, to_position)
        moving_piece = find_piece_at(from_position)
        captured_piece = find_piece_at(to_position)
        if captured_piece
            @white_pieces.delete(captured_piece)
            @black_pieces.delete(captured_piece)
        end
        moving_piece.position = to_position
        captured_piece
    end

    def undo_move(from_position, to_position, captured_piece)
        moving_piece = find_piece_at(to_position)
        moving_piece.position = from_position
        if captured_piece
            if captured_piece.color == :white
                @white_pieces << captured_piece
            else
                @black_pieces << captured_piece
            end
        end
    end

    def all_valid_moves(color)
        moves = []
        my_pieces = (color == :white ? @white_pieces : @black_pieces)

        my_pieces.each do |piece|
            if piece.is_a?(Pawn)
                8.times do |row|
                    8.times do |col|
                        to_position = [row, col]
                        if piece.valid_move?(to_position, self) && !ally_at?(to_position, color)
                            moves << { from: piece.position, to: to_position}
                        end
                    end
                end
                next
            end
            piece.move_directions.each do |dir_row, dir_col|
                if piece.sliding?
                    1.upto(7) do |steps|
                        to_position = [piece.position[0] + dir_row * steps, piece.position[1] + dir_col * steps]
                        break if out_of_bounds?(to_position)
                        if piece.valid_move?(to_position, self) && !ally_at?(to_position, color)
                            moves << { from: piece.position, to: to_position }
                        end
                        break if find_piece_at(to_position)
                    end
                else
                    to_position = [piece.position[0] + dir_row, piece.position[1] + dir_col]
                    unless out_of_bounds?(to_position)
                        if piece.valid_move?(to_position, self) && !ally_at?(to_position, color)
                            moves << { from: piece.position, to: to_position}
                        end
                    end
                end
            end
        end
        moves
    end

    private

    def promote_pawn(pawn)
        color = pawn.color
        position = pawn.position

        new_queen = Queen.new(color, position)

        if color == :white
            @white_pieces.delete(pawn)
            @white_pieces << new_queen
        else
            @black_pieces.delete(pawn)
            @black_pieces << new_queen
        end
    end

end