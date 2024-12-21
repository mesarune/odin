irb(main):001> stock = "blank"
=> "blank"
irb(main):002> a = 2
=> 2
irb(main):003> b = 1
=> 1
irb(main):004> stock = a
=> 2
irb(main):005> a = b
=> 1
irb(main):006> b = stock
=> 2

irb(main):007> array = [0,2,2,3,4,78]
=> [0, 2, 2, 3, 4, 78]

irb(main):008> array.length
=> 6

irb(main):009* array.length.times do
irb(main):010*   puts "test"
irb(main):011> end
test
test
test
test
test
test
=> 6

irb(main):012* def bubble_sort(array)
irb(main):013*   (array.length - 1).times do
irb(main):014*     array.each_index do |index|
irb(main):015*       stock = "blank"
irb(main):016*       if array[index] > array[index + 1]
irb(main):017*         stock = array[index]
irb(main):018*         array[index] = array[index + 1]
irb(main):019*         array[index + 1] = stock
irb(main):020*       end
irb(main):021*     end
irb(main):022*     if stock == "blank"
irb(main):023*       return array
irb(main):024*     end
irb(main):025*   end
irb(main):026> end
=> :bubble_sort

irb(main):027> bubble_sort(array)
(irb):16:in `>': comparison of Integer with nil failed (ArgumentError)

      if array[index] > array[index + 1]
                        ^^^^^^^^^^^^^^^^
	from (irb):16:in `block (2 levels) in bubble_sort'
	from (irb):14:in `each_index'
	from (irb):14:in `block in bubble_sort'
	from <internal:numeric>:237:in `times'
	from (irb):13:in `bubble_sort'
	from (irb):27:in `<main>'
	from <internal:kernel>:187:in `loop'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

irb(main):058* def bubble_sort(array)
irb(main):059*   (array.length - 1).times do
irb(main):060*     array.each_index do |index|
irb(main):061*       stock = "blank"
irb(main):062*       if index != array.length - 1
irb(main):063*         if array[index] > array[index + 1]
irb(main):064*           stock = array[index]
irb(main):065*           array[index] = array[index + 1]
irb(main):066*           array[index + 1] = stock
irb(main):067*         end
irb(main):068*       end
irb(main):069*     end
irb(main):070*     if stock == "blank"
irb(main):071*       return array
irb(main):072*     end
irb(main):073*   end
irb(main):074> end
=> :bubble_sort

irb(main):075> bubble_sort(array)
(irb):70:in `block in bubble_sort': undefined local variable or method `stock' for main (NameError)

    if stock == "blank"
       ^^^^^
	from <internal:numeric>:237:in `times'
	from (irb):59:in `bubble_sort'
	from (irb):75:in `<main>'
	from <internal:kernel>:187:in `loop'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/lib/ruby/gems/3.3.0/gems/irb-1.13.1/exe/irb:9:in `<top (required)>'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `load'
	from /Users/mesa_rune/.rbenv/versions/3.3.4/bin/irb:25:in `<main>'

irb(main):125* def bubble_sort(array)
irb(main):126*   (array.length - 1).times do
irb(main):127*     stock = "blank"
irb(main):128*     array.each_index do |index|
irb(main):129*       if index != array.length - 1
irb(main):130*         if array[index] > array[index + 1]
irb(main):131*           stock = array[index]
irb(main):132*           array[index] = array[index + 1]
irb(main):133*           array[index + 1] = stock
irb(main):134*         end
irb(main):135*       end
irb(main):136*     end
irb(main):137*     if stock == "blank"
irb(main):138*       return array
irb(main):139*     end
irb(main):140*   end
irb(main):141> end
=> :bubble_sort

irb(main):142> bubble_sort(array)
=> [0, 2, 2, 3, 4, 78]
