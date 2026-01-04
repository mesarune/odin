class Board
    attr_reader :grid

    def initialize
        @grid = Array.new(6) { Array.new(7) }
    end

    def drop_piece(column, symbol)
        return false unless column.between?(0, 6)
        (5).downto(0) do |row|
            if @grid[row][column].nil?
                @grid[row][column] = symbol
                return true
            end
        end
        false
    end

    def win?(symbol)
        horizontal_win?(symbol) || vertical_win?(symbol) || diagonal_win?(symbol)
    end

    private

    def horizontal_win?(s)
        @grid.any? { |r| r.each_cons(4).any? { |window| window.all?(s) }}
    end

    def vertical_win?(s)
        @grid.transpose.any? { |c| c.each_cons(4).any? { |window| window.all?(s) }}
    end

    def diagonal_win?(s)
        (0..5).each do |r|
            (0..6).each do |c|
                return true if check_diagonal(r, c, 1, 1, s)
                return true if check_diagonal(r, c, 1, -1, s)
            end
        end
        false
    end

    def check_diagonal(r, c, next_r, next_c, s)
        4.times.all? do |i|
            row, col = r + (next_r * i), c + (next_c * i)
            row.between?(0, 5) && col.between?(0, 6) && @grid[row][col] == s
        end
    end
end