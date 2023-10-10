import { useState } from 'react'
import { DataType } from '../Data.type';


interface Props {
    setPopUp: (data: boolean) => void;
    Submit: (allData: DataType) => void;
}

interface RegData {
    name: string,
    Address: string,
    Email: string,
    mobileNo: string
}

const AddItem = ({ setPopUp, Submit }: Props) => {


    //!Hooks
    const [regData, setRegData] = useState<RegData>({
        name: '',
        Address: '',
        Email: '',
        mobileNo: '',
    });
    const [getCity, setGetCity] = useState<string>("");
    const [gender, setGender] = useState<string>("");



    //! City Handle
    let cityChange = (e: any) => {
        let value: string = e.target.value;
        setGetCity(value)
    }

    //! onChang Handle
    let Change = (e: React.ChangeEvent<HTMLInputElement>) => {

        let name = e.target.name
        let value = e.target.value
        setRegData({ ...regData, [name]: value })
    }

    //! Submit The Data
    let handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        let data: DataType = {
            id: new Date().toJSON().toString(),
            name: regData.name,
            Address: regData.Address,
            Email: regData.Email,
            mobileNo: parseInt(regData.mobileNo),
            Gender: gender,
            city: getCity,
        }
        if (data.name === "" || data.Address === "" || data.Email === "" || data.city === '' || data.Gender === "") {
            alert("Fill the Fields")
        }
        else {
            Submit(data)
            setPopUp(false)
        }
    }




    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                                    onChange={Change}
                                    aria-required
                                />
                                <input type="text" className="py-3 px-4 block mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Email"
                                    name="Email"
                                    onChange={Change}
                                    aria-required
                                />
                                <input type="text" className="py-3 px-4 block mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Address"
                                    name="Address"
                                    onChange={Change}
                                    aria-required
                                />
                                <input type="text" className="py-3 px-4 block  mt-3 w-96 border border-gray-200 rounded-md text-sm" placeholder="Number"
                                    name="mobileNo"
                                    onChange={Change}
                                    aria-required
                                />
                                <div className='flex space-x-2 mt-3'>
                                    <input type="radio" name="topping" value="Male" id="regular"
                                        onChange={() => setGender("Male")}
                                    />
                                    <label htmlFor="regular">Male</label>

                                    <input type="radio" name="topping" value="Female" id="medium"
                                        onChange={() => setGender("Female")}
                                    />
                                    <label htmlFor="medium">Female</label>
                                </div>

                                <select
                                    id="countries"
                                    className=" border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    onChange={cityChange}
                                >
                                    <option selected>Choose a City</option>
                                    <option value="Ahmadabad">Ahmadabad</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Baroda">Baroda</option>
                                </select>

                                <div className="flex mt-3 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setPopUp(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black" />
        </div >
    )
}

export default AddItem