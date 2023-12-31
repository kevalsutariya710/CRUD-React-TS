import React, { useState } from 'react'
import { DataType } from '../Data.type'
import toast from 'react-hot-toast';


interface Props {
  Data: DataType;
  setUpPopup: (data: boolean) => void;
  UpSubmit: (data: DataType) => void;
}

interface Data {
  id: string,
  name: string,
  Email: string,
  Address: string,
  mobileNo: number,
  Gender: string
}

const Update: React.FC<Props> = ({ Data, setUpPopup, UpSubmit }) => {

  //! Hook
  const [listData, setListData] = useState<Data>({
    id: Data.id,
    name: Data.name,
    Email: Data.Email,
    Address: Data.Address,
    mobileNo: Data.mobileNo,
    Gender: Data.Gender,
  })
  const [cityChange, setCityChange] = useState<string>(Data.city)


  //! city function
  let seCityChange = (e: any): void => {
    let value: string = e.target.value
    setCityChange(value)
  }


  let Change = (e: any): void => {
    let name = e.target.name
    let value = e.target.value
    setListData({ ...listData, [name]: value })
  }


  let handleSubmit = (e: any): void => {
    e.preventDefault();
    let UpdatedData: DataType = {
      id: listData.id,
      name: listData.name,
      Address: listData.Address,
      Email: listData.Email,
      mobileNo: listData.mobileNo,
      Gender: listData.Gender,
      city: cityChange
    }

    UpSubmit(UpdatedData)
    setUpPopup(false)
    toast.success(`Updated Successfully`)

  }


  let isChecked = (e: string): boolean => listData.Gender === e


  return (
    <>
      <div>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Registration
                </h3>
              </div>


              {/*body*/}
              <form >
                <div className="relative p-6 flex-auto ">

                  <input type="text" className="py-3 px-4  block w-96 border border-gray-200 rounded-md text-sm" placeholder="Name"
                    name="name"
                    value={listData.name}
                    onChange={Change}
                    aria-required
                  />
                  <input type="text" className="py-3 px-4 block mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Email"
                    name="Email"
                    value={listData.Email}
                    onChange={Change}
                    aria-required
                  />
                  <input type="text" className="py-3 px-4 block mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Address"
                    name="Address"
                    value={listData.Address}
                    onChange={Change}
                    aria-required
                  />
                  <input type="text" className="py-3 px-4 block  mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Number"
                    name="mobileNo"
                    value={listData.mobileNo}
                    onChange={Change}
                    aria-required
                  />

                  <div className='flex space-x-2 mt-3'>
                    <input type="radio" name="Male" value="Male" id="Male"
                      checked={isChecked("Male")}
                      onChange={Change}
                    />
                    <label htmlFor="regular">Male</label>

                    <input type="radio" name="Female" value="Female" id="Female"
                      checked={isChecked("Female")}
                      onChange={Change}
                    />
                    <label htmlFor="medium">Female</label>
                  </div>

                  <select
                    id="countries"
                    className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    onChange={seCityChange}
                  >
                    <option selected>Choose a City</option>
                    <option value="Ahmadabad">Ahmadabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Baroda">Baroda</option>
                  </select>

                  <div className="flex mt-3 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b space-x-2">
                    <button
                      className="bg-transparent hover:bg-red-600 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full"
                      type="button"
                      onClick={() => setUpPopup(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-transparent hover:bg-green-600 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Update
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div >
    </>
  )
}

export default Update