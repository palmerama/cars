import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"
import commaNumber from 'comma-number'
import Image from "next/image"
import Link from "next/link"
import { MdLocalGasStation } from 'react-icons/md'
import { SlSpeedometer } from 'react-icons/sl'
import { MdEdit } from 'react-icons/md'

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCarById(params.id)

  return (
    <>
      {
        car && (
          <div className='grid grid-cols-[1fr_25%] gap-6 max-w-[1200px] m-auto'>
            <Image
              src={`/cars/${car.image}`}
              alt={`${car.year} ${car.manufacturer} ${car.model} ${car.trim}`}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="grid grid-rows-[1fr_auto]">
              <div>
                <div className='grid gap-6'>
                  <div>
                    <h1 className="text-2xl">{car.manufacturer} {car.model}</h1>
                    <div className="text-gray-400">{car.year} ({car.regYear})</div>
                  </div>
                  <div className='grid grid-cols-[auto_1fr]'>
                    <div className='grid gap-1 bg-gray-200 py-3 pl-4 pr-6 rounded-md'>
                      <div>
                        <MdLocalGasStation className="inline-block text-yellow-700 align-text-bottom mr-1" /> {car.engineSize && car.engineSize} {car.fuelType[0].toUpperCase() + car.fuelType.substring(1)} {car.trim}
                      </div>
                      <div>
                        <SlSpeedometer className="inline-block text-yellow-700 align-text-top mr-1" /> {commaNumber(car.mileage)}
                      </div>
                    </div>
                    <div />
                  </div>
                  <div className="text-xl text-yellow-700 font-semibold">
                    £{commaNumber(car.price)}
                  </div>
                </div>
              </div>
              <div>
                <Link
                  href={`/cars/${car.id}/edit`}
                  className="inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700"
                >
                  <div>
                    <MdEdit className="inline-block align-text-top mr-1" /> Edit
                  </div>
                </Link>
              </div>
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