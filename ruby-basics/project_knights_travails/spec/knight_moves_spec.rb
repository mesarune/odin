require_relative '../knight_moves'

describe '#knight_moves' do
it 'retruns the shortest path to the target position' do
  start_position = [3, 3]
  target_position = [4, 3]
  path = knight_moves(start_position, target_position)
  expect(path.length).to eq(4)
  expect(path.first).to eq(start_position)
  expect(path.last).to eq(target_position)
end

it 'returns nil if the start position is off the board' do
  start_position = [8, 3]
  target_position = [4, 3]
  expect(knight_moves(start_position, target_position)).to be_nil
end

it 'returns nil if the target position is off the board' do
  start_position = [3, 3]
  target_position = [8, 3]
  expect(knight_moves(start_position, target_position)).to be_nil
end

it 'return the start position if it matches the target position' do
  start_position = [4, 3]
  target_position = [4, 3]
  expect(knight_moves(start_position, target_position)).to eq([start_position])
end
end