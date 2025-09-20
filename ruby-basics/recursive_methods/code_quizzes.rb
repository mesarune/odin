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

