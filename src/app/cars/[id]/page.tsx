import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCarById(params.id)
  console.log(`car found for id ${params.id}:`, { car })

  return (
    <div>
      {
        car && (
          <div key={car.id}>
            <h1>{car.manufacturer} {car.model}</h1>
            <p>{car.year} ({car.regYear}reg)</p>
            <p></p>
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