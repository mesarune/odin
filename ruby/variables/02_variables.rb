# When you assign a variable, you use the = symbol. The name of the variable goes on the left and the value you want to
# store in the variable goes on the right.
irb :001 > first_name = 'Joe'
=> "Joe"
# Here we've assigned the value 'Joe', which is a string, to the variable first_name. Now if we want to reference that
# variable, we can.
irb :002 > first_name
=> "Joe"
# As you can see, we've now stored the string 'Joe' in memory for use throughout the program.

# Let's try a little something. Look at the following irb session.
irb :001 > a = 4
=> 4
irb :002 > b = a
=> 4
irb :003 > a = 7
=> 7
# What is the value of b at this point? Take your best guess and then type this session into irb to find out.
irb(main):001> a = 4
=> 4
irb(main):002> b = a
=> 4
irb(main):003> a = 7
=> 7
irb(main):004> b
=> 4
# You'll notice that the value of b remains 4, while a was re-assigned to 7. This shows that variables point to values in
# memory, and are not deeply linked to each other. If this is confusing, don't worry, we'll have plenty of exercises for you to
# complete that will make this information clear and obvious. And when in doubt, always try it out in irb.

# Up until now, you've only been able to assign data to variables from within the program. However, in the wild, you'll want
# other people to be able to interact with your programs in interesting ways. In order to do that, we have to allow the user
# to store information in variables as well. Then, we can decide what we'd like to do with that data.

# One way to get information from the user is to call the gets method. gets stands for "get string", and is a lot of fun.
# When you use it, the program waits for the user to 1) type in information and 2) press the enter key. Let's try it out. Type
# these examples in irb to get the feel and play around with them for a bit if you'd like to.
irb :001 > name = gets
Bob
=> "Bob\n"
# After the code, name = gets, the computer waited for us to type in some information. We typed "Bob" and then pressed
# enter and the program returned "Bob\n". The \n at the end is the "newline" character and represents the enter key. But
# we don't want that as part of our string. We'll use chomp chained to gets to get rid of that - you can put .chomp after
# any string to remove the carriage return characters at the end.
irb :001 > name = gets.chomp
Bob
=> "Bob"
# There we go! That's much prettier. Now we can use the name variable as we so please.
irb :001 > name = gets.chomp
Bob
=> "Bob"
irb :002 > name + ' is super great!'
=> "Bob is super great!"

# A variable's scope determines where in a program a variable is available for use. A variable's scope is defined by where the
# variable is initialized or created. In Ruby, variable scope is defined by a method definition or by a block. They have
# different behaviors when it comes to variable scope.

# We'll learn about methods in the next chapter. For now, you can think of methods as pieces of reusable code that your
# program can execute many times during its run. Method definitions look like this:
name = 'Somebody Else'

def print_full_name(first_name, last_name)
  name = first_name + ' ' + last_name
  puts name
end
# Once we have the method defined, we can call it as many times as we need with different values for first_name and
# last_name:
print_full_name 'Peter', 'Henry'   # prints Peter Henry
print_full_name 'Lynn', 'Blake'    # prints Lynn Blake
print_full_name 'Kim', 'Johansson' # prints Kim Johansson
puts name                          # prints Somebody Else
# In terms of variable scope, methods have self-contained scope. That means that only variables initialized within the
# method's body can be referenced or modified from within the method's body. Additionally, variables initialized inside a
# method's body aren't available outside the method's body. It's a bit like an impenetrable bubble. Thus, in the above code,
# we can't use or change the name variable from line 1 from inside the print_full_name method. We can, however,
# create and use a different name variable that is locally scoped to the method. That is why lines 4 and 5 work without
# changing the value of name from line 1.

# A block is a piece of code that follows a method's invocation, delimited by either curly braces {} or do/end:
total = 0
[1, 2, 3].each { |number| total += number }
puts total # 6

total = 0
[1, 2, 3].each do |number|
  total += number
end
puts total # 6
# In the examples above, { |number| ... } is a block, as is do |number| ... end. Though they look different, the
# behavior is identical. In both cases, the code can access and modify variables that are defined outside of the block. Thus,
# both blocks can access and modify total. However, any variables initialized inside the block (such as number) can't be
# accessed by the outer code.

# With blocks, the one rule that we want to emphasize is that: Inner scope can access variables initialized in an outer
# scope, but not vice versa.

# Looking at some code will make this clearer. Let's say we have a file called scope.rb.
# scope.rb

a = 5             # variable is initialized in the outer scope

3.times do |n|    # method invocation with a block
  a = 3           # is a accessible here, in an inner scope?
end

puts a
# What is the value of a when it is printed to the screen? Try it out.
irb(main):009> a = 5
=> 5
irb(main):010* 3.times do |n|
irb(main):011*   a = 3
irb(main):012> end
=> 3
irb(main):013> puts a
3
=> nil
# The value of a is 3. This is because a is available to the inner scope created by 3.times do ... end, which allowed
# the code to re-assign the value of a. In fact, it re-assigned it three times to 3.

# Note that blocks can also be written with curly braces, though common practice is to only use them for one-liners:
# the method call and the block must fit on the same line. For instance, here's the times loop from above
# rewritten using braces:
3.times { |n| a = 3 }
# Curly brace blocks are identical to do...end blocks in terms of scope.

# Let's try something else. We'll modify the original scope.rb code:
# scope.rb

a = 5

3.times do |n|    # method invocation with a block
  a = 3
  b = 5           # b is initialized in the inner scope
end

puts a
puts b            # is b accessible here, in the outer scope?
# What result did you get when running that program? You should have gotten an error to the tune of:
# scope.rb:11:in `<main>': undefined local variable or method `b' for main:Object
# (NameError)
# This is because the variable b is not available outside of the method invocation with a block where it is initialized. When
# we call puts b it is not available within that outer scope.

# Be aware that not all do...end pairs imply a block. We will explore this in much greater detail in later courses. In
# particular, a do...end on a for or while loop is not a block.

# Put another way, the key distinguishing factor for deciding whether code delimited by {} or do/end is
# considered a block (and thereby creates a new scope for variables), is seeing if the {} or do/end immediately
# follows a method invocation. For example:
arr = [1, 2, 3]

for i in arr do
  a = 5      # a is initialized here
end

puts a       # is it accessible here?

irb(main):014> arr = [1, 2, 3]
=> [1, 2, 3]
irb(main):015* for i in arr do
irb(main):016*   a = 5
irb(main):017> end
=> [1, 2, 3]
irb(main):018> puts a
5
=> nil
# The answer is yes. The reason is because the for...do/end code did not create a new inner scope, since for is
# part of Ruby language and not a method invocation. When we use each, times and other method invocations,
# followed by {} or do/end, that's when a new block is created.
