# 1.Given a hash of family members, with keys as the title and an array of names as the values,
# use Ruby's built-in select method to gather only siblings' names into a new array.

irb(main):001* family = {  uncles: ["bob", "joe", "steve"],
irb(main):002*             sisters: ["jane", "jill", "beth"],
irb(main):003*             brothers: ["frank","rob","david"],
irb(main):004*             aunts: ["mary","sally","susan"]
irb(main):005>           }
=> 
{:uncles=>["bob", "joe", "steve"],
...
irb(main):006> siblings = family.select { |key, value| key == :sisters || key == :brothers }
=> {:sisters=>["jane", "jill", "beth"], :brothers=>["frank", "rob", "david"]}
irb(main):007> p siblings.values.flatten
["jane", "jill", "beth", "frank", "rob", "david"]
=> ["jane", "jill", "beth", "frank", "rob", "david"]
irb(main):008> 

# 2.Look at Ruby's merge method. Notice that it has two versions. What is the difference between merge and merge!?
# Write a program that uses both and illustrate the differences.

irb(main):001> artist = { :name => "AFX" }
=> {:name=>"AFX"}
irb(main):002> song = { :song => "Xtal" }
=> {:song=>"Xtal"}
irb(main):003> puts artist.merge(song)
{:name=>"AFX", :song=>"Xtal"}
=> nil
irb(main):004> puts artist
{:name=>"AFX"} # merge does not modifies original hash.
=> nil
irb(main):005> puts song
{:song=>"Xtal"}
=> nil
irb(main):006> puts artist.merge!(song)
{:name=>"AFX", :song=>"Xtal"}
=> nil
irb(main):007> puts artist
{:name=>"AFX", :song=>"Xtal"} # merge! modifies original hash.
=> nil
irb(main):008> puts song
{:song=>"Xtal"}
=> nil

# 3.Using some of Ruby's built-in Hash methods, write a program that loops through a hash and prints all of the keys.
# Then write a program that does the same thing except printing the values. Finally, write a program that prints both.

irb(main):012> opposites = {positive: "negative", up: "down", right: "left"}
=> {:positive=>"negative", :up=>"down", :right=>"left"}
irb(main):013> opposites.each_key { |key| puts key }
positive
up
right
=> {:positive=>"negative", :up=>"down", :right=>"left"}
irb(main):014> opposites.each_value { |value| puts value }
negative
down
left
=> {:positive=>"negative", :up=>"down", :right=>"left"}
irb(main):015> opposites.each { |key, value| puts "The opposite of #{key} is #{value}" }
The opposite of positive is negative
The opposite of up is down
The opposite of right is left
=> {:positive=>"negative", :up=>"down", :right=>"left"}
irb(main):016> 

# 4.Given the following expression, how would you access the name of the person?

irb(main):016> person = {name: 'Bob', occupation: 'web developer', hobbies: 'painting'}
=> {:name=>"Bob", :occupation=>"web developer", :hobbies=>"painting"}
irb(main):017> person[:name]
=> "Bob"
irb(main):018> 

# 5.What method could you use to find out if a Hash contains a specific value in it?
# Write a program that verifies that the value is within the hash.

irb(main):018> numbers = {:one => 1, :two => 2, :three => 3, :four => 4, :five => 5}
=> {:one=>1, :two=>2, :three=>3, :four=>4, :five=>5}
irb(main):019> numbers.has_value?(3)
=> true
irb(main):020> 

# 6.Given the following code...

irb(main):020> x = "hi there"
=> "hi there"
irb(main):021> my_hash = {x: "some value"}
=> {:x=>"some value"}
irb(main):022> my_hash2 = {x => "some value"}
=> {"hi there"=>"some value"}
irb(main):023> 

# What's the difference between the two hashes that were created?

# The first hash that was created used a symbol x as the key.
# The second hash used the string value of the x variable as the key.

# 7.If you see this error, what do you suspect is the most likely problem?

# NoMethodError: undefined method `keys' for Array

# A. We're missing keys in an array variable.
# B. There is no method called keys for Array objects.
# C. keys is an Array object, but it hasn't been defined yet.
# D. There's an array of strings, and we're trying to get the string keys out of the array, but it doesn't exist.

# B.
