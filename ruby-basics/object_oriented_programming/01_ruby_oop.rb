irb(main):001> "hello".class
=> String
irb(main):002> "world".class
=> String

irb(main):003* class GoodDog
irb(main):004> end
=> nil
irb(main):005> sparky = GoodDog.new
=> #<GoodDog:0x000000010b6fb920>

irb(main):006* module Speak
irb(main):007*   def speak(sound)
irb(main):008*     puts sound
irb(main):009*   end
irb(main):010> end
=> :speak

irb(main):011* class GoodDog
irb(main):012*   include Speak
irb(main):013> end
=> GoodDog

irb(main):014* class HumanBeing
irb(main):015*   include Speak
irb(main):016> end
=> HumanBeing

irb(main):017> sparky = GoodDog.new
=> #<GoodDog:0x000000010838d4d0>
irb(main):018> sparky.speak("Arf!")
Arf!
=> nil

irb(main):019> bob = HumanBeing.new
=> #<HumanBeing:0x000000010b40e8e8>
irb(main):020> bob.speak("Hello!")
Hello!
=> nil

irb(main):024> puts GoodDog.ancestors
GoodDog
Speak
Object
PP::ObjectMixin
Kernel
BasicObject
=> nil

irb(main):025> puts HumanBeing.ancestors
HumanBeing
Speak
Object
PP::ObjectMixin
Kernel
BasicObject
=> nil

irb(main):026* class NewClass
irb(main):027> end
=> nil
irb(main):028> new_object = NewClass.new
=> #<NewClass:0x000000010b32b890>

irb(main):029* module NewModule
irb(main):030> end
=> nil
irb(main):031* class NewClass
irb(main):032*   include NewModule
irb(main):033> end
=> NewClass
irb(main):034> puts NewClass.ancestors
NewClass
NewModule
Object
PP::ObjectMixin
Kernel
BasicObject
=> nil
