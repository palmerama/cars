import { sql } from '@vercel/postgres'
import { Car } from './definitions'

export async function fetchAllCars() {
  try {
    const cars = await sql`
      SELECT *
      FROM cars
      ORDER BY year desc;
    `
    return cars.rows.map(car => ({
      id: car.id,
      manufacturer: car.manufacturer,
      model: car.model,
      year: car.year,
      regYear: car.reg_year,
      trim: car.trim,
      price: car.price,
      fuelType: car.fuel_type,
      engineSize: car.engine_size,
      mileage: car.mileage,
      image: car.image,
      color: car.color
    }))
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch all cars')
  }
}

export async function fetchCarById(id: string) {
  try {
    const data = await sql`
      SELECT *
      FROM cars
      WHERE cars.id = ${id};
    `
    return {
      id: data.rows[0].id,
      manufacturer: data.rows[0].manufacturer,
      model: data.rows[0].model,
      year: data.rows[0].year,
      regYear: data.rows[0].reg_year,
      trim: data.rows[0].trim,
      price: data.rows[0].price,
      fuelType: data.rows[0].fuel_type,
      engineSize: data.rows[0].engine_size,
      mileage: data.rows[0].mileage,
      image: data.rows[0].image,
      color: data.rows[0].color
    }
  } catch (error) {
    console.error('Database Error:', error)
  }
}

export async function fetchImageFilenames() {
  const data = await sql`
    SELECT image
    FROM cars
  `

  return data.rows.map(row => row.image)
} 