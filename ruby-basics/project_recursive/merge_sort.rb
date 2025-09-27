def merge_sort(arr)
    if arr.length <= 1
        return arr
    else
        sorted_arr = []
        mid = arr.length / 2
        left = merge_sort(arr[0...mid])
        right = merge_sort(arr[mid..-1])
        while !left.empty? && !right.empty?
            if left[0] <= right[0]
                sorted_arr << left.shift
            else
                sorted_arr << right.shift
            end
        end
        return sorted_arr + left + right
    end
end