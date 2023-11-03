export type car = {
  id: string
  manufacturer: string
  model: string
  year: number
  regYear: number
  trim: string
  price: number
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  engineSize: number | undefined
  mileage: number
  image: string
  color: string
}

export function getCar(id: string): car {
  return getCarsData().filter(car => car.id === id)[0]
}

export function getCarsData(): Array<car> {
  return [
    {
      id: '1',
      manufacturer: 'Ford',
      model: 'Focus',
      year: 2023,
      regYear: 23,
      trim: 'SE',
      price: 20000,
      fuelType: 'petrol',
      engineSize: 1.6,
      mileage: 15000,
      image: 'focus.jpg',
      color: 'blue'
    },
    {
      id: '2',
      manufacturer: 'Volkswagen',
      model: 'Golf',
      year: 2022,
      regYear: 72,
      trim: 'GTi',
      price: 23000,
      fuelType: 'diesel',
      engineSize: 2.0,
      mileage: 18000,
      image: 'golf.jpg',
      color: 'silver'
    },
    {
      id: '3',
      manufacturer: 'Toyota',
      model: 'Corolla',
      year: 2021,
      regYear: 71,
      trim: 'Hybrid LE',
      price: 25000,
      fuelType: 'hybrid',
      engineSize: 1.8,
      mileage: 12000,
      image: 'corolla.jpg',
      color: 'white'
    },
    {
      id: '4',
      manufacturer: 'Tesla',
      model: 'Model 3',
      year: 2020,
      regYear: 70,
      trim: 'Standard Range Plus',
      price: 40000,
      fuelType: 'electric',
      engineSize: undefined,
      mileage: 10000,
      image: 'model3.jpg',
      color: 'black'
    },
    {
      id: '5',
      manufacturer: 'Nissan',
      model: 'Qashqai',
      year: 2019,
      regYear: 69,
      trim: 'Tekna',
      price: 22000,
      fuelType: 'diesel',
      engineSize: 1.5,
      mileage: 20000,
      image: 'qashqai.jpg',
      color: 'grey'
    },
    {
      id: '6',
      manufacturer: 'Hyundai',
      model: 'Kona',
      year: 2018,
      regYear: 68,
      trim: 'Ultimate',
      price: 27000,
      fuelType: 'electric',
      engineSize: undefined,
      mileage: 14000,
      image: 'kona.jpg',
      color: 'red'
    },
    {
      id: '7',
      manufacturer: 'Audi',
      model: 'A3',
      year: 2017,
      regYear: 67,
      trim: 'S Line',
      price: 28000,
      fuelType: 'diesel',
      engineSize: 2.0,
      mileage: 16000,
      image: 'a3.jpg',
      color: 'blue'
    },
    {
      id: '8',
      manufacturer: 'BMW',
      model: '3 Series',
      year: 2016,
      regYear: 66,
      trim: 'M Sport',
      price: 35000,
      fuelType: 'petrol',
      engineSize: 2.0,
      mileage: 17000,
      image: '3series.jpg',
      color: 'grey'
    },
    {
      id: '9',
      manufacturer: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2015,
      regYear: 65,
      trim: 'AMG Line',
      price: 38000,
      fuelType: 'diesel',
      engineSize: 2.2,
      mileage: 19000,
      image: 'c-class.jpg',
      color: 'silver'
    },
    {
      id: '10',
      manufacturer: 'Jaguar',
      model: 'I-PACE',
      year: 2014,
      regYear: 64,
      trim: 'SE',
      price: 60000,
      fuelType: 'electric',
      engineSize: undefined,
      mileage: 8000,
      image: 'ipace.jpg',
      color: 'red'
    },
    {
      id: '11',
      manufacturer: 'Kia',
      model: 'Sportage',
      year: 2013,
      regYear: 63,
      trim: 'GT-Line',
      price: 26000,
      fuelType: 'petrol',
      engineSize: 1.4,
      mileage: 21000,
      image: 'sportage.jpg',
      color: 'grey'
    },
    {
      id: '12',
      manufacturer: 'Land Rover',
      model: 'Discovery',
      year: 2012,
      regYear: 62,
      trim: 'HSE Luxury',
      price: 55000,
      fuelType: 'diesel',
      engineSize: 3.0,
      mileage: 22000,
      image: 'discovery.jpg',
      color: 'green'
    }
  ]
}



