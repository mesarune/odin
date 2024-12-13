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

irb(main):001* def caesar_cipher(string, number, table)
irb(main):002*   result = ""
irb(main):003*   string_array = string.split("")
irb(main):004*   string_array.each do |str|
irb(main):005*     if table.include?(str)
irb(main):006*       current_position = table.index(str)
irb(main):007*       if current_position + number > table.length
irb(main):008*         new_position = current_position + number % table.length
irb(main):009*       else
irb(main):010*         new_position = current_position + number
irb(main):011*       end
irb(main):012*       result += table[new_position]
irb(main):013*     else
irb(main):014*       result += str
irb(main):015*     end
irb(main):016*   end
irb(main):017*   return result # Return "result strings"
irb(main):018> end  
=> :caesar_cipher

irb(main):019> caesar_cipher(caesar_cipher("Caesar cipher", 6, ("A".."Z").to_a), 6, ("a".."z").to_a)
=> "Igkygx iovnkx"

irb(main):021* def caesar_decipher(string, number, table)
irb(main):022*   result = ""
irb(main):023*   string_array = string.split("")
irb(main):024*   string_array.each do |str|
irb(main):025*     if table.include?(str)
irb(main):026*       current_position = table.index(str)
irb(main):027*       if current_position - number < 0
irb(main):028*         new_position = current_position - number % table.length
irb(main):029*       else
irb(main):030*         new_position = current_position - number
irb(main):031*       end
irb(main):032*       result += table[new_position]
irb(main):033*     else
irb(main):034*       result += str
irb(main):035*     end
irb(main):036*   end
irb(main):037*   return result
irb(main):038> end
=> :caesar_decipher

irb(main):039> caesar_decipher(caesar_decipher("Igkygx iovnkx", 6, ("A".."Z").to_a), 6, ("a".."z").to_a)
=> "Caesar cipher"
