export interface DataType {
    id: string;
    name: string;
    Address: string;
    Email: string;
    mobileNo: number;
    Gender: string;
    city: string;
}

export const dummyData: DataType[] = [
    {
        id: new Date().toJSON().toString(),
        name: "keval",
        Address: "Nikol",
        Email: "keval@gmail.com",
        mobileNo: 1234567891,
        Gender: "Male",
        city: "Ahmedabad"
    },
]
