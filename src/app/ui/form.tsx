import clsx from "clsx"
import React from "react"

const inputStyle = "block w-full rounded-md py-3 px-5 text-md text-black leading-normal outline-2 placeholder:text-gray-400"

type InputProps = {
  label: string
  name: string
  type: 'text' | 'number' | 'email' | 'password'
  placeholder?: string | undefined
  defaultValue?: string | number | undefined
}

export const Input: React.FC<InputProps> = ({ label, name, type = 'text', placeholder, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder || ''}
            defaultValue={defaultValue || ''}
            className={inputStyle}
          />
        </div>
      </div>
    </div>
  )
}

type SelectProps = {
  label: string
  name: string
  options: Array<{ value: string, label: string }>
  placeholder?: string | undefined
  defaultValue?: string | number | undefined
}

export const Select: React.FC<SelectProps> = ({ label, name, options, placeholder, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <select
            id={name}
            name={name}
            placeholder={placeholder || ''}
            defaultValue={defaultValue || ''}
            className={clsx(inputStyle, "appearance-none")}
          >
            <option value="" disabled>{placeholder}</option>
            {
              options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export const FormSection: React.FC<{ title?: string | undefined, children: React.ReactNode }> = ({ title = null, children }) => {
  return (
    <div className="grid gap-5 mb-4 px-6 py-5 bg-gray-100 border border-gray-200 rounded-md">
      {
        title && <div className="text-xl font-semibold text-gray-500">{title}</div>
      }
      <fieldset className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </fieldset>
    </div>
  )
}