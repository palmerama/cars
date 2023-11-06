'use client';

import Link from 'next/link';
import { Button, LinkButton } from '@/app/ui/button';
import { updateCar } from '@/app/lib/actions';
import { Car } from '@/app/lib/definitions';
import { FormSection, Input, Select } from '@/app/ui/form';

export default function Form({ car, imageFilenames }: { car: Car, imageFilenames: Array<string> }) {
  const updateCarWithId = updateCar.bind(null, car.id)

  return (
    <form action={updateCarWithId}>
      <div className="grid gap-5 mb-4">
        <FormSection title='Details'>
          <Input
            label="Manufacturer"
            name="manufacturer"
            type="text"
            placeholder="eg. Ford"
            defaultValue={car.manufacturer}
          />

          <Input
            label="Model"
            name="model"
            type="text"
            placeholder="eg. Escort"
            defaultValue={car.model}
          />

          <Input
            label="Trim"
            name="trim"
            type="text"
            placeholder="eg. SE"
            defaultValue={car.trim}
          />

          <Input
            label="Mileage"
            name="mileage"
            type="number"
            placeholder="eg. 10000"
            defaultValue={car.mileage}
          />

          <Input
            label="Price"
            name="price"
            type="number"
            placeholder="in £"
            defaultValue={car.price}
          />

          <Input
            label="Colour"
            name="color"
            type="text"
            placeholder="eg. red"
            defaultValue={car.color}
          />
        </FormSection>

        <FormSection title='Age'>
          <Input
            label="Year"
            name="year"
            type="number"
            placeholder="eg. 2023"
            defaultValue={car.year}
          />

          <Input
            label="Reg year"
            name="regYear"
            type="number"
            placeholder="UK number plate, eg. 73"
            defaultValue={car.regYear}
          />
        </FormSection>

        <FormSection title='Propulsion'>
          <Select
            label="Fuel type"
            name="fuelType"
            options={[
              { value: 'petrol', label: 'Petrol' },
              { value: 'diesel', label: 'Diesel' },
              { value: 'hybrid', label: 'Hybrid' },
              { value: 'electric', label: 'Electric' },
            ]}
            defaultValue={car.fuelType}
            placeholder="Choose a fuel type"
          />

          <Input
            label="Engine size"
            name="engineSize"
            type="text"
            placeholder="eg. 2.0"
            defaultValue={car.engineSize}
          />
        </FormSection>

        <FormSection title="Image">
          <Select
            label="Photo"
            name="image"
            options={imageFilenames.map(filename => ({
              value: filename,
              label: filename
            }))}
            defaultValue={car.image}
            placeholder="Choose a photo"
          />
        </FormSection>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <LinkButton href="/cars" empty>Cancel</LinkButton>
        <Button type="submit">Update car</Button>
      </div>
    </form>
  );
}