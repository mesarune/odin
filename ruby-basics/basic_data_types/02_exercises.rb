# Add two strings together that, when concatenated, return your first and last name as your full name in one string.
irb(main):002> firstname = "Yuito"
=> "Yuito"
irb(main):003> lastname = "Taniguchi"
=> "Taniguchi"
irb(main):004> puts "#{firstname} #{lastname}"
Yuito Taniguchi
=> nil

# Use the modulo operator, division, or a combination of both to take a 4 digit number and find the digit in the: 1) thousands place 2) hundreds place 3) tens place 4) ones place
irb(main):005> 2049/1000
=> 2
irb(main):006> 2049%1000/100
=> 0
irb(main):007> 2049%100/10
=> 4
irb(main):008> 2049%10/1
=> 9

# Write a program that uses a hash to store a list of movie titles with the year they came out. Then use the puts command to make your program print out the year of each movie to the screen. The output for your program should look something like this.
1975
2004
2013
2001
1981

irb(main):009* movies = {:jaws => 1975,
irb(main):010*   :troy => 2004,
irb(main):011*   :"47 ronin" => 2013,
irb(main):012*   :avalon => 2001,
irb(main):013> :"the boat" => 1981,}
=> {:jaws=>1975, :troy=>2004, :"47 ronin"=>2013, :avalon=>2001, :"the boat"=>1981}
irb(main):014* for i in movies do
irb(main):015*   puts i
irb(main):016> end
jaws
1975
troy
2004
47 ronin
2013
avalon
2001
the boat
1981
=> {:jaws=>1975, :troy=>2004, :"47 ronin"=>2013, :avalon=>2001, :"the boat"=>1981}

# Use the dates from the previous example and store them in an array. Then make your program output the same thing as exercise 3.
irb(main):017> date = [1975, 2004, 2013, 2001, 1981]
=> [1975, 2004, 2013, 2001, 1981]
irb(main):018* for i in date do
irb(main):019*   puts i
irb(main):020> end
1975
2004
2013
2001
1981
=> [1975, 2004, 2013, 2001, 1981]

# Write a program that outputs the factorial of the numbers 5, 6, 7, and 8.
irb(main):021> puts 5 * 4 * 3 * 2 * 1
120
=> nil
irb(main):022> puts 6 * 5 * 4 * 3 * 2 * 1
720
=> nil
irb(main):023> puts 7 * 6 * 5 * 4 * 3 * 2 * 1
5040
=> nil
irb(main):024> puts 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
40320
=> nil

# Write a program that calculates the squares of 3 float numbers of your choosing and outputs the result to the screen.
irb(main):025> puts 3.14 * 3.14
9.8596
=> nil
irb(main):026> puts 0.63 * 0.63
0.39690000000000003
=> nil
irb(main):027> puts 6.28 * 6.28
39.4384
=> nil

# What does the following error message tell you?
SyntaxError: (irb):2: syntax error, unexpected ')', expecting '}'
  from /usr/local/rvm/rubies/ruby-2.5.3/bin/irb:16:in `<main>'
# There is a closing ) somewhere in the program without a corresponding opening (, and an opening { without a corresponding closing }. It may have happened when creating a hash.
