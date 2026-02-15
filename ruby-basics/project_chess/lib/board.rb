require_relative 'pieces'

class Board
    attr_reader :grid
    attr_accessor :white_pieces, :black_pieces

    def initialize
        @white_pieces = []
        @black_pieces = []
        setup_pieces
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
        target = find_piece_at(to_position)
        
        if target
            @white_pieces.delete(target)
            @black_pieces.delete(target)
        end
    end

    def move_piece(from_position, to_position)
        moving_piece = find_piece_at(from_position)

        return false if moving_piece.nil?
        return false if out_of_bounds?(to_position)
        return false if ally_at?(to_position, moving_piece.color)
        
        if moving_piece.valid_move?(to_position, self)
            capture_piece_at(to_position)
            moving_piece.position = to_position
            true
        else
            false
        end
    end

    def game_over?(current_player)
        pieces = current_player == :white ? @black_pieces : @white_pieces
        if pieces.none? { |piece| piece.is_a?(King) }
          puts "--------------------------"
          puts "Checkmate! #{current_player.capitalize} wins!"
          puts "--------------------------"
          return true
        end
        false
    end

end