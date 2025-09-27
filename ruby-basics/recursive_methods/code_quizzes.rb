# 1. Define a recursive function that finds the factorial of a number.

def factorial(n)
    if n == 0
        1
    else
        n * factorial(n - 1)
    end
end

# 2. Define a recursive function that returns true if a string is a palindrome and false otherwise.

def palindrome(str)
    if str.length <= 1
        true
    elsif str[0] == str[-1]
        palindrome(str[1..-2])
    else
        false
    end
end

# 3. Define a recursive function that takes an argument n and prints "n bottles of beer on the wall", "(n-1) bottles of beer on the wall", ..., "no more bottles of beer on the wall".

def count_beer(n)
    if n == 0
        puts "no more bottles of beer on the wall"
    else
        puts "#{n} bottles of beer on the wall"
        count_beer(n - 1)
    end
end

# 4. Define a recursive function that takes an argument n and returns the fibonacci value of that position. The fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21... So fib(5) should return 5 and fib(6) should return 8.

def fibonacci(n)
    if n == 0
        0
    elsif n == 1
        1
    else
        fibonacci(n - 1) + fibonacci(n - 2)
    end
end

# 5. Define a recursive function that flattens an array. The method should convert [[1, 2], [3, 4]] to [1, 2, 3, 4] and [[1, [8, 9]], [3, 4]] to [1, 8, 9, 3, 4].

def flattens(arr)
    result = []
    arr.each do |element|
        if element.is_a?(Array)
            result.push(*flattens(element))
        else
            result.push(element)
        end
    end
    result
end

# 6. Use the roman_mapping hash to define a recursive method that converts an integer to a Roman numeral.

ROMAN_MAPPING = {
  1000 => "M",
  900 => "CM",
  500 => "D",
  400 => "CD",
  100 => "C",
  90 => "XC",
  50 => "L",
  40 => "XL",
  10 => "X",
  9 => "IX",
  5 => "V",
  4 => "IV",
  1 => "I"
}

def integer_to_roman(int, map = ROMAN_MAPPING)
    if int <= 0
        return ""
    end
    result = ""
    map.each do |key, value|
        quotient = int / key
        modulus = int % key
        if quotient > 0
            result << value * quotient
            result << integer_to_roman(modulus, map)
            return result
        end
    end
end

# 7. Use the roman_mapping hash to define a recursive method that converts a Roman numeral to an integer.

INTEGER_MAPPING = {
  "M" => 1000,
  "CM" => 900,
  "D" => 500,
  "CD" => 400,
  "C" => 100,
  "XC" => 90,
  "L" => 50,
  "XL" => 40,
  "X" => 10,
  "IX" => 9,
  "V" => 5,
  "IV" => 4,
  "I" => 1
}

def roman_to_integer(roman, map = INTEGER_MAPPING)
    if roman == ""
        return 0
    end
    result = 0
    map.each do |key, value|
        if roman.start_with?(key)
            roman = roman[key.length..-1]
            result += value
            result += roman_to_integer(roman, map)
            return result
        end
    end
end