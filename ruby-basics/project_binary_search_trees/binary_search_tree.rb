class Node
    attr_accessor :data, :left, :right
    include Comparable
    def initialize(data = nil, left = nil, right = nil)
        @data = data
        @left = left
        @right = right
    end

    def <=> (other_node)
        @data <=> other_node.data
    end
end

class Tree
    attr_accessor :root
    def initialize(array = [])
        @root = build_tree(array)
    end

    def build_tree(array)
        sorted_array = array.uniq.sort
        recursive_build(sorted_array)
    end

    private def recursive_build(array)
        if array.empty?
            return nil
        end

        mid = (array.length - 1) / 2
        node = Node.new(array[mid])
        
        node.left = build_tree(array[0...mid])
        node.right = build_tree(array[mid + 1..-1])
        return node
    end

    def inorder(node = @root, array = [], &block)
        if node.nil?
            return array
        end

        inorder(node.left, array, &block)

        if block_given?
            yield node
        else
            array.push(node.data)
        end

        inorder(node.right, array, &block)

        return array
    end

    def preorder(node = @root, array = [], &block)
        if node.nil?
            return array
        end

        if block_given?
            yield node
        else
            array.push(node.data)
        end

        preorder(node.left, array, &block)

        preorder(node.right, array, &block)

        return array
    end

    def postorder(node = @root, array = [], &block)
        if node.nil?
            return array
        end

        postorder(node.left, array, &block)

        postorder(node.right, array, &block)

        if block_given?
            yield node
        else
            array.push(node.data)
        end

        return array
    end

    def level_order(&block)
        if @root.nil?
            return []
        end

        queue = [@root]
        array = []

        while !queue.empty?
            current_node = queue.shift
            if block_given?
                yield current_node
            else
                array.push(current_node.data)
            end

            if !current_node.left.nil?
                queue.push(current_node.left)
            end

            if !current_node.right.nil?
                queue.push(current_node.right)
            end
        end

        return array
    end

    def insert(value)
        if @root.nil?
            @root = Node.new(value)
            return
        end

        current_node = @root
        previous_node = nil

        while current_node
            previous_node = current_node
            if value < current_node.data
                current_node = current_node.left
            elsif value > current_node.data
                current_node = current_node.right
            else
                return
            end
        end

        if value < previous_node.data
            previous_node.left = Node.new(value)
        elsif value > previous_node.data
            previous_node.right = Node.new(value)
        end

        return
    end

    def find(value)
        if @root.nil?
            return
        end

        current_node = @root

        while current_node
            if value < current_node.data
                current_node = current_node.left
            elsif value > current_node.data
                current_node = current_node.right
            elsif value == current_node.data
                return current_node
            end
        end

        return
    end

    def delete(value)
        if @root.nil?
            return
        end

        current_node = @root
        previous_node = nil

        while current_node && value != current_node.data
            previous_node = current_node
            if value < current_node.data
                current_node = current_node.left
            elsif value > current_node.data
                current_node = current_node.right
            end
        end

        next_node = current_node.left || current_node.right

        if current_node.nil?
            return
        end

        if current_node.left && current_node.right
            next_node = current_node.right
            while next_node.left
                next_node = next_node.left
            end

            current_node.data = next_node.data

            return delete(next_node.data)
        end

        if previous_node.nil?
            @root = next_node
        elsif current_node == previous_node.left
            previous_node.left = next_node
        else
            previous_node.right = next_node
        end

        return
    end

    def height(value)
        target_node = find(value)
        if target_node.nil?
            return nil
        end

        return count_height(target_node)
    end

    private def count_height(node = @root)
        if node.nil?
            return -1
        end

        left_height = count_height(node.left)
        right_height = count_height(node.right)

        return 1 + [left_height, right_height].max
    end

    def depth(value)
        node = @root
        count = 0
        if node.nil?
            return nil
        end

        while !node.nil?
            if value == node.data
                return count
            elsif value < node.data
                node = node.left
                count += 1
            elsif value > node.data
                node = node.right
                count += 1
            end
        end

        return nil
    end

    def balanced?(node = @root)
        if node.nil?
            return true
        end

        left_height = count_height(node.left)
        right_height = count_height(node.right)

        check_balance = (left_height - right_height).abs <= 1

        return check_balance && balanced?(node.left) && balanced?(node.right)
    end

    def rebalance
        sorted_array = inorder

        @root = build_tree(sorted_array)
    end

    def pretty_print(node = @root, prefix = '', is_left = true)
        pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
        puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
        pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
    end

end