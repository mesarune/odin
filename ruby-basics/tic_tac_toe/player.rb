class Player
  def initialize(symbol)
    @symbol = symbol
  end

  def get_input(board)
    puts "#{self}の番です。座標をスペース区切りで入力してください"
    input = gets.chomp.split

    y = input[0].to_i
    x = input[1].to_i

    board.set_symbol(self, x, y)
  end

end
