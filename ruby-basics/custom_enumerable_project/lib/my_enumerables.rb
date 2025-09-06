module Enumerable
  def my_each_with_index
    i = 0
    self.my_each do |element|
      yield(element, i)
      i += 1
    end
    self
  end

  def my_select
    selected = []
    self.my_each do |element|
      if yield(element)
        selected.push(element)
      end
    end
    selected
  end

  def my_all?
    self.my_each do |element|
      if !yield(element)
        return false
      end
    end
    true
  end

  def my_any?
    self.my_each do |element|
      if yield(element)
        return true
      end
    end
    false
  end

  def my_none?
    self.my_each do |element|
      if yield(element)
        return false
      end
    end
    true
  end

  def my_count(*args, &block)
    if args.empty? && !block_given?
      return self.length
    end

    if !args.empty?
      count = 0
      target = args[0]
      self.my_each do |element|
        if element == target
          count += 1
        end
      end
      return count
    end

    if block_given?
      count = 0
      self.my_each do |element|
        if yield(element)
          count += 1
        end
      end
      return count
    end
  end

  def my_map
    new_array = []
    self.my_each do |element|
      new_array.push(yield(element))
    end
    new_array
  end

  def my_inject(*args)
    raise "No block given" unless block_given?
    accumulator = nil
    start_index = 0
    if args.empty?
      accumulator = self[0]
      start_index = 1
    else
      accumulator = args[0]
      start_index = 0
    end
    for i in start_index...self.length
      accumulator = yield(accumulator, self[i])
    end
    accumulator
  end
end

# You will first have to define my_each
# on the Array class. Methods defined in
# your enumerable module will have access
# to this method
class Array
  def my_each
    i = 0
    while i < self.length
      yield(self[i])
      i += 1
    end
    self
  end
end
