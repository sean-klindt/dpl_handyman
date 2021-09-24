5.times do
  @worker = Worker.create(
    name: Faker::Name.name,
    phone: Faker::PhoneNumber.cell_phone
  )

  3.times do
    @service = Service.create(
      title: Faker::Construction.trade,
      rate: Faker::Number.decimal(l_digits: 3, r_digits: 2),
      worker_id: @worker.id
    )

    2.times do
      Comment.create(
        title: Faker::House.room,
        description: Faker::ChuckNorris.fact,
        service_id: @service.id
      )
    end

  end
end

puts "Data seeded"
@worker = Worker.all
@service = Service.all
@comment = Comment.all
p @worker
p @service
p @comment