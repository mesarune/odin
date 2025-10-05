class LinkedList
    def initialize
        @head = nil
    end

    def append(value)
        new_node = Node.new(value)
        current_node = @head
        if current_node.nil?
            @head = new_node
            return
        else
            while current_node.next_node != nil
                current_node = current_node.next_node
            end
        end
        current_node.next_node = new_node
    end

    def prepend(value)
        new_node = Node.new(value)
        current_head = @head
        @head = new_node
        new_node.next_node = current_head
    end

    def size
        count = 0
        current_node = @head
        while current_node != nil
            count += 1
            current_node = current_node.next_node
        end
        return count
    end

    def head
        return @head
    end

    def tail
        current_node = @head
        if current_node.nil?
            return nil
        else
            while current_node.next_node != nil
                current_node = current_node.next_node
            end
        end
        return current_node
    end

    def at(index)
        count = 0
        current_node = @head
        while current_node != nil && count < index
            current_node = current_node.next_node
            count += 1
        end
        return current_node
    end

    def pop
        current_node = @head
        if current_node.nil?
            return nil
        elsif current_node.next_node.nil?
            popped_node = @head
            @head = nil
            return popped_node
        else
            while current_node.next_node.next_node != nil
                current_node = current_node.next_node
            end
        end
        popped_node = current_node.next_node
        current_node.next_node = nil
        return popped_node
    end

    def contains?(value)
        current_node = @head
        while current_node != nil
            if value == current_node.value
                return true
            end
            current_node = current_node.next_node
        end
        return false
    end

    def find(value)
        index = 0
        current_node = @head
        while current_node != nil
            if value == current_node.value
                return index
            end
            current_node = current_node.next_node
            index += 1
        end
        return nil
    end

    def to_s
        result = ""
        current_node = @head
        while current_node != nil
            result += "( #{current_node.value} ) -> "
            current_node = current_node.next_node
        end
        return result += "nil"
    end

    def insert_at(value, index)
        new_node = Node.new(value)
        count = 0
        current_node = @head
        if index == 0
            self.prepend(value)
            return
        elsif index >= self.size
            self.append(value)
            return
        else
            while count < index - 1
                current_node = current_node.next_node
                count += 1
            end
        end
        new_node.next_node = current_node.next_node
        current_node.next_node = new_node
    end

    def remove_at(index)
        count = 0
        current_node = @head
        if @head == nil
            return nil
        elsif index == 0
            removed_node = @head
            @head = @head.next_node
            return removed_node
        else
            while current_node != nil && count < index - 1
                current_node = current_node.next_node
                count += 1
            end
            if current_node.nil? || current_node.next_node.nil?
                return nil
            end
        end
        removed_node = current_node.next_node
        current_node.next_node = current_node.next_node.next_node
        return removed_node
    end
end

class Node
    attr_accessor :value, :next_node
    def initialize(value = nil, next_node = nil)
        @value = value
        @next_node = next_node
    end
end