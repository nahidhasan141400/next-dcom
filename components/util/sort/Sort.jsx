
import React, { useState } from 'react'


const CategoryFilter4 = () => {

  const filters = [
    {
      id: 'CATEGORIES',
      name: 'CATEGORIES',
      options: [
        { value: 'men', label: 'men' },
        { value: 'women', label: 'women' },
        { value: 'style', label: 'style' },
        { value: 'new', label: 'new' },
      ],
    },
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'Yellow' },
        { value: 'blue', label: 'Blue' },
        { value: 'brown', label: 'Purple' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Red' },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'xs', label: 'XS' },
        { value: 'sm', label: 'SM' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
        { value: 'xxl', label: 'XXL' },
      ],
    },
  ]

  const [gridView, setGridView] = useState(false)
  const [menCategory, setMenCategory] = useState(false)


  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="relative">

        {/* :HEAD TITLE */}
        <div className="pb-10 sm:py-10 flex flex-col items-center border-b-2 border-gray-200 text-center">
          {/* ::Title */}
          <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold">New Arrivals</h1>
        </div>


        {/* :FILTERS CONTAINER */}
        <div className="py-5 sm:px-4 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* ::Filter Select Input */}
          <div className="flex-shrink-0 mt-5 md:mt-0 max-w-sm sm:max-w-none w-full md:w-auto grid sm:grid-flow-col grid-cols-1 sm:auto-cols-fr gap-4">
            {filters.map(filter => (
              <div key={filter.id} className="col-span-1">
                <label htmlFor={filter.id} className="sr-only">{filter.name}</label>
                <select name={filter.id} id={filter.id} defaultValue={filter.name} className="form-select w-full rounded border border-gray-300 bg-gray-100 text-base text-gray-600 focus:border-rose-500 focus:ring-rose-500">
                  <option value="" className="font-semibold">{filter.name}</option>
                  {filter.options.map((option,i) => (
                    <option key={i} value={option.value}>{option.label}</option>
                  ))
                  }
                </select>
              </div>
            ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryFilter4
