import React, { useState } from 'react'
import { DataType, dummyData } from "../Data.type"
import Table from './Table'
import AddItem from './AddItem'
import Update from './Update'
import Page from './Page'
import toast from 'react-hot-toast';

const Home: React.FC = () => {

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
            // alert('Are you sure u want to delete')
            let Updated: DataType[] = employeeList.filter((res: DataType): boolean => res.id !== id)
            setEmployeeList(Updated)
            toast.success('Deleted Successfully')
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
        <div>
            {
                popUp && <AddItem setPopUp={setPop} Submit={onsubmit} />
            }
            {
                updatePopup && <Update Data={DataToUpdate} setUpPopup={setupPopup} UpSubmit={UpdateSubmit} />
            }

            <Table list={employeeList} onDelete={deleteItem} setUpPopup={setupPopup} onEdit={Edit}
                setPopUp={setPopUp}
            />
            <Page />
        </div>
    )
}

export default Home