import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"
import commaNumber from 'comma-number'
import Image from "next/image"
import Link from "next/link"
import { MdLocalGasStation } from 'react-icons/md'
import { SlSpeedometer } from 'react-icons/sl'
import { MdEdit, MdClose } from 'react-icons/md'
import { LinkButton } from "@/app/ui/button"

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
              <div className="w-full grid grid-flow-col justify-between">
                <div>
                  <LinkButton href={`/cars/${car.id}/edit`}>
                    <MdEdit className="inline-block align-text-top mr-1" /> Edit
                  </LinkButton>
                </div>
                <div>
                  <LinkButton href={`/cars/${car.id}/edit`} warn>
                    <MdClose className="inline-block text-lg align-text-bottom mr-1" /> Delete
                  </LinkButton>
                </div>
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