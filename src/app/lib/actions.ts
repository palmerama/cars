'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
 
const CarSchema = z.object({
  id: z.string(),
  manufacturer: z.string(),
  model: z.string(),
  year: z.coerce.number(),
  regYear: z.coerce.number(),
  trim: z.string(),
  price: z.coerce.number(),
  fuelType: z.enum(['petrol', 'diesel', 'electric', 'hybrid']),
  engineSize: z.string(),
  mileage: z.coerce.number(),
  image: z.string(),
  color: z.string()
})
 
const CreateCar = CarSchema.omit({ id: true })

export async function createCar(formData: FormData) {
  const { manufacturer, model, year, regYear, trim, price, fuelType, engineSize, mileage, image, color } = CreateCar.parse({
    manufacturer: formData.get('manufacturer'),
    model: formData.get('model'),
    year: formData.get('year'),
    regYear: formData.get('regYear'),
    trim: formData.get('trim'),
    price: formData.get('price'),
    fuelType: formData.get('fuelType'),
    engineSize: formData.get('engineSize'),
    mileage: formData.get('mileage'),
    image: formData.get('image'),
    color: formData.get('color')
  })
 
  await sql`
    INSERT INTO cars (manufacturer, model, year, reg_year, trim, price, fuel_type, engine_size, mileage, image, color)
    VALUES (${manufacturer}, ${model}, ${year}, ${regYear}, ${trim}, ${price}, ${fuelType}, ${engineSize}, ${mileage}, ${image}, ${color})
  `

  revalidatePath('/cars')
  redirect('/cars')
}

export async function updateCar(id: string, formData: FormData) {
  const { manufacturer, model, year, regYear, trim, price, fuelType, engineSize, mileage, image, color } = CreateCar.parse({
    manufacturer: formData.get('manufacturer'),
    model: formData.get('model'),
    year: formData.get('year'),
    regYear: formData.get('regYear'),
    trim: formData.get('trim'),
    price: formData.get('price'),
    fuelType: formData.get('fuelType'),
    engineSize: formData.get('engineSize'),
    mileage: formData.get('mileage'),
    image: formData.get('image'),
    color: formData.get('color')
  })
 
  await sql`
    UPDATE cars 
    SET manufacturer=${manufacturer}, model=${model}, year=${year}, reg_year=${regYear}, trim=${trim}, price=${price}, fuel_type=${fuelType}, engine_size=${engineSize}, mileage=${mileage}, image=${image}, color=${color}
    WHERE id = ${id}
  `

  revalidatePath('/cars')
  redirect('/cars')
}
