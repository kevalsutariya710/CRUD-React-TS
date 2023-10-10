import React from 'react'
import { DataType } from '../Data.type'

type Props = {
  list: DataType[];
  onDelete: (data: string) => void;
  setUpPopup: (data: boolean) => void;
  onEdit: (data: DataType) => void;
  search: string;
}

const Table: React.FC<Props> = ({ list, onDelete, setUpPopup, onEdit, search }) => {


  return (
    <div className=" container ml-12 mt-16  overflow-x-auto overflow-y-scroll h-[500px] shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
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
        <tbody className=''>

          {
            list && list.filter((item: DataType): DataType | boolean => {
              return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
            })
              .map((res: DataType) => {
                return (
                  <tr className="text-black border-b" key={res.id}>
                    <td
                      className="px-6 py-4 font-medium text-black whitespace-nowrap "
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

  )
}

export default Table