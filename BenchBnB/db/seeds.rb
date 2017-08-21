# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.destroy_all
User.destroy_all

User.create(username: 'user', password: 'password')

Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.767117, lng: -122.497347)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.768881, lng: -122.496752)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.749312, lng: -122.482963)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.764179, lng: -122.427950)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.739124, lng: -122.442513)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.665554, lng: -122.405244)
Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location,
            lat: 37.799684, lng: -122.409108)
