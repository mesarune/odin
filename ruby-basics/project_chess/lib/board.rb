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
        grid = Array.new(8) { Array.new(8, "・") }

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

    def move_piece(from_position, to_position)
        moving_piece = find_piece_at(from_position)

        return false if moving_piece.nil?
        return false if out_of_bounds?(to_position)
        return false unless moving_piece.valid_move?(to_position, self)

    end

    def switch_player

    end

    def game_over?
        white_king = @white_pieces.any? { |piece| piece.is_a?(King) }
        black_king = @black_pieces.any? { |piece| piece.is_a?(King) }

        !white_king || !black_king
    end

end