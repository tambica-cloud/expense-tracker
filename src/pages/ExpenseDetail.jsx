import { FaArrowLeft, FaPizzaSlice } from "react-icons/fa"

function ExpenseDetail() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 text-blue-800 font-bold">
                    <FaArrowLeft />
                        Back to All Expenses
                    </button>
                    <p className="font-bold text-2xl mt-4">Expense Details</p>
                    
                    <div 
                        className="flex gap-2 mt-4 border border-gray-100 p-4 
                        shadow-md rounded-lg">
                        <div className="w-24 flex justify-center">
                             <FaPizzaSlice className="text-orange-500 text-6xl" />
                        </div>
                       
                        <div className="flex flex-col flex-1 gap-3">
                            <p className="text-gray-700 text-sm">Expense Name</p>
                            <p className="font-bold text-lg mb-4">Pizza</p>
                            <div className="flex gap-4">
                                <p className="text-sm text-gray-500 w-24">Amount</p>
                                <p className="text-xl text-red-500">₹500</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-sm text-gray-500 w-24">Category</p>
                                <p className=" text-green-500">Food</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-sm text-gray-500 w-24">Date</p>
                                <p className="text-sm">14 Jun 2026</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-sm text-gray-500 w-24">Added On</p>
                                <p className="text-sm">14 Jun 2026, 10:30 AM</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-sm text-gray-500 w-24">Notes</p>
                                <p className="text-sm">Weekend dinner with friends</p>
                            </div>
                            <div className="flex gap-2 mt-2">
                            <button 
                                className="
                                bg-blue-500
                                text-white
                                rounded-lg
                                py-2
                                px-4
                                hover:bg-blue-600">
                                Edit Expense
                            </button>
                            <button 
                                className="text-red-500 text-md border border-red-500 
                                rounded-lg shadow-md py-2 px-4">
                                Delete Expense
                            </button>
                        </div>
                        </div>

                        
                    </div>
                    
            </div>
        </>
    )
}

export default ExpenseDetail