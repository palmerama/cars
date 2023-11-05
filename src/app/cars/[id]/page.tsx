import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"
import commaNumber from 'comma-number'
import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCarById(params.id)

  return (
    <>
      {
        car && (
          <div className='grid gap-2'>
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
            <p>£{commaNumber(car.price)}</p>
            <div>
              <Link
                href={`/cars/${car.id}/edit`}
                className="inline-grid h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
              >
                Edit
              </Link>
            </div>
          </div>
        )
      }
    </>
  )
}

export async function generateStaticParams() {
  const cars: Array<Car> = await fetchAllCars()

  const carIds = cars.map((car: Car) => ({
    id: car.id
  }))

  return carIds
}