class Board

    @@colors = {
        "r"=> "\e[31m●\e[0m",
        "g"=> "\e[32m●\e[0m",
        "y"=> "\e[33m●\e[0m",
        "p"=> "\e[34m●\e[0m",
        "m"=> "\e[35m●\e[0m",
        "c"=> "\e[36m●\e[0m",
        " "=> " ",
        "b"=> "☆",
        "w"=> "\e[37m●\e[0m",
    }

    def initialize
        @solution = []
        @guesses = []
        @feedback = []
    end
    
    def set_solution
        choices = "rrrrggggyyyyppppmmmmcccc".split("")
        @solution = choices.shuffle.take(4)
    end

    def set_input(input)
        @guesses = input
        set_feedback
    end

    def set_feedback
        @feedback = @guesses.zip(@solution).map do |a| 
            if a[0] == a[1]
                "b"
            elsif @solution.include?(a[0])
                "w"
            else
                " "
            end
        end
    end
        
    def display_board
        guesses = @guesses.map{ |s| @@colors[s] }
        feedback = @feedback.map{ |s| @@colors[s] }
        display = [guesses, feedback]
        puts display.map { |row| row.join("|") }.join("\n-+-+-+-\n")
    end

    def check_input
        if @guesses == @solution
            puts "あなたの勝ち"
            exit
        end
    end

end
