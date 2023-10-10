import React, { useState } from 'react'
import { DataType, dummyData } from "../Data.type"
import Table from './Table'
import AddItem from './AddItem'
import Update from './Update'

const Home = () => {

    //! Hooks
    const [employeeList, setEmployeeList] = useState<DataType[]>(dummyData)
    const [popUp, setPopUp] = useState<boolean>(false)
    const [updatePopup, setUpdatePopup] = useState<boolean>(false)
    const [DataToUpdate, setDataToUpdate] = useState({} as DataType)


    //! PopUp handle Function
    let setPop = (data: boolean): void => {
        setPopUp(data)
    }

    //!update PopUp
    let setupPopup = (data: boolean): void => {
        setUpdatePopup(data)
    }


    //! Submit Handle Function
    let onsubmit = (allData: DataType): void => {
        setEmployeeList([...employeeList, allData])
    }


    //! Delete handle Function
    let deleteItem = (id: string): void => {
        if (id) {
            alert('Are you sure u want to delete')
            let Updated: DataType[] = employeeList.filter((res: DataType): boolean => res.id !== id)
            setEmployeeList(Updated)
        }
    }

    //!UpdateHandle Function 
    let UpdateSubmit = (data: DataType) => {

        const FilterData: DataType = employeeList.filter((res: DataType): boolean => res.id === data.id)[0]
        const index: number = employeeList.indexOf(FilterData)
        const tempData: DataType[] = [...employeeList]
        tempData[index] = data;
        setEmployeeList(tempData)
    }


    //!get the Id of Which we want to update
    let Edit = (data: DataType): void => {
        setDataToUpdate(data)
    }



    return (
        <div className='container'>
            <button className='absolute right-9 -mt-14 p-3 px-4 border rounded-xl bg-blue-200'
                onClick={() => setPopUp(!popUp)}
            >
                Add
            </button>
            {
                popUp && <AddItem setPopUp={setPop} Submit={onsubmit} />
            }
            {
                updatePopup && <Update Data={DataToUpdate} setUpPopup={setupPopup} UpSubmit={UpdateSubmit} />
            }

            <Table list={employeeList} onDelete={deleteItem} setUpPopup={setupPopup} onEdit={Edit} />
        </div>
    )
}

export default Home