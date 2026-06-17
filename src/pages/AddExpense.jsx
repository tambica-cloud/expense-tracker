import { FaArrowLeft, FaCalendarAlt, FaReceipt, FaRupeeSign, FaSave, FaTags, FaTimes } from "react-icons/fa"

function AddExpense() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 text-blue-800 font-bold">
                <FaArrowLeft />
                    Back to Dashboard
                </button>
                <p className="font-bold text-2xl mt-4">Add New Expense</p>
                <p className="text-gray-800">Fill in the details below to add a 
                    new expense</p>
                <div className="flex flex-col gap-2 mt-4 border 
                    border-gray-100 shadow-md rounded-lg">
                    <p className="font-bold px-4 pt-2">Expense Name</p>
                    <div className="relative mx-2">
                        <FaReceipt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /> 
                        <input
                                type="text"
                                placeholder="Enter Expense Name"
                                className="w-full pl-10 py-2 border border-gray-200 rounded-lg"
                            />
                    </div>
                    <p className="font-bold px-4 pt-2">Amount</p>
                    <div className="relative mx-2">
                        <FaRupeeSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        
                        <input
                            type="text"
                            placeholder="Enter Amount"
                            className="w-full pl-10 py-2 border border-gray-200 rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-6 px-2">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold px-4 pt-2">
                                Category
                            </p>
                            <div className="relative mx-2">
                                <FaTags className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                
                                <select
                                    className="w-full pl-10 py-2 border border-gray-200 rounded-lg"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Food">Food</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold px-4 pt-2">Date</p>
                            <div className="relative mx-2">
                                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                <input
                                    type="date"
                                    className="w-full pl-10 py-2 border border-gray-200 rounded-lg"
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex gap-4 mb-4 ml-2">
                        <button 
                            className="flex items-center gap-2 
                                bg-blue-800 text-white px-6 py-2 rounded-lg">
                                <FaSave />
                                Save Expense
                            </button>
                        <button 
                            className="flex items-center gap-2 text-blue-800 px-6 
                                py-2 border border-gray-200 shadow-md rounded-lg">
                            <FaTimes />
                            Cancel
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AddExpense