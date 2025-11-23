def knight_moves(start_position, target_position)
    if !valid_position?(start_position) || !valid_position?(target_position)
        puts "Error: Start or target position is outside the 8*8 board"
        return nil
    end

    queue = []
    visited_positions = { start_position => true }
    first_step = Step.new(start_position, nil)
    queue << first_step

    while !queue.empty?
        current_step = queue.shift
        current_position = current_step.position
        if current_position == target_position
            path = trace_back_steps(current_step)
            moves = path.length - 1
            puts "=> You made it in #{moves} moves! Here's your path:"
            path.each do |position|
                puts "  #{position}"
            end
            return path
        end

        next_positions = calculate_next_steps(current_position, visited_positions)
        next_positions.each do |next_position|
            new_step = Step.new(next_position, current_step)
            queue << new_step
            visited_positions[next_position] = true
        end
    end
    return nil
end

MOVES = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

class Step
    attr_accessor :position, :came_from
    def initialize(position, came_from)
        @position = position
        @came_from = came_from
    end
end

private

def valid_position?(position)
    x, y = position
    (0..7).include?(x) && (0..7).include?(y)
end

def calculate_next_steps(current_position, visited_positions)
    next_valid_positions = []
    current_x = current_position[0]
    current_y = current_position[1]
    MOVES.each do |move_x, move_y|
        next_x = current_x + move_x
        next_y = current_y + move_y
        next_position = [next_x, next_y]

        if !valid_position?(next_position)
            next
        end

        if visited_positions.key?(next_position)
            next
        end

        next_valid_positions << next_position
    end
    return next_valid_positions
end

def trace_back_steps(final_step)
    path = []
    current_step = final_step
    while current_step
        path << current_step.position
        current_step = current_step.came_from
    end
    return path.reverse
end