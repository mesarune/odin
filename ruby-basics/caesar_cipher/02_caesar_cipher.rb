def caesar_cipher(string, number, table)
  result = ""
  string_array = string.split("")
  string_array.each do |str|
    if table.include?(str)
      current_position = table.index(str)
      if current_position + number > table.length
        new_position = current_position + number - table.length
      else
        new_position = current_position + number
      end
      result += table[new_position]
    else
      result += str
    end
  end
  puts result # This return "nil"
end
=> :caesar_cipher

caesar_cipher(caesar_cipher("Caesar cipher", 6, ("A".."Z").to_a), 6, ("a".."z").to_a)
   Iaesar cipher
   (irb):62:in `caesar_cipher': undefined method `split' for nil (NoMethodError)
   
     string_array = string.split("")
                          ^^^^^^
       from (irb):78:in `<main>'
       from <internal:kernel>:187:in `loop'
       from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
       from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
       from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

def caesar_cipher(string, number, table)
  result = ""
  string_array = string.split("")
  string_array.each do |str|
    if table.include?(str)
      current_position = table.index(str)
      if current_position + number > table.length
        new_position = current_position + number - table.length
      else
        new_position = current_position + number
      end
      result += table[new_position]
    else
      result += str
    end
  end
  return result # Return "result strings"
end
=> :caesar_cipher

caesar_cipher(caesar_cipher("Caesar cipher", 6, ("A".."Z").to_a), 6, ("a".."z").to_a)
=> "Igkygx iovnkx"

def caesar_decipher(string, number, table)
  result = ""
  string_array = string.split("")
  string_array.each do |str|
    if table.include?(str)
      current_position = table.index(str)
      if current_position - number < 0
        new_position = current_position - number + table.length
      else
        new_position = current_position - number
      end
      result += table[new_position]
    else
      result += str
    end
  end
  return result
end
=> :caesar_decipher

caesar_decipher(caesar_decipher("Igkygx iovnkx", 6, ("A".."Z").to_a), 6, ("a".."z").to_a)
=> "Caesar cipher"
