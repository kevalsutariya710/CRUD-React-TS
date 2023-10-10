import React from 'react'


const Page: React.FC = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto my-3">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <div
                                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 cursor-pointer"
                            >
                                Previous
                            </div>
                        </li>
                        <li>
                            <div
                                className="bg-blue-100 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 cursor-pointer"
                            >
                                1
                            </div>
                        </li>

                        <li>
                            <div
                                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 cursor-pointer"
                            >
                                Next
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>
        </>

    )
}

export default Page