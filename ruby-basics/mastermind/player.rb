class Player

    @@valid_input = ["r", "g", "y", "p", "m", "c"]

    def get_input
        loop do
            puts "入力してください"
            input = gets.chomp.split("")
            
            if !input.all? { |s| @@valid_input.include?(s) }
             puts "無効な入力です"
            elsif input.length != 4
             puts "無効な入力です"
            else
             return input
            end
        end
    end

end
