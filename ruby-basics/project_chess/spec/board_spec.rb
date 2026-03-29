require 'spec_helper'
require_relative '../lib/board'
require_relative '../lib/pieces'

RSpec.describe Board do
  let(:board) { Board.new }

  describe "#find_piece_at" do
    it "指定した座標にある駒を返すこと" do
      piece = board.find_piece_at([7, 0])
      expect(piece).to be_a(Rook)
      expect(piece.color).to eq(:white)
    end
  end

  describe "#move_piece" do
    it "有効な移動の場合、駒の座標を更新すること" do
      # e2のポーンをe4へ (6,4 -> 4,4)
      board.move_piece([6, 4], [4, 4])
      expect(board.find_piece_at([4, 4])).not_to be_nil
      expect(board.find_piece_at([6, 4])).to be_nil
    end

    it "味方の駒がある場所には移動できないこと" do
      # ルークが味方のポーンを飛び越えようとする
      expect(board.move_piece([7, 0], [5, 0])).to be false
    end
  end

  describe "#in_check?" do
    it "王が攻撃されている時にtrueを返すこと" do
      board.white_pieces = [King.new(:white, [7, 4])]
      board.black_pieces = [Rook.new(:black, [0, 4])]
      expect(board.in_check?(:white)).to be true
    end
  end

  describe "保存と読み込み" do
    it "現在の状態をJSONに保存し、復元できること" do
      board.move_piece([6, 4], [4, 4]) # e4
      board.save_game(:black)
      
      new_board = Board.new
      next_player = new_board.load_game
      
      expect(next_player).to eq(:black)
      expect(new_board.find_piece_at([4, 4])).to be_a(Pawn)
      
      File.delete("savegame.json") if File.exist?("savegame.json")
    end
  end
end