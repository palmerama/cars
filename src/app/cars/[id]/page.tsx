import { Car } from "@/app/lib/definitions"
import { fetchAllCars, fetchCarById } from "@/app/lib/data"
import commaNumber from 'comma-number'
import Image from "next/image"
import Link from "next/link"
import { MdLocalGasStation } from 'react-icons/md'
import { SlSpeedometer } from 'react-icons/sl'
import { MdEdit, MdClose } from 'react-icons/md'
import { MdElectricalServices } from 'react-icons/md'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Button, LinkButton } from "@/app/ui/button"
import { deleteCar } from "@/app/lib/actions"

export default async function Page({ params }: { params: { id: string } }) {
  const car = await fetchCarById(params.id)
  const deleteCarWithId = deleteCar.bind(null, params.id);

  return (
    <main>
      <Link href={`/cars`} className="text-blue-600 font-semibold text-lg hover:underline">
        <IoArrowBackSharp className="inline-block align-text-bottom mr-2" /> Vehicles
      </Link>
      {
        car && (
          <div className='grid lg:grid-cols-[1fr_30%] gap-6 mt-4 max-w-[1200px] m-auto bg-gray-100 border border-gray-200 rounded-md overflow-hidden'>
            <Image
              src={`/cars/${car.image}`}
              alt={`${car.year} ${car.manufacturer} ${car.model} ${car.trim}`}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="grid grid-rows-[1fr_auto] gap-6 px-6 pb-5 lg:pt-5">
              <div>
                <div className='grid gap-6'>
                  <div>
                    <h1 className="text-2xl">{car.manufacturer} {car.model}</h1>
                    <div className="text-gray-400">{car.year} ({car.regYear})</div>
                  </div>
                  <div className='grid grid-cols-[auto_1fr]'>
                    <Specs car={car} />
                    <div />
                  </div>
                  <div className="text-2xl text-yellow-600 font-semibold">
                    £{commaNumber(car.price)}
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-flow-col gap-4 justify-end lg:justify-between">
                <div>
                  <LinkButton href={`/cars/${car.id}/edit`}>
                    <MdEdit className="inline-block align-text-top mr-1" /> Edit
                  </LinkButton>
                </div>
                <div>
                  <form action={deleteCarWithId}>
                    <Button warn>
                      <MdClose className="inline-block text-lg align-text-bottom mr-1" /> Delete
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </main>
  )
}

const Specs = ({ car }: { car: Car }) => {
  return (
    <div className='grid gap-2 bg-gray-50 py-3 pl-4 pr-6 rounded-md'>
      {
        car.fuelType !== 'electric' &&
        <div>
          <MdLocalGasStation className="inline-block text-yellow-600 align-text-bottom mr-1" />
          <> {car.engineSize && car.engineSize} {car.fuelType[0].toUpperCase() + car.fuelType.substring(1)} {car.trim}</>
        </div>
      }
      {
        car.fuelType === 'electric' &&
        <>
          <div>{car.trim}</div>
          <div>
            <MdElectricalServices className="inline-block text-yellow-600 align-text-bottom mr-1" />
            <> {car.engineSize && car.engineSize} {car.fuelType[0].toUpperCase() + car.fuelType.substring(1)}</>
          </div>
        </>
      }
      <div>
        <SlSpeedometer className="inline-block text-yellow-600 align-text-top mr-1" />
        <> {commaNumber(car.mileage)}</>
      </div>
    </div >
  )
}

export async function generateStaticParams() {
  const cars: Array<Car> = await fetchAllCars()

  const carIds = cars.map((car: Car) => ({
    id: car.id
  }))

  return carIds
}