import { carData, getCarsData, getCar } from "../data"

export default async function Page({ params }: { params: { id: string } }) {
  const car = getCar(params.id)
  console.log({ car })

  return (
    <div>
      {
        car && (
          <div key={car.id}>
            <h1>{car.make} {car.model}</h1>
            <p>{car.year}</p>
          </div>
        )
      }
    </div>
  )
}

export async function generateStaticParams() {
  const cars: Array<carData> = getCarsData()

  const carIds = cars.map((car: carData) => ({
    id: car.id
  }))

  return carIds
}