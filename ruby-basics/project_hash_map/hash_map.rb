class Node
    attr_accessor :key, :value, :next_node
    def initialize(key = nil, value = nil, next_node = nil)
        @key = key
        @value = value
        @next_node = next_node
    end
end

class LinkedList
    def initialize
        @head = nil
    end

    def append(key, value)
        new_node = Node.new(key, value)
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

    def find_node_by_key(key)
        current_node = @head
        while current_node != nil
            if current_node.key == key
                return current_node
            end
            current_node = current_node.next_node
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

    def get_all_entries
        entries = []
        current_node = @head
        while current_node
            entries << [current_node.key, current_node.value]
            current_node = current_node.next_node
        end
        return entries
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

    def delete_by_key(key)
        if @head.nil?
            return nil
        end

        current_node = @head
        previous_node = nil
        deleted_value = nil
        while current_node
            if current_node.key == key
                deleted_value = current_node.value
                if current_node == @head
                    @head = current_node.next_node
                else
                    previous_node.next_node = current_node.next_node
                end
                return deleted_value
            end
            
            previous_node = current_node
            current_node = current_node.next_node
        end
        return nil
    end
end

class HashMap
    attr_accessor :load_factor, :capacity, :buckets, :size
    def initialize(load_factor = 0.75, capacity = 16)
        @load_factor = load_factor
        @capacity = capacity
        @buckets = Array.new(@capacity)
        @size = 0
    end

    private def hash(key)
        hash_code = 0
        prime_number = 31

        key.each_char { |char| hash_code = hash_code * prime_number + char.ord}

        hash_code % @capacity
    end

    def set(key, value)
        index = hash(key)
        raise IndexError if index.negative? || index >= @buckets.length
        if @buckets[index].nil?
            @buckets[index] = LinkedList.new
        end

        bucket = @buckets[index]
        node = bucket.find_node_by_key(key)
        if node
            node.value = value
        else

            bucket.append(key, value)
            @size += 1

            check_capacity
        end
    end

    def get(key)
        index = hash(key)
        bucket = @buckets[index]
        if bucket.nil?
            return nil
        end

        node = bucket.find_node_by_key(key)
        if node
            return node.value
        else
            return nil
        end
    end

    def has?(key)
        !get(key).nil?
    end

    def remove(key)
        index = hash(key)
        bucket = @buckets[index]
        if bucket.nil?
            return nil
        end

        deleted_value = bucket.delete_by_key(key)

        if deleted_value
            @size -= 1
        end

        return deleted_value
    end

    def length
        @size
    end

    def clear
        @buckets = Array.new(@capacity)
        @size = 0
    end

    def entries
        all_entries = []
        @buckets.each do |bucket|
            if bucket.nil?
                next
            end

            all_entries.concat(bucket.get_all_entries)
        end
        all_entries
    end

    def keys
        self.entries.map { |key, value| key }
    end

    def values
        self.entries.map { |key, value| value }
    end

    private def check_capacity
        if @size.to_f / @capacity > @load_factor
            expand
        end
    end

    private def expand
        old_entries = self.entries
        @capacity *= 2
        @buckets = Array.new(@capacity)
        @size = 0

        old_entries.each do |key, value|
            set(key, value)
        end
    end
end