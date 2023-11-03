import Link from "next/link"
import { car, getCarsData } from "./data"

export default function Page() {
  const cars: Array<car> = getCarsData()

  return <>
    <ul>
      {
        cars && cars.map(car => (
          <li>
            <Link href={`/cars/${car.id}`} key={car.id} >
              {car.manufacturer} {car.model} ({car.regYear}reg)
            </Link>
          </li>
        ))
      }
    </ul>
  </>
}