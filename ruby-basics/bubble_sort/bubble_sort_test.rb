def bubble_sort(array)
  (array.length - 1).times do
    stock = "blank"
    array.each_index do |index|
      if index != array.length - 1
        if array[index] > array[index + 1]
          stock = array[index]
          array[index] = array[index + 1]
          array[index + 1] = stock
        end
      end
    end
    if stock == "blank"
      return array
    end
  end
  return array
end
