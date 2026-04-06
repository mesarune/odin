require_relative 'board'

class Piece
  attr_accessor :position, :has_moved
  attr_reader :color, :symbol, :value

  def initialize(color, position)
    @color = color
    @position = position
    @has_moved = false
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

  def sliding?
    [Rook, Bishop, Queen].include?(self.class)
  end

  private

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
    @value = 50
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0]]
  end

end

class Bishop < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♝" : "♗")
    @value = 30
  end

  def move_directions
    [[1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

end

class Queen < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♛" : "♕")
    @value = 90
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

end

class Knight < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♞" : "♘")
    @value = 30
  end

  def move_directions
    [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]
  end

end

class King < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♚" : "♔")
    @value = 900
  end

  def move_directions
    [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  end

  def valid_move?(to_position, board)
    return true if super
    row, col = @position
    to_row, to_col = to_position

    if to_row == row && (to_col - col).abs == 2
      return can_castle?(to_position, board)
    end
    false
  end

  private

  def can_castle?(to_position, board)
    return false if @has_moved
    return false if board.in_check?(@color)

    row, col = @position
    to_col = to_position[1]
    is_kingside = to_col > col

    rook_col = is_kingside ? 7 : 0
    rook = board.find_piece_at([row, rook_col])
    return false unless rook.is_a?(Rook) && !rook.has_moved
    return false if board.path_blocked?(@position, [row, rook_col])

    step = is_kingside ? 1 : -1
    opponent_color = (@color == :white ? :black : :white)
    return false if board.square_under_attack?([row, col + step], opponent_color)
    return false if board.square_under_attack?([row, col + step * 2], opponent_color)
    true
  end

end

class Pawn < Piece
  def initialize(color, position)
    super
    @symbol = (color == :white ? "♟" : "♙")
    @value = 10
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

    if d_col.abs == 1 && d_row == fwd
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

    if d_col.abs == 1 && d_row == fwd
      return true if to_position == board.en_passant_target
    end
    false
  end
  
end