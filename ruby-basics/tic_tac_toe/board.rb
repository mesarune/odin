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
                if @board[x][y] == " "
                    @board[x][y] = player
                end
            end
        end
    end

    def check_result(player)
        3.times do |i|
            if @board[i].all?(player) || @board.transpose[i].all?(player)
                return true
            else
                return false
            end
        end
    end

end
