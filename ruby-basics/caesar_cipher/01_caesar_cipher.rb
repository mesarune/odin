$alphabet_table = ("A".."Z").to_a
=> 
["A",
...

def caesar_cipher(string, number)
  result = ""
  string_array = string.split("")
  string_array.each do |str|
    if $alphabet_table.include?(str)
      current_position = $alphabet_table.index(str)
      if current_position + number > 25
        new_position = current_position + number - 25
      else
        new_position = current_position + number
      end
      result += $alphabet_table[new_position]
    else
      result += str
    end
  end
  puts result
end
=> :caesar_cipher

caesar_cipher("CAESAR!!!", 3)
FDHVDU!!!
=> nil

caesar_cipher("Caesar!!!", 3)
Faesar!!!
=> nil

def caesar_cipher(string, number)
  result = ""
  uppercase_table = ("A".."Z").to_a
  lowercase_table = ("a".."z").to_a
  string_array = string.split("")
  string_array.each do |str|
    if uppercase_table.include?(str)
      current_position = uppercase_table.index(str)
      if current_position + number > 25
        new_position = current_position + number - 25
      else
        new_position = current_position + number
      end
      result += uppercase_table[new_position]
    end
    if lowercase_table.include?(str)
      current_position = lowercase_table.index(str)
      if current_position + number > 25
        new_position = current_position + number -25
      else
        new_position = current_position + number
      end
      result += lowercase_table[new_position]
    else
      result += str
    end
  end
  puts result
end
=> :caesar_cipher

caesar_cipher("Caesar cipher", 3)
FCdhvdu flskhu
=> nil

def caesar_cipher(string, number)
  result = ""
  uppercase_table = ("A".."Z").to_a
  lowercase_table = ("a".."z").to_a
  string_array = string.split("")
  string_array.each do |str|
    if uppercase_table.include?(str)
      current_position = uppercase_table.index(str)
      if current_position + number > 25
        new_position = current_position + number - 25
      else
        new_position = current_position + number
      end
      result += uppercase_table[new_position]
    else if lowercase_table.include?(str)
        current_position = lowercase_table.index(str)
        if current_position + number > 25
          new_position = current_position + number - 25
        else
          new_position = current_position + number
        end
        result += lowercase_table[new_position]
      else
        result += str
      end
    end
  end
  puts result
end
=> :caesar_cipher

caesar_cipher("Caesar cipher", 3)
Fdhvdu flskhu
=> nil
