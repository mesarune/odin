require 'board'

RSpec.describe Board do
  let(:board) { Board.new }
  let(:player) { 'o' }

  describe '#initialize' do
    it '6行7列のグリッドを作成すること' do
      expect(board.grid.length).to eq(6)
      expect(board.grid.all? { |row| row.length == 7 }).to be true
    end
  end

  describe '#drop_piece' do
    it '指定した列の最下行にコマを置くこと' do
      board.drop_piece(0, player)
      expect(board.grid[5][0]).to eq(player)
    end

    it '同じ列に2つ置いたとき、重なり合うこと' do
      board.drop_piece(0, player)
      board.drop_piece(0, 'x')
      expect(board.grid[5][0]).to eq(player)
      expect(board.grid[4][0]).to eq('x')
    end

    it '列が満杯の場合はfalseを返すこと' do
      6.times { board.drop_piece(0, player) }
      expect(board.drop_piece(0, player)).to be false
    end

    it '範囲外の列を指定した場合はfalseを返すこと' do
      expect(board.drop_piece(7, player)).to be false
    end
  end

  describe '#win?' do
    context '横方向に4つ並んだとき' do
      it '勝利と判定すること' do
        4.times { |i| board.drop_piece(i, player) }
        expect(board.win?(player)).to be true
      end
    end

    context '縦方向に4つ並んだとき' do
      it '勝利と判定すること' do
        4.times { board.drop_piece(0, player) }
        expect(board.win?(player)).to be true
      end
    end

    context '斜め方向（右下）に4つ並んだとき' do
      it '勝利と判定すること' do
        # 斜めを作るための土台作り
        # 0: [o]
        # 1: [x, o]
        # 2: [x, x, o]
        # 3: [x, x, x, o]
        0.upto(3) do |i|
          i.times { board.drop_piece(i, 'x') }
          board.drop_piece(i, player)
        end
        expect(board.win?(player)).to be true
      end
    end

    context '斜め方向（左下）に4つ並んだとき' do
      it '勝利と判定すること' do
        # 3: [o]
        # 2: [x, o]
        # 1: [x, x, o]
        # 0: [x, x, x, o]
        3.downto(0) do |i|
          (3 - i).times { board.drop_piece(i, 'x') }
          board.drop_piece(i, player)
        end
        expect(board.win?(player)).to be true
      end
    end

    it '4つ並んでいないときは勝利と判定しないこと' do
      3.times { board.drop_piece(0, player) }
      expect(board.win?(player)).to be false
    end
  end
end