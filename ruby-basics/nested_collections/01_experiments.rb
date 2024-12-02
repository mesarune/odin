irb(main):002> test_array = [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]
=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]

irb(main):003> test_array.push(99)
=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81], 99]
irb(main):004> test_array.push([100, 99, 98, 97])
=> 
[[97, 76, 79, 93],
 [79, 84, 76, 79],
 [88, 67, 64, 76],
 [94, 55, 67, 81],
 99,
 [100, 99, 98, 97]]

 irb(main):005> test_array.pop
=> [100, 99, 98, 97]

irb(main):006> test_array[0].pop
=> 93
irb(main):007> test_array[0].push(93)
=> [97, 76, 79, 93]

irb(main):008> test_array[4].pop
(irb):8:in `<main>': undefined method `pop' for an instance of Integer (NoMethodError)

test_array[4].pop
             ^^^^
Did you mean?  pow
	from <internal:kernel>:187:in `loop'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

irb(main):009> test_array.pop[4]
=> 0
irb(main):010> p test_array
[[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]
=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]

irb(main):014* test_array.each_with_index do |row, row_index|
irb(main):015*   row.each_with_index do |num, column_index|
irb(main):016*     puts "Row:#{row_index} Column:#{column_index} = #{num}"
irb(main):017*   end
irb(main):018> end
Row:0 Column:0 = 97
Row:0 Column:1 = 76
Row:0 Column:2 = 79
Row:0 Column:3 = 93
Row:1 Column:0 = 79
Row:1 Column:1 = 84
Row:1 Column:2 = 76
Row:1 Column:3 = 79
Row:2 Column:0 = 88
Row:2 Column:1 = 67
Row:2 Column:2 = 64
Row:2 Column:3 = 76
Row:3 Column:0 = 94
Row:3 Column:1 = 55
Row:3 Column:2 = 67
Row:3 Column:3 = 81
=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]

irb(main):019* test_array.each_with_index do |row, row_index|
irb(main):020*   row.each_with_index do |num, column_index|
irb(main):021*     puts "Row:#{row_index + 1} Column:#{column_index + 1} = #{num}"
irb(main):022*   end
irb(main):023> end
Row:1 Column:1 = 97
Row:1 Column:2 = 76
Row:1 Column:3 = 79
Row:1 Column:4 = 93
Row:2 Column:1 = 79
Row:2 Column:2 = 84
Row:2 Column:3 = 76
Row:2 Column:4 = 79
Row:3 Column:1 = 88
Row:3 Column:2 = 67
Row:3 Column:3 = 64
Row:3 Column:4 = 76
Row:4 Column:1 = 94
Row:4 Column:2 = 55
Row:4 Column:3 = 67
Row:4 Column:4 = 81
=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]

irb(main):025* test_array.flatten.each do |num|
irb(main):026*   puts "#{num}"
irb(main):027> end
97
76
79
93
79
84
76
79
88
67
64
76
94
55
67
81
=> [97, 76, 79, 93, 79, 84, 76, 79, 88, 67, 64, 76, 94, 55, 67, 81]

irb(main):028* test_array.any? do |nums|
irb(main):029*   nums.all? { |num| num > 80 }
irb(main):030> end
=> false
irb(main):031* test_array.all? do |nums|
irb(main):032*   nums.any? { |num| num > 80 }
irb(main):033> end
=> true

