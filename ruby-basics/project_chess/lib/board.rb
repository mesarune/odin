class Board
    attr_reader :grid
    attr_accessor :player1_pieces, :player2_pieces

    def initialize
        @grid = Array.new(8) { Array.new(8) }
        player1_pieces = [*initial position*]
        player2_pieces = [*initial position*]
    end

    def display_board

    end

    def switch_player

    end

    def game_over?

    end

end