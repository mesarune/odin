irb(main):001* class GoodDog
irb(main):002*   def initialize
irb(main):003*     puts "This object was initialized!"
irb(main):004*   end
irb(main):005> end
=> :initialize
irb(main):006> sparky = GoodDog.new
This object was initialized!
=> #<GoodDog:0x000000010cbcddd0>

irb(main):007* class GoodDog
irb(main):008*   def initialize(name)
irb(main):009*     @name = name
irb(main):010*   end
irb(main):011> end
=> :initialize

=begin
The @name variable looks different because it has the @ symbol in front of it.
This is called an instance variable.
It is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects.
It does not "die" after the initialize method is run. It "lives on", to be referenced, until the object instance is destroyed.
In the above example, our initialize method is defined with one parameter: name. You can pass arguments into the initialize method through the new method.
=end

irb(main):012> sparky = GoodDog.new("Sparky")
=> #<GoodDog:0x000000010d0920a0 @name="Sparky">

irb(main):013* class Engine
irb(main):014*   def start
irb(main):015*     puts "Engine starting..."
irb(main):016*   end
irb(main):017> end
=> :start
irb(main):018* class Car
irb(main):019*   def initialize
irb(main):020*     @engine = Engine.new
irb(main):021*   end
irb(main):022*   
irb(main):023*   def start
irb(main):024*     @engine.start
irb(main):025*   end
irb(main):026> end
=> :start
irb(main):027> my_car = Car.new
=> #<Car:0x000000010cfb5a88 @engine=#<Engine:0x000000010cfb59e8>>
irb(main):028> my_car.start
Engine starting...
=> nil
