import { car, getCarsData, getCar } from "../data"

export default async function Page({ params }: { params: { id: string } }) {
  const car: car = getCar(params.id)
  console.log({ car })

  return (
    <div>
      {
        car && (
          <div key={car.id}>
            <h1>{car.manufacturer} {car.model}</h1>
            <p>{car.year} ({car.regYear}reg)</p>
          </div>
        )
      }
    </div>
  )
}

export async function generateStaticParams() {
  const cars: Array<car> = getCarsData()

  const carIds = cars.map((car: car) => ({
    id: car.id
  }))

  return carIds
}