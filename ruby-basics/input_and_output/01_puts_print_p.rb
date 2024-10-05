# There are many ways to print something in Ruby.
# Here are the most useful:
# puts
# print
# p
# But how are these different?

# How to Print Without A Newline

print 123
print 456
print 789
123456789

puts 123
puts 456
puts 789
123
456
789

# Puts also treats arrays in a different way.

puts [1,2]
1
2

print [1,2]
[1,2]

# Puts attempts to convert everything into a string (by calling to_s).
# if you’re trying to puts an array with nil values
# It’s going to show some blanks lines!

puts [1,nil,nil,2]
1


2

# To summarize, puts & print:
# Convert things to strings, even if that means an empty string

# Only puts:
# Adds a new line to the end of your messages
# Displays array elements one-per-line

# Debug Output With P
# p is a method that shows a more “raw” version of an object.

> puts "Ruby Is Cool"
Ruby Is Cool

> p "Ruby Is Cool"
"Ruby Is Cool"

# What is p useful for?
# Debugging.
# When you’re looking for things like (normally invisible) newline characters, or you want to make sure some value is correct,
# then you use p.

# Another difference:
# puts always returns nil
# p returns the object you pass to it
# This is a more technical difference…
# But it can show up if you try to puts a variable as the last line of a method, and you’re using the return value of that method.

def numbers
  puts 123
end

numbers
# nil

# In this example, the numbers method will display 123 on the screen, but its return value will be nil.
# If you try:

result = numbers

# Then result will be nil, instead of 123.
# But if you use p then it will work.
