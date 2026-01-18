class Piece
  attr_accessor :position

  def initialize(position)
    @position = position
  end

  def move(position, next_position)

  end

  def valid_move?(next_position)

  end

  def ally?(next_position)

  end

  def opponent?(next_position)

  end

  def capture

  end

end

class King < Piece

end

class Queen < Piece

end

class Rook < Piece

end

class Bishop < Piece

end

class Knight < Piece

end

class Pawn < Piece

end