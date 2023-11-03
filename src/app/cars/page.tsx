import { getCarsData } from "./data"

export default function Page() {
  const cars = getCarsData()

  return <>
    <p>CARS</p>
    {
      cars && cars.map(car => (
        <div key={car.id}>
          <h1>{car.make} {car.model}</h1>
          <p>{car.year}</p>
        </div>
      ))
    }
  </>
}