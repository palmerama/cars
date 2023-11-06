'use client';

import Link from 'next/link';
import { Button, LinkButton } from '@/app/ui/button';
import { createCar } from '@/app/lib/actions';
import { FormSection, Input, Select } from '@/app/ui/form';

export default function Form({ imageFilenames }: { imageFilenames: Array<string> }) {
  return (
    <form action={createCar}>
      <div className="grid gap-5 mb-4">
        <FormSection title='Details'>
          <Input
            label="Manufacturer"
            name="manufacturer"
            type="text"
            placeholder="eg. Ford"
          />

          <Input
            label="Model"
            name="model"
            type="text"
            placeholder="eg. Escort"
          />

          <Input
            label="Trim"
            name="trim"
            type="text"
            placeholder="eg. SE"
          />

          <Input
            label="Mileage"
            name="mileage"
            type="number"
            placeholder="eg. 10000"
          />

          <Input
            label="Price"
            name="price"
            type="number"
            placeholder="in £"
          />

          <Input
            label="Colour"
            name="color"
            type="text"
            placeholder="eg. red"
          />
        </FormSection>

        <FormSection title='Age'>
          <Input
            label="Year"
            name="year"
            type="number"
            placeholder="eg. 2023"
          />

          <Input
            label="Reg year"
            name="regYear"
            type="number"
            placeholder="UK number plate, eg. 73"
          />
        </FormSection>

        <FormSection title='Propulsion'>
          <Select
            label="Choose a fuel type"
            name="fuelType"
            options={[
              { value: 'petrol', label: 'Petrol' },
              { value: 'diesel', label: 'Diesel' },
              { value: 'hybrid', label: 'Hybrid' },
              { value: 'electric', label: 'Electric' },
            ]}
            placeholder="Select a fuel type"
          />

          <Input
            label="Engine size"
            name="engineSize"
            type="text"
            placeholder="eg. 2.0"
          />
        </FormSection>

        <FormSection title="Image">
          <Select
            label="Choose an image"
            name="image"
            options={imageFilenames.map(filename => ({
              value: filename,
              label: filename
            }))}
            placeholder="Select an image"
          />
        </FormSection>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <LinkButton href="/cars" reverse>
          Cancel
        </LinkButton>
        <Button type="submit">Add car</Button>
      </div>
    </form>
  );
}