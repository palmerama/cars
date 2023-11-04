export type Car = {
  id: string
  manufacturer: string
  model: string
  year: number
  regYear: number
  trim: string
  price: number
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  engineSize: number | undefined
  mileage: number
  image: string
  color: string
}