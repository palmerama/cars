const { db } = require('@vercel/postgres');
const {
  cars
} = require('../src/app/lib/data.ts');

async function seedCars(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "cars" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cars (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,    
    manufacturer VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    reg_year INT NOT NULL,
    trim VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    fuel_type VARCHAR(255) NOT NULL,
    engine_size VARCHAR(255),
    mileage INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "cars" table`);

    // Insert data into the "cars" table
    const insertedCars = await Promise.all(
      cars.map(
        car => client.sql`
        INSERT INTO cars (manufacturer, model, year, reg_year, trim, price, fuel_type, engine_size, mileage, image, color)
        VALUES (${car.manufacturer}, ${car.model}, ${car.year}, ${car.regYear}, ${car.trim}, ${car.price}, ${car.fuelType}, ${car.engineSize ? car.engineSize : null}, ${car.mileage}, ${car.image}, ${car.color})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCars.length} cars`);

    return {
      createTable,
      cars: insertedCars,
    };
  } catch (error) {
    console.error('Error seeding cars:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedCars(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});