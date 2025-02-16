irb(main):001* class Vehicle
irb(main):002*   def self.engine_start
irb(main):003*     puts "Engine starting..."
irb(main):004*   end
irb(main):005> end
=> :engine_start

irb(main):009* class MyCar < Vehicle
irb(main):010*   COLOR = "red"
irb(main):011> end
=> "red"
irb(main):012> MyCar.engine_start
Engine starting...
=> nil

irb(main):013* class MyTruck < Vehicle
irb(main):014*   COLOR = "white"
irb(main):015> end
=> "white"
irb(main):016> MyTruck.engine_start
Engine starting...
=> nil

irb(main):001* class Vehicle
irb(main):002*   @@number_of_vehicles = 0
irb(main):003*   
irb(main):004*   def self.number_of_vehicles
irb(main):005*     puts "This program has created #{@@number_of_vehicles} vehicles"
irb(main):006*   end
irb(main):007*   
irb(main):008*   def self.engine_start
irb(main):009*     puts "Engine starting..."
irb(main):010*   end
irb(main):011*   
irb(main):012*   def initialize
irb(main):013*     @@number_of_vehicles += 1
irb(main):014*   end
irb(main):015> end
=> :initialize
irb(main):016* class MyCar < Vehicle
irb(main):017*   NUMBER_OF_DOORS = 4
irb(main):018> end
=> 4
irb(main):019* class MyTruck < Vehicle
irb(main):020*   NUMBER_OF_DOORS = 2
irb(main):021> end
=> 2
irb(main):022> Vehicle.number_of_vehicles
This program has created 0 vehicles
=> nil
irb(main):023> MyTruck.number_of_vehicles
This program has created 0 vehicles
=> nil

