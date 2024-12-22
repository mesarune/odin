require 'spec_helper'
require_relative '../bubble_sort_test'

RSpec.describe "bubble_sort" do
    it "sorting numbers" do
        expect(bubble_sort([5, 4, 3, 2, 1])).to eq [1, 2, 3, 4, 5]
    end
end
