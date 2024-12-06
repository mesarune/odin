irb(main):023* jon_snow = {
irb(main):024*   name: "Jon",
irb(main):025*   email: "jon_snow@thewall.we"
irb(main):026> }
=> {:name=>"Jon", :email=>"jon_snow@thewall.we"}

irb(main):027> jon_snow[:email]
=> "jon_snow@thewall.we"

irb(main):028> jon_snow.each { |data| puts data }
name
Jon
email
jon_snow@thewall.we
=> {:name=>"Jon", :email=>"jon_snow@thewall.we"}

irb(main):029> jon_snow.each_key { |data| puts data }
name
email
=> {:name=>"Jon", :email=>"jon_snow@thewall.we"}

irb(main):030> jon_snow.each_value { |data| puts data }
Jon
jon_snow@thewall.we
=> {:name=>"Jon", :email=>"jon_snow@thewall.we"}

irb(main):001* contacts = {
irb(main):002*   "Jon Snow" => {
irb(main):003*     name: "Jon",
irb(main):004*     email: "jon_snow@thewall.we",
irb(main):005*     favorite_ice_cream_flavors: ["chocolate", "vanilla", "mint chip"],
irb(main):006*     knows: nil
irb(main):007*   },
irb(main):008*   "Freddy Mercury" => {
irb(main):009*     name: "Freddy",
irb(main):010*     email: "freddy@mercury.com",
irb(main):011*     favorite_ice_cream_flavors: ["strawberry", "cookie dough", "mint chip"] 
irb(main):012*   }
irb(main):013> }
=> 
{"Jon Snow"=>
...

irb(main):017> contacts["Jon Snow"][:email]
=> "jon_snow@thewall.we"

irb(main):018* contacts.each do |person, data|
irb(main):019*   puts "#{person}: #{data}"
irb(main):020> end
Jon Snow: {:name=>"Jon", :email=>"jon_snow@thewall.we", :favorite_ice_cream_flavors=>["chocolate", "vanilla", "mint chip"], :knows=>nil}
Freddy Mercury: {:name=>"Freddy", :email=>"freddy@mercury.com", :favorite_ice_cream_flavors=>["strawberry", "cookie dough", "mint chip"]}
=> 
{"Jon Snow"=>
  {:name=>"Jon",
   :email=>"jon_snow@thewall.we",
   :favorite_ice_cream_flavors=>["chocolate", "vanilla", "mint chip"],
   :knows=>nil},
 "Freddy Mercury"=>
  {:name=>"Freddy",
   :email=>"freddy@mercury.com",
   :favorite_ice_cream_flavors=>["strawberry", "cookie dough", "mint chip"]}}

irb(main):026* contacts.each do |person, data|
irb(main):027*   data.each do |key, value|
irb(main):028*     puts "#{key}: #{value}"
irb(main):029*   end
irb(main):030> end
name: Jon
email: jon_snow@thewall.we
favorite_ice_cream_flavors: ["chocolate", "vanilla", "mint chip"]
knows: 
name: Freddy
email: freddy@mercury.com
favorite_ice_cream_flavors: ["strawberry", "cookie dough", "mint chip"]
=> 
{"Jon Snow"=>
  {:name=>"Jon",
   :email=>"jon_snow@thewall.we",
   :favorite_ice_cream_flavors=>["chocolate", "vanilla", "mint chip"],
   :knows=>nil},
 "Freddy Mercury"=>
  {:name=>"Freddy",
   :email=>"freddy@mercury.com",
   :favorite_ice_cream_flavors=>["strawberry", "cookie dough", "mint chip"]}}

irb(main):031* contacts.each do |person, data|
irb(main):032*   data.each do |key, value|
irb(main):033*     if key == :favorite_ice_cream_flavors
irb(main):034*       value.each do |flavor|
irb(main):035*         puts "#{flavor}"
irb(main):036*       end
irb(main):037*     end
irb(main):038*   end
irb(main):039> end
chocolate
vanilla
mint chip
strawberry
cookie dough
mint chip
=> 
{"Jon Snow"=>
  {:name=>"Jon",
   :email=>"jon_snow@thewall.we",
   :favorite_ice_cream_flavors=>["chocolate", "vanilla", "mint chip"],
   :knows=>nil},
 "Freddy Mercury"=>
  {:name=>"Freddy",
   :email=>"freddy@mercury.com",
   :favorite_ice_cream_flavors=>["strawberry", "cookie dough", "mint chip"]}}
