class Board
    def initialize
        @board = Array.new(3) { Array.new(3, " ") }
    end
    
    def display_board
        puts @board.map { |row| row.join("|") }.join("\n-+-+-\n")
    end

    def set_symbol(player, x, y)
        if [0, 1, 2].include?(x)
            if [0, 1, 2].include?(y)
                if @board[y][x] == " "
                    @board[y][x] = player
                end
            end
        else
            return false
        end
    end

    def check_result(player)
        3.times do |i|
            if @board[i][0] == player && @board[i][1] == player && @board[i][2] == player
                return true
            end
        end

        3.times do |i|
            if @board[0][i] == player && @board[1][i] == player && @board[2][i] == player
                return true
            end
        end

        if @board[0][0] == player && @board[1][1] == player && @board[2][2] == player
            return true
        end

        if @board[0][2] == player && @board[1][1] == player && @board[2][0] == player
            return true
        end

        return false
    end

end
