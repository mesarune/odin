# 1.Write a program called name.rb that asks the user to type in their name and then prints out a greeting message
# with their name included.

# name.rb

puts "What is your name?"
name = gets.chomp
puts "Hello " + name

mesa_rune@YMB2 variables % ruby name.rb 
What is your name?
Yuito
Hello Yuito

# 2.Write a program called age.rb that asks a user how old they are and then tells them how old they will be in 10, 20,
# 30 and 40 years. Below is the output for someone 20 years old.

# output of age.rb for someone 20 yrs old

How old are you?
In 10 years you will be:
30
In 20 years you will be:
40
In 30 years you will be:
50
In 40 years you will be:
60

# age.rb

puts "How old are you?"
age = gets.chomp.to_i
puts "In 10 years you will be:"
puts age + 10
puts "In 20 years you will be:"
puts age + 20
puts "In 30 years you will be:"
puts age + 30
puts "In 40 years you will be:"
puts age + 40

mesa_rune@YMB2 variables % ruby age.rb 
How old are you?
35
In 10 years you will be:
45
In 20 years you will be:
55
In 30 years you will be:
65
In 40 years you will be:
75

# 3.Add another section onto name.rb that prints the name of the user 10 times. You must do this without explicitly
# writing the puts method 10 times in a row. Hint: you can use the times method to do something repeatedly.

# name.rb

10.times do
  puts name
end

mesa_rune@YMB2 variables % ruby name.rb 
What is your name?
Yuito
Hello Yuito
Yuito
Yuito
Yuito
Yuito
Yuito
Yuito
Yuito
Yuito
Yuito
Yuito

# 4.Modify name.rb again so that it first asks the user for their first name, saves it into a variable, and then does the
# same for the last name. Then outputs their full name all at once.

#name.rb

puts "What is your firstName?"
first_name = gets.chomp
puts "What is your lastName?"
last_name = gets.chomp
puts "Hello " + first_name + " " + last_name

mesa_rune@YMB2 variables % ruby name.rb 
What is your firstName?
Yuito
What is your lastName?
Taniguchi
Hello Yuito Taniguchi

#4.Look at the following programs...

x = 0
3.times do
  x += 1
end
puts x

# and...

y = 0
3.times do
  y += 1
  x = y
end
puts x

# What does x print to the screen in each case? Do they both give errors? Are the errors different? Why?

#The first one print 3, the second one goes error