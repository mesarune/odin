class Player
  def initialize(symbol)
    @symbol = symbol
  end

  def get_input(board)
    puts "座標をスペース区切りで入力してください"
    input = gets.chomp.split

    x = input[0].to_i
    y = input[1].to_i

    board[x][y] = @symbol
  end

end
