require_relative 'board'

class Piece
  attr_accessor :position
  attr_reader :color, :symbol

  def initialize(color, position)
    @color = color
    @position = position
  end

  def valid_move?(to_position, board)
    difference_row = to_position[0] - @position[0]
    difference_col = to_position[1] - @position[1]

    is_valid_pattern = sliding? ? can_slide_to?(difference_row, difference_col) : can_step_to?(difference_row, difference_col)
    return false unless is_valid_pattern

    if self.class == Knight
      true
    else
      !board.path_blocked?(@position, to_position)
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
    move_directions.any? do |direction_row, direction_col|
      steps = [difference_row.abs, difference_col.abs].max
      next if steps == 0
      difference_row == direction_row * steps && difference_col == direction_col * steps
    end
  end

end

class Rook < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♜" : "♖")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0]]
  end

end

class Bishop < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♝" : "♗")
  end

  def move_directions
    [[1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

end

class Queen < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♛" : "♕")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

end

class Knight < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♞" : "♘")
  end

  def move_directions
    [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
  end

end

class King < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♚" : "♔")
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

end

class Pawn < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♟" : "♙")
  end

  def move_forward
    @color == :white ? -1 : 1
  end

  def start_row?
    @color == :white ? @position[0] == 6 : @position[0] == 1
  end

  def valid_move?(to_position, board)
    d_row = to_position[0] - @position[0]
    d_col = to_position[1] - @position[1]
    fwd = move_forward

    if d_col.abs == 1 && (d_row == (fwd * 2) || d_row == fwd)
      return true if board.enemy_at?(to_position, @color)
    end

    if d_col == 0
      return false unless board.find_piece_at(to_position).nil?
      return true if d_row == fwd
      if d_row == fwd * 2 && start_row?
        one_step = [@position[0] + fwd, @position[1]]
        return true if board.find_piece_at(one_step).nil?
      end
    end
    false
  end
  
end