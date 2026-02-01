class Piece
  attr_accessor :position
  attr_reader :symbol

  def initialize(color, position)
    @color = color
    @position = position
  end

  def valid_move?(to_position)
    difference_row = to_position[0] - @position[0]
    difference_col = to_position[1] - @position[1]

    if sliding?
      can_slide_to?(difference_row, difference_col)
    else
      can_step_to?(difference_row, difference_col)
    end
  end

  private

  def sliding?
    [Rook, Bishop, Queen].include?(self.class)
  end

  def can_step_to?(difference_row, difference_col)
    move_directions.include?([difference_row, difference_col])
  end

  def can_slide_to?(difference_row, difference_col)

  end

end

class Rook < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♖" : "♜")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0]]
  end
end

class Bishop < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♗" : "♝")
  end

  def move_directions
    [[1, 1], [1, -1], [-1, 1], [-1, -1]]
  end
end

class Queen < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♕" : "♛")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end
end

class Knight < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♘" : "♞")
  end

  def move_directions
    [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
  end
end

class King < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♔" : "♚")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end
end

class Pawn < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♙" : "♟")
  end

  def move_forward
    @color == :white ? -1 : 1
  end
end