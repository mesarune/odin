# Literals in ruby

'Hello, world!'          # string literal
375                      # integer literal
3.141528                 # float literal
true                     # boolean literal
{ 'a' => 1, 'b' => 2 }   # hash literal
[ 1, 2, 3 ]              # array literal
:sym                     # symbol literal
nil                      # nil literal

# Strings

# If you'd like to include single quotes within your string then you have two options. You can either use the double quote method or the single quote method with escaping:
# Ex. 1: with double quotes
"The man said, 'Hi there!'"

# Ex. 2: with single quotes and escaping
'The man said, \'Hi there!\''
# The backslash, or escape (\) character, tells the computer that the quotes that follow it are not meant as Ruby syntax but only as simple quote characters to be included in the string.

# Double quotes allow something called string interpolation. To try it out, type the following into an irb session:
irb :001 > a = 'ten'
=> "ten"

irb :002 > "My favorite number is #{a}!"
=> "My favorite number is ten!"
# String interpolation is a handy way to merge Ruby code with strings. The basic syntax is: #{ruby expression goes here}, and the returned expression will be concatenated with the surrounding string. String interpolation only works within double quotes. You'll get quite familiar with this technique over time.

# Symbols

# Ruby symbols are created by placing a colon (:) before a word.
# Examples of symbols
:name
:a_symbol
:"surprisingly, this is also a symbol"
# Symbols don't have to be valid variable names if the symbol name is enclosed in quotes, as the last example above demonstrates.
# Basically, a symbol is used when you want to reference something like a string but don't ever intend to print it to the screen or change it. It is often referred to as an immutable (i.e. unchangeable) string. While not 100% technically correct, it is a useful mnemonic device for now.

# Numbers

# Numbers are represented many ways in Ruby. The most basic form of a number is called an integer. It is represented by the whole number only, with no decimal point. A more complex form of a number is called a float. A float is a number that contains a decimal.
# Example of integer literals
1, 2, 3, 50, 10, 4345098098

# Example of float literals
1.2345, 2345.4267, 98.2234

# nil

# In programming, we need a way to express "nothing", and in Ruby, we do this through something called nil. A variable with a value of nil could be described as having 'nothing' or being 'completely empty', or even just simply 'not any specific type'. A situation where this may occur is where output is expected but none is returned, such as:
irb :001 > puts "Hello, World!"
Hello, World!
=> nil
# The puts method prints out a string and returns nothing, so we see nil being returned after the string is displayed.

# You can explicitly refer to the nil value by using the nil literal in our code:
irb :002 > x = nil            # nil literal used here
=> nil

# It is possible to check if something is a nil type by using .nil?. For example:
irb :001 > "Hello, World".nil?
=> false

# An important property of the nil type is that when used in an expression, such as an if statement, it will be treated as false, as it represents an absence of content.
irb :001 > if nil
irb :002 > puts "Hello, World!"
irb :003 > end
=> nil
# In the above example, the return value (as shown by the hash rocket =>) is nil, and the code contained within the if is not run, as nil is interpreted as being a false condition. If instead you were to do the following:
irb :001 > if 1
irb :002 > puts "Hello, World!"
irb :003 > end
Hello, World!
=> nil
# Since 1 is not "nothing" or a false value, the code within the if is run and we see the output. We'll talk more about conditionals and if statements later, but just remember that nil can be used within a conditional statement, and will be treated as false.

# There's an important caveat to this which can best be illustrated by the following example:
irb :001 > false == nil
=> false
# While both false and nil are treated as negative when evaluated in an expression, they are not equivalent, as demonstrated by the above.

# Operations

# Basic mathematical operations in Ruby are quite simple. To add two integers together just use the + operator as shown below in irb. Make sure to type these examples into irb and feel free to play with other integers as well.
irb :001 > 1 + 1
=> 2
irb :001 > 1 - 1
=> 0
irb :001 > 4 * 4
=> 16
irb :001 > 16 / 4
=> 4
irb :001 > 16 % 5
=> 1
# When dividing integers, you will only receive an integer in return. We need a different data type if we want more precision. That's where floats come in, which we'll get to in a moment. 

# In order to get a more accurate calculation of the above division problem, we can use floats.
irb :001 > 15.0 / 4
=> 3.75
# Ah, that looks better. Whenever you use a float in an operation, Ruby always returns a float, even if one of the numbers is a plain integer.

# You can also multiply floats to do more complex multiplication.
irb :001 > 9.75 * 4.32
=> 42.120000000000005

# There are times when you want to check if the values of two objects are the same. To test the equality of two things you can use the == operator (read == as "is equal to" or, sometimes, as "equal equal"). This compares the object on the left of the == with the object on the right and returns either true or false. true and false are called boolean values in most programming languages. Let's try some comparisons out in irb. Don't forget to type these examples out as well!
irb :001 > 4 == 4
=> true

irb :002 > 4 == 5
=> false

# You can use the == operator with strings as well.
irb :001 > 'foo' == 'foo'
=> true

irb :002 > 'foo' == 'bar'
=> false

# What happens when you type the following command in irb?
irb :001 > '4' == 4
# This comparison returns false because we are comparing two different types.

# String concatenation looks a lot like addition. When you use the + operator to join two strings together, you are performing a string concatenation. Back to irb!
irb :001 > 'foo' + 'foo'
=> "foofoo"

irb :002 > 'foo' + 'bar'
=> "foobar"

# Let's try something a little different. What will the following return? Try it out for yourself.
irb :001 > '1' + '1'
# If you were thinking 2, that definitely makes sense. But since '1' and '1' are both strings, they are concatenated, not added. That's why you ended up with '11'.

# What happens if we try to concatenate a string with a number?
irb :001 > 'one' + 1
=> TypeError: no implicit conversion of Integer into String
   from (irb):1:in `+'
   from (irb):1
   from /usr/local/rvm/rubies/ruby-2.5.3/bin/irb:16:in `<main>'
# Looks like we have an error message! The interpreter is complaining that it can't implicitly convert an Integer into a String. What does that mean? In this case, it looks like we cannot add an Integer and String together.

# Type Conversion

# But what if we need to add a String and an Integer together? Suppose we got some user input of '12', which is a String, but we want to increment this by 2. We know that we can't just do '12' + 2, as we'll get an error.
# There's a handy method that we can call which will convert a String to a Integer, and it's called to_i. You can call it on any String like this:
irb :001 > '12'.to_i
=> 12
# You can see that this returns an Integer. Ok, we've used some new words like method and returns. These are really important to understand, and you'll be exposed to them throughout this book. For now, just know that we can call to_i on strings and then we can perform integer operations, like adding and subtracting, on the result.

# Play with to_i in irb on some strings and see what you get. You may be surprised by the results. There are also other useful conversion operators, like to_f, that you may be interested in testing out as well.
irb :001 > '4'.to_i
=> 4

irb :002 > '4 hi there'.to_i
=> 4

irb :003 > 'hi there 4'.to_i
=> 0

irb :004 > '4'.to_f
=> 4.0

irb :005 > '4 hi there'.to_f
=> 4.0

irb :006 > 'hi there 4'.to_f
=> 0.0
# And if you guessed that there's a similar to_s method to convert integers and floats into strings, you would be right. We'll leave this method as an exercise for you to play around with in irb.

# Basic Data Structures

# Two very common data structures that you will use as a Ruby programmer are arrays and hashes. They will be covered in more depth later in this book, but we wanted to give you a taste of them early on for a smoother learning curve.

# An array is used to organize information into an ordered list. The list can be made up of strings, integers, floats, booleans, or any other data type. In Ruby, an array literal is denoted by square brackets [ ]. Inside the brackets you can create a list of elements separated by commas. Let's make one in irb.
irb :001 > [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
# We've created an array of integers 1 through 5. Each element in an array can be accessed via an index. The indexes are numbered starting at zero. Thus, if we wanted only the first element in the array we could do this.
irb :001 > [ 1, 2, 3, 4, 5][0]
=> 1
# Don't worry if the [0] part threw you. We will cover arrays in much more detail later. This is just meant to show you that the first element, the number 1, is located in the 0 index of the array. 

# A hash, sometimes referred to as a dictionary, is a set of key-value pairs. Hash literals are represented with curly braces { }. A key-value pair is an association where a key is assigned a specific value. A hash consists of a key, usually represented by a symbol, that points to a value (denoted using a =>) of any type of data. Let's make some hashes to get the feel of it. Type along!
irb :001 > {:dog => 'barks'}
=> {:dog => 'barks'}
# The above is a hash literal that specifies a single key-value pair. Like arrays, we can have multiple items in a hash if we separate them with commas, but they will not necessarily be in any specific order. Let's add some more items to our hash.
irb :001 > {:dog => 'barks', :cat => 'meows', :pig => 'oinks'}
=> {:dog => 'barks', :cat => 'meows', :pig => 'oinks'}
# What if we wanted to find out what noise a cat makes? We can retrieve a value by its key:
irb :001 > {:dog => 'barks', :cat => 'meows', :pig => 'oinks'}[:cat]
=> "meows"
# Once again, right now it's only important that you understand these basic data structures. They are the building blocks of programming and you'll be exploring these for a long time as you grow as a Ruby developer. The most important thing to remember about hashes is that you use keys to set or retrieve values. Let's move on for now and we'll visit these concepts again later on.
