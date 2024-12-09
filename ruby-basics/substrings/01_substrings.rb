def substrings(keyword, dictionary)
  result = {}
  dictionary.each do |word|
    result[word] = (keyword.count(word))
  end
  return result
end
=> :substrings

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
=> 
["below",
...

substrings("below", dictionary)
=> 
{"below"=>5,
 "down"=>2,
 "go"=>1,
 "going"=>1,
 "horn"=>1,
 "how"=>2,
 "howdy"=>2,
 "it"=>0,
 "i"=>0,
 "low"=>3,
 "own"=>2,
 "part"=>0,
 "partner"=>1,
 "sit"=>0}

def substrings(keyword, dictionary)
  result = {}
  dictionary.each do |word|
    if keyword.include?(word)
      result[word] += 1
    end
  end
  return result
end
=> :substrings

substrings("below", dictionary)
(irb):14:in `block in substrings': undefined method `+' for nil (NoMethodError)

      result[word] += 1
                   ^
	from (irb):12:in `each'
	from (irb):12:in `substrings'
	from (irb):19:in `<main>'
	from <internal:kernel>:187:in `loop'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

def substrings(keyword, dictionary)
  result = {}
  dictionary.each do |word|
    result[word] = 0
  end
  dictionary.each do |word|
    if keyword.include?(word)
      result[word] += 1
    end
  end
  return result
end
=> :substrings

substrings("below", dictionary)
=> 
{"below"=>1,
 "down"=>0,
 "go"=>0,
 "going"=>0,
 "horn"=>0,
 "how"=>0,
 "howdy"=>0,
 "it"=>0,
 "i"=>0,
 "low"=>1,
 "own"=>0,
 "part"=>0,
 "partner"=>0,
 "sit"=>0}

def substrings(keyword, dictionary)
  result = {}
  dictionary.each do |word|
    result[word] = 0
  end
  dictionary.each do |word|
    if keyword.include?(word)
      result[word] += 1
    else
      result.delete(word)
    end
  end
  return result
end
=> :substrings

substrings("below", dictionary)
=> {"below"=>1, "low"=>1}

substrings("Howdy partner, sit down! How's it going?", dictionary)
=> 
{"down"=>1,
 "go"=>1,
 "going"=>1,
 "it"=>1,
 "i"=>1,
 "own"=>1,
 "part"=>1,
 "partner"=>1,
 "sit"=>1}

def substrings(keywords, dictionary)
  result = {}
  keywords_array = keywords.split(" ")
  dictionary.each do |word|
    result[word] = 0
  end
  keywords_array.each do |keyword|
    dictionary.each do |word|
      if keyword.include?(word)
        result[word] += 1
      end
    end
  end
  result.each do |key, value|
    if value == 0
      result.delete(key)
    end
  end
  return result
end
=> :substrings

substrings("Howdy partner, sit down! How's it going?", dictionary)
=> 
{"down"=>1,
 "go"=>1,
 "going"=>1,
 "it"=>2,
 "i"=>3,
 "own"=>1,
 "part"=>1,
 "partner"=>1,
 "sit"=>1}

p "Test 123".downcase
"test 123"
=> "test 123"

p 123.downcase
(irb):112:in `<main>': undefined method `downcase' for an instance of Integer (NoMethodError)

      p 123.downcase
           ^^^^^^^^^
	from <internal:kernel>:187:in `loop'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

p 123.downcase(:ascii)
(irb):113:in `<main>': undefined method `downcase' for an instance of Integer (NoMethodError)

      p 123.downcase(:ascii)
           ^^^^^^^^^
  from <internal:kernel>:187:in `loop'
  from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
  from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
  from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

p 123.to_s.downcase
"123"
=> "123"

def substrings(keywords, dictionary)
  result = {}
  keywords_array = keywords.to_s.downcase.split(" ")
  dictionary.each do |word|
    result[word] = 0
  end
  keywords_array.each do |keyword|
    dictionary.each do |word|
      if keyword.include?(word.to_s.downcase)
        result[word] += 1
      end
    end
  end
  result.each do |key, value|
    if value == 0
      result.delete(key)
    end
  end
  return result
end
=> :substrings

substrings("Howdy partner, sit down! How's it going?", dictionary)
=> 
{"down"=>1,
 "go"=>1,
 "going"=>1,
 "how"=>2,
 "howdy"=>1,
 "it"=>2,
 "i"=>3,
 "own"=>1,
 "part"=>1,
 "partner"=>1,
 "sit"=>1}
