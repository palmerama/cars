import { sql } from '@vercel/postgres'
import { Car } from './definitions'

export async function fetchAllCars() {
  try {
    const cars = await sql<Car>`
      SELECT *
      FROM cars
      ORDER BY year desc;
    `
    return cars
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch all cars')
  }
}

export async function fetchCarById(id: string) {
  try {
    const data = await sql<Car>`
      SELECT *
      FROM cars
      WHERE cars.id = ${id};
    `
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
  }
}