import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"
import commaNumber from 'comma-number'
import Image from "next/image"

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCarById(params.id)
  console.log(`car found for id ${params.id}:`, { car })

  return (
    <div>
      {
        car && (
          <div key={car.id}>
            <h1>{car.manufacturer} {car.model} {car.trim}</h1>
            <p>{car.year} ({car.regYear}reg)</p>
            <Image
              src={`/cars/${car.image}`}
              alt={`${car.year} ${car.manufacturer} ${car.model} ${car.trim}`}
              width={400}
              height={400}
            />
            <p>{car.fuelType}</p>
            {car.engineSize && <p>{car.engineSize}</p>}
            <p>{commaNumber(car.mileage)} miles</p>            
          </div>
        )
      }
    </div>
  )
}

export async function generateStaticParams() {
  const cars: Array<Car> = await fetchAllCars()

  const carIds = cars.map((car: Car) => ({
    id: car.id
  }))

  return carIds
}