import React, { ChangeEvent, useState } from 'react'
import { DataType } from '../Data.type'

type Props = {
  list: DataType[];
  onDelete: (data: string) => void;
  setUpPopup: (data: boolean) => void;
  onEdit: (data: DataType) => void;
  setPopUp: (data: boolean) => void;
}

const Table: React.FC<Props> = ({ list, onDelete, setUpPopup, onEdit, setPopUp }) => {

  //! Search hook
  const [search, setSearch] = useState<string>("")

  return (
    <div className="max-w-6xl mx-auto mt-5 border border-dotted rounded-lg">
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>

        <div className='flex justify-between'>

          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  " placeholder="Search name"
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className='p-4'>
            <button className='bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full'
              onClick={(): void => setPopUp(true)}>
              Add
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              list && list.filter((item: DataType): DataType | boolean => {
                return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
              })
                .map((res: DataType) => {
                  return (
                    <tr className="bg-white border-b hover:bg-gray-50" key={res.id}>
                      <td
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        {res.name}
                      </td>
                      <td className="px-6 py-4">{res.Email}</td>
                      <td className="px-6 py-4">{res.Address}</td>
                      <td className="px-6 py-4">{res.mobileNo}</td>
                      <td className="px-6 py-4">{res.Gender}</td>
                      <td className="px-6 py-4">{res.city}</td>
                      <td className="px-6 py-4">

                        <div className='space-x-3'>
                          <button className='bg-blue-100 p-3 rounded-xl text-black'
                            onClick={() => {
                              onEdit(res)
                              setUpPopup(true)
                            }}
                          >Update</button>
                          <button className='bg-red-100 p-3 rounded-xl text-black'
                            onClick={() => onDelete(res.id)}
                          >Delete</button>
                        </div>
                      </td>
                    </tr>
                  )

                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table