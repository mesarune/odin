puts "\e[31m●\e[32m●\e[33m●\e[34m●\e[35m●\e[36m●"

arr1 = [1, 2, 3, 4]
arr2 = ["a", "b", "c", "d"]

puts arr1[1]

arr3 = [[1, 2, 3, 4], ["a", "b", "c", "d"]]

puts arr3.map { |row| row.join("|") }.join("\n-+-+-+-\n")

arr4 =[arr1, arr2]

puts arr4.map { |row| row.join("|") }.join("\n-+-+-+-\n")