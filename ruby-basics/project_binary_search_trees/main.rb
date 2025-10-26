require_relative 'binary_search_tree'

# 1. Create a binary search tree from an array of random numbers
random_array = Array.new(15) { rand(1..100) }
tree = Tree.new(random_array)

puts "--- 1. Building and Visualization of the Initial Tree ---"
tree.pretty_print

# 2. Confirm that the tree is balanced by calling #balanced?
puts "\n--- 2. Balance Check of the Initial Tree ---"
puts "balanced?: #{tree.balanced?}"

# 3. Print out all elements in level, pre, post, and in order
puts "\n--- 3. Print All Elements ---"
puts "level_order: #{tree.level_order}"
puts "preorder: #{tree.preorder}"
puts "postorder: #{tree.postorder}"
puts "inorder: #{tree.inorder}"

# 4. Unbalance the tree by adding several numbers > 100
puts "\n--- 4. Executing Unbalancing ---"
tree.insert(101)
tree.insert(102)
tree.insert(103)
tree.pretty_print

# 5. Confirm that the tree is unbalanced by calling #balanced?
puts "\n--- 5. Balance Check After Unbalancing ---"
puts "balanced?: #{tree.balanced?}"

# 6. Balance the tree by calling #rebalance
puts "\n--- 6. Executing Tree Rebalancing ---"
tree.rebalance
tree.pretty_print

# 7. Confirm that the tree is balanced by calling #balanced?
puts "\n--- 7. Balance Check After Rebalancing ---"
puts "balanced?: #{tree.balanced?}"

# 8. Print out all elements in level, pre, post, and in order
puts "\n--- 8. Print All Elements Post-Rebalance ---"
puts "level_order: #{tree.level_order}"
puts "inorder: #{tree.inorder}"