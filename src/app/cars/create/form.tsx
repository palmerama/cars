'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createCar } from '@/app/lib/actions';

export default function Form() {
  return (
    <form action={createCar}>
      <div className="grid gap-5 mb-4">
        <legend>
          Car details
        </legend>
        <fieldset className="grid gap-5">

          {/* manufacturer */}
          <div>
            <label htmlFor="manufacturer" className="mb-2 block text-sm font-medium">
              Manufacturer
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="manufacturer"
                  name="manufacturer"
                  type="text"
                  placeholder="eg. Ford"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* model */}
          <div>
            <label htmlFor="model" className="mb-2 block text-sm font-medium">
              Model
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder="eg. Escort"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* trim */}
          <div>
            <label htmlFor="trim" className="mb-2 block text-sm font-medium">
              Trim
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="trim"
                  name="trim"
                  type="string"
                  placeholder="eg. SE"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* year */}
          <div>
            <label htmlFor="year" className="mb-2 block text-sm font-medium">
              Year
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="year"
                  name="year"
                  type="number"
                  placeholder="eg. 2023"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* reg year */}
          <div>
            <label htmlFor="regYear" className="mb-2 block text-sm font-medium">
              Reg year
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="regYear"
                  name="regYear"
                  type="number"
                  placeholder="eg. 73"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* price */}
          <div>
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Price
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="in £"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* fuel type */}
          <div>
            <label htmlFor="fuelType" className="mb-2 block text-sm font-medium">
              Fuel type
            </label>
            <div className="relative">
              <select
                id="fuelType"
                name="fuelType"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                defaultValue=""
                placeholder="Select a fuel type"
              >
                <option value="" disabled>
                  Select a fuel type
                </option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
              </select>
            </div>
          </div>

          {/* engine size */}
          <div>
            <label htmlFor="engineSize" className="mb-2 block text-sm font-medium">
              Engine size
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="engineSize"
                  name="engineSize"
                  type="text"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* mileage */}
          <div>
            <label htmlFor="mileage" className="mb-2 block text-sm font-medium">
              Mileage
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="mileage"
                  name="mileage"
                  type="number"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* image filename */}
          <div>
            <label htmlFor="image" className="mb-2 block text-sm font-medium">
              Image filename
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="image"
                  name="image"
                  type="string"
                  placeholder="eg. escort.jpg"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* colour */}
          <div>
            <label htmlFor="color" className="mb-2 block text-sm font-medium">
              Colour
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="color"
                  name="color"
                  type="string"
                  placeholder="eg. red"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

        </fieldset>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/cars"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add car</Button>
      </div>
    </form>
  );
}