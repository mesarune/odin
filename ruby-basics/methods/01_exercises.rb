# 1.Write a program that prints a greeting message. 
# This program should contain a method called greeting that takes a name as its parameter and returns a string.

irb(main):001* def greeting(name)
irb(main):002*   "Hello, " + name + "."
irb(main):003> end
=> :greeting
irb(main):004> puts greeting("World")
Hello, World.
=> nil

# 2.What do the following expressions evaluate to? That is, what value does each expression return?

1. x = 2

2. puts x = 2

3. p name = "Joe"

4. four = "four"

5. print something = "nothing"

# 2
# nil
# "Joe"
# "four"
# nil

# 3.Write a program that includes a method called multiply that takes two arguments and returns the product of the two numbers.

irb(main):005* def multiply(num1, num2)
irb(main):006*   num1 * num2
irb(main):007> end
=> :multiply
irb(main):008> puts multiply(3, 3)
9
=> nil

# 4.What will the following code print to the screen?

def scream(words)
    words = words + "!!!!"
    return
    puts words
  end
  
  scream("Yippeee")

# "Yippeee!!!!" <- Wrong answer
# It will not print anything to the screen.Becouse of the return at line 44.

# 5.1) Edit the method definition in exercise #4 so that it does print words on the screen.
#   2) What does it return now?

irb(main):009* def scream(words)
irb(main):010*   words = words + "!!!!"
irb(main):011*   puts words
irb(main):012> end
=> :scream
irb(main):013> scream("Yippeee")
Yippeee!!!!
=> nil

# 2) nil

# 6.What does the following error message tell you?

ArgumentError: wrong number of arguments (1 for 2)
  from (irb):1:in `calculate_product'
  from (irb):4
  from /Users/username/.rvm/rubies/ruby-2.5.3/bin/irb:12:in `<main>'
  
# You are calling a method called calculate_product that requires two arguments, but you are only providing one.
