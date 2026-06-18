import { useContext } from "react";
import { FaPlusCircle, FaPizzaSlice, FaGasPump, FaFilm, 
    FaShoppingBag, FaShoppingCart, FaEye, FaTrash  } from "react-icons/fa"
import { ExpenseContext } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

function Expenses() {
    const { expenses } = useContext(ExpenseContext)
    const navigate = useNavigate()

    console.log(expenses);

    return (
        <>
            <div className="mt-6 border border-gray-200 rounded-lg shadow-md p-4">
                <div className="flex justify-between gap-2">
                    <p className="font-bold text-2xl">All Expenses</p>
                    <button className="flex items-center bg-blue-500 
                        text-white p-2 rounded-lg hover:bg-blue-600 transition 
                        cursor-pointer"
                        onClick={() => navigate('/add-expense')}
                    >
                        <FaPlusCircle className="m-1" />
                        Add Expense
                    </button>
                </div>
                
                <div className="flex gap-4 mt-4">
                    <input
                        type="text"
                        placeholder="🔍 Search Expenses"
                        className="flex-1 px-4 py-2 border border-gray-200 
                        rounded-lg"
                    />

                    <select
                        className="px-4 py-2 border border-gray-200 rounded-lg"
                    >
                        <option>📂 All Categories</option>
                        <option>🍴 Food</option>
                        <option>🚗 Transport</option>
                        <option>🛍️ Shopping</option>
                        <option>🎬 Entertainment</option>
                        <option>📦 Other</option>
                    </select>

                </div>

                <div className="grid grid-cols-5 items-center py-3 mt-4 border-b">
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900">Expense</p>
                    </div>                    
                    <p className="text-gray-900 font-bold">Category</p>
                    <p className="text-gray-900 font-bold">Date</p>
                    <p className="text-gray-900 font-bold">Amount</p>
                    <p className="text-gray-900 font-bold">Action</p>
                </div> 

                {
                    expenses.map((expense, index) => 
                    <div id={index} className="grid grid-cols-5 items-center py-3">
                        <div className="flex items-center gap-2">
                                <FaPizzaSlice className="text-orange-500" />
                                <p className="font-bold">{expense.expenseName}</p>
                        </div>                    
                        <p className="text-green-500 font-bold">{expense.category}</p>
                        <p className="text-gray-500 font-bold">{expense.date}</p>
                        <p className="text-red-500 font-bold">₹{expense.amount}</p>
                        <div className="flex gap-4 items-center justify-start">
                            <FaEye 
                                className="text-blue-500 hover:text-blue-700 
                                cursor-pointer" />
                            <FaTrash 
                                className="text-red-500 hover:text-red-700 
                                cursor-pointer" />
                        </div>
                    </div>
                )
                }

                {/* <div className="grid grid-cols-5 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaGasPump className="text-blue-500" />
                        <p className="font-bold">Petrol</p>
                    </div>                    
                    <p className="text-blue-500 font-bold">Transport</p>
                    <p className="text-gray-500 font-bold">14 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹1000</p>
                    <div className="flex gap-4 items-center justify-start">
                        <FaEye className="text-blue-500 hover:text-blue-700 
                        cursor-pointer" />
                        <FaTrash className="text-red-500 hover:text-red-700 
                        cursor-pointer" />
                    </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaFilm className="text-purple-600" />
                        <p className="font-bold">Netflix</p>
                    </div>                    
                    <p className="text-purple-800 font-bold">Entertainment</p>
                    <p className="text-gray-500 font-bold">13 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹649</p>
                    <div className="flex gap-4 items-center justify-start">
                        <FaEye className="text-blue-500 hover:text-blue-700 
                        cursor-pointer" />
                        <FaTrash className="text-red-500 hover:text-red-700 
                        cursor-pointer" />
                    </div>
                </div>

                <div className="grid grid-cols-5 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaShoppingBag className="text-orange-500" />
                        <p className="font-bold">Shoes</p>
                    </div>                   
                    <p className="text-orange-500 font-bold">Shopping</p>
                    <p className="text-gray-500 font-bold">12 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹2,500</p>
                    <div className="flex gap-4 items-center justify-start">
                        <FaEye className="text-blue-500 hover:text-blue-700 
                        cursor-pointer" />
                        <FaTrash className="text-red-500 hover:text-red-700 
                        cursor-pointer" />
                    </div>
                </div>
                
                <div className="grid grid-cols-5 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaShoppingCart className="text-green-500" />
                        <p className="font-bold">Grocery</p>
                    </div>
                    <p className="text-green-500 font-bold">Food</p>
                    <p className="text-gray-500 font-bold">11 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹1,200</p>
                    <div className="flex gap-4 items-center justify-start">
                        <FaEye className="text-blue-500 hover:text-blue-700 
                        cursor-pointer" />
                        <FaTrash className="text-red-500 hover:text-red-700 
                        cursor-pointer" />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Expenses