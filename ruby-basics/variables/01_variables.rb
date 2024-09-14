# Declearing a variable
# This is how to create a variable in Ruby:
age = 18 #=> 18
# You can also assign the result of an expression to a variable.
age = 18 + 5 #=> 23
# Variable names are reusable, so you can assign a new value to a variable at any point in your program. Naturally, doing so will override the original value.
age = 18
age #=> 18
age = 33
age #=> 33
# There will often be scenarios where you want to perform an operation on the original value of a variable and then reassign the result of that operation to the same variable.
age = 18
age #=> 18
age = age + 4
age #=> 22
# Because this is a common scenario, Ruby provides a nice shorthand assignment operator for doing this: +=.
age = 18
age += 4 #=> 22
# There are similar assignment operators for all the common math operators:
age = 18
age -= 2  #=> 16

cash = 10
cash *= 2 #=> 20

temperature = 40
temperature /= 10 #=> 4

# Naming variables clearly will pay dividends when you review your code months after
# you’ve written it, when you can no longer remember what that variable was designed
# to store. From now on, when naming your variables, remember the following quote by
# John Woods:
# "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live."
# The most basic thing you can do to write clean, maintainable code is to name your
# variables properly. So get into this habit early to avoid psychopath programmers
# coming after you.

# Variable names should always be lowercase, and multiple words that make up a
# variable name should be split by an underscore. This is known as snake_case.
# bad
a = 19
string = "John"

# good
age = 19
name = "John"
can_swim = false

# The information you name with a variable is stored in memory on your computer, so a
# variable is effectively a reference or a pointer to that address in memory. This is
# important to know as it can sometimes be the cause of unexpected behavior from your
# code.

# Let’s look at an example of this unexpected behavior, with two variables:
# desired_location, which is assigned to the string “Barcelona”, and johns_location
# which is assigned to the desired_location variable. Both variables are pointing to
# where “Barcelona” is stored in memory.
desired_location = "Barcelona"
johns_location = desired_location

desired_location  #=> "Barcelona"
johns_location    #=> "Barcelona"
# Unexpected behavior happens if the string “Barcelona” that is stored in memory is
# modified. One way to modify a string is to use the upcase! method, instead of the
# safe upcase method. If the string is modified using johns_location.upcase! then
# desired_location will also reflect that change:
johns_location.upcase!  #=> "BARCELONA"

desired_location        #=> "BARCELONA"
johns_location          #=> "BARCELONA"
# This example may be hard to completely understand at this point in the lesson. The
# important concept is that assigning variables to other variables can have unintended
# side effects. Just because you can do it, doesn’t mean you should. You will have the
# opportunity to revisit this example in one of the following assignments.
