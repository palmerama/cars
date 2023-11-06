import Link from "next/link"
import { fetchAllCars } from "../lib/data"
import { Car } from "@/app/lib/definitions"
import Image from "next/image"
import { useMemo } from "react"
import PageTitle from "../ui/pageTitle"

export default async function Page() {
  const cars: Array<Car> = await fetchAllCars()

  return (
    <main>
      <PageTitle>Vehicle inventory</PageTitle>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          cars.map((car: Car) => <Car car={car} />)
        }
      </ul>
    </main>
  )
}

const Car = ({ car }: { car: Car }) => {
  const regYear = useMemo(() => {
    const regYear = `${car.regYear}`
    const year = `${car.year}`
    return regYear !== year.slice(2, 4) ? `(${regYear})` : ''
  }, [car])

  return (
    <li key={car.id}>
      <Link href={`/cars/${car.id}`} className="grid border border-gray-300 hover:border-yellow-700 transition duration-150 ease-in pb-3 leading-tight rounded-md overflow-hidden hover:scale-[1.01]">
        <Image
          src={`/cars/${car.image}`}
          alt={`${car.year} ${car.manufacturer} ${car.model} ${car.trim}`}
          width={400}
          height={400}
          className="w-full aspect-[4/3] object-cover"
        />
        <h1 className="pt-3 px-4 text-lg">
          {car.year} {car.manufacturer} {car.model} {regYear}
        </h1>
        <h2 className="px-4 text-gray-400">
          {car.engineSize && car.engineSize} {car.trim}
        </h2>
      </Link>
    </li>
  )
}