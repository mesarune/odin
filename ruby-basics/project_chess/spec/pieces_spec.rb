require 'spec_helper'
require_relative '../lib/pieces'
require_relative '../lib/board'

RSpec.describe Piece do
  let(:board) { Board.new }

  describe Rook do
    it "垂直・水平方向に移動できること" do
      rook = Rook.new(:white, [4, 4])
      expect(rook.valid_move?([4, 7], board)).to be true # 横移動
      expect(rook.valid_move?([1, 4], board)).to be true # 縦移動
    end

    it "斜めには移動できないこと" do
      rook = Rook.new(:white, [4, 4])
      expect(rook.valid_move?([5, 5], board)).to be false
    end
  end

  describe Knight do
    it "L字型に移動でき、障害物を飛び越えられること" do
      # ナイトの前にポーンを置く
      board.white_pieces << Pawn.new(:white, [5, 4]) 
      knight = Knight.new(:white, [7, 4])
      expect(knight.valid_move?([5, 5], board)).to be true
    end
  end

  describe Bishop do
    it "斜め方向に移動できること" do
      bishop = Bishop.new(:white, [4, 4])
      expect(bishop.valid_move?([6, 6], board)).to be true
    end
  end

  describe Pawn do
    it "最初の移動で2マス進めること" do
      pawn = Pawn.new(:white, [6, 0])
      expect(pawn.valid_move?([4, 0], board)).to be true
    end

    it "敵がいない斜め前には進めないこと" do
      pawn = Pawn.new(:white, [6, 0])
      expect(pawn.valid_move?([5, 1], board)).to be false
    end

    it "敵がいる斜め前には進めること" do
      pawn = Pawn.new(:white, [6, 1])
      board.black_pieces << Pawn.new(:black, [5, 2])
      expect(pawn.valid_move?([5, 2], board)).to be true
    end
  end
end