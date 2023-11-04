import Link from "next/link"
import { fetchAllCars } from "../lib/data"
import { Car } from "@/app/lib/definitions"

export default async function Page() {
  const cars = await fetchAllCars()

  return <>
    <ul>
      {
        cars.rows.map((car: Car) => (
          <li key={car.id}>
            <Link href={`/cars/${car.id}`}>
              {car.manufacturer} {car.model} ({car.regYear}reg)
            </Link>
          </li>
        ))
      }
    </ul>
  </>
}