export type carData = {
  id: string
  make: string
  model: string
  year: number
}

export function getCarsData(): Array<carData> {
  return [
    {
      id: '001',
      make: 'Ford',
      model: 'Mustang',
      year: 1969
    },
    {
      id: '002',
      make: 'Chevrolet',
      model: 'Camaro',
      year: 1967
    },
    {
      id: '003',
      make: 'Dodge',
      model: 'Charger',
      year: 1969
    }
  ]
}

export function getCar(id: string): carData {
  return getCarsData().filter(car => car.id === id)[0]
}