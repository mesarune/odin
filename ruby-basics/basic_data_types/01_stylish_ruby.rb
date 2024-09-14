# 1.Your text editor's tab function should be set to 2 spaces and indenting should be set to use spaces.

# 2.When you see the # sign at the beginning of a line, that means anything after it, on the same line, is a comment. Comments are used by programmers to leave notes for other programmers or themselves at a later point in time.

# 3.When you define or initialize a method, variable, or file, you should always use snake_case formatting. snake_case formatting is created using all lower case letters and separating words with the underscore character.

 # Naming a file
 this_is_a_snake_cased_file.rb
 
 # Assigning a variable
 forty_two = 42

 # Defining a method
 def this_is_a_great_method
   # do stuff
 end

# 4.When you want to represent a value that will not change in your Ruby program, you define a constant variable, often referred to as a constant. In Ruby, constants are denoted with all uppercase letters.

 # Constant declaration
 FOUR = 'four'
 FIVE = 5

# 5.When working with do/end blocks, prefer { } when the entire code expression fits on one line.

  # Multi-line
  [1, 2, 3].each do |i|
    # do stuff
  end

  # Does the same thing in single line
  [1, 2, 3].each { |i| do_some_stuff }

# 6.The last style convention you'll need to learn at this point is how to declare a class name. When naming your classes you will use PascalCase formatting, based on the naming style used in the Pascal programming language (the word is capitalized to distinguish it from camelCase). PascalCase uses no spaces and capitalizes every word. When Pascal came out, what is now known as PascalCase had been previously known as CamelCase, or upper CamelCase, so be aware that you may see it called this in some materials.

  # Class naming
  class MyFirstClass
  end

  class MySecondClass
  end

