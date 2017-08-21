class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    north = bounds['northEast']['lat']
    east = bounds['northEast']['lng']
    south = bounds['southWest']['lat']
    west = bounds['southWest']['lng']
    Bench.where(
      "lat > ? AND lat < ?
      AND lng > ? AND lng < ?",
      south, north, west, east )
    end
end
