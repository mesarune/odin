irb(main):001> stock_prices = [17,3,6,9,15,8,6,1,10]
=> [17, 3, 6, 9, 15, 8, 6, 1, 10]

[5, 10, 15].each_with_index do |n, idx|
    p [n, idx]
  end
  # => [5, 0]
  #    [10, 1]
  #    [15, 2]

irb(main):002* def stock_picker(stock_prices)
irb(main):003*   result = []
irb(main):004*   buy = 0
irb(main):005*   sell = 0
irb(main):006*   profit = 0
irb(main):007*   stock_prices.each_with_index do |buy_price, buy_day|
irb(main):008*     stock_prices.each_with_index do |sell_price, sell_day|
irb(main):009*       if sell_price - buy_price > profit
irb(main):010*         if sell_day - buy_day > 0
irb(main):011*           buy = buy_day
irb(main):012*           sell = sell_day
irb(main):013*           profit = sell_price - buy_price
irb(main):014*         end
irb(main):015*       end
irb(main):016*     end
irb(main):017*   end
irb(main):018*   return result = [buy, sell]
irb(main):019> end
=> :stock_picker

irb(main):020> stock_picker(stock_prices)
=> [1, 4]

