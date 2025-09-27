def fibs(n)
    if n == 0
        return []
    elsif n == 1
        return [0]
    else
        array = [0, 1]
        while n > 2 do
            array << array[-2] + array[-1]
            n -= 1
        end
        return array
    end
end

def fibs_rec(n)
    if n == 0
        return []
    elsif n == 1
        return [0]
    elsif n == 2
        return [0, 1]
    else
        previous_array = fibs_rec(n - 1)
        new_element = previous_array[-2] + previous_array[-1]
        return previous_array << new_element
    end
end