require_relative 'hash_map'

test = HashMap.new

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

puts "--- entries ---"
p test.entries
puts "\n--- length ---"
p test.length

test.set('apple', 'blue')

puts "\n--- test.set('apple', 'blue') ---"
p test.entries
puts "\n--- length ---"
p test.length

test.set('moon', 'silver')

puts "\n--- test.set('moon', 'silver') ---"
p test.entries
puts "\n--- length ---"
p test.length