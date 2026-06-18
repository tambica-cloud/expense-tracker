import { FaCar, FaFilm, FaGasPump, FaPizzaSlice, FaPlusCircle, FaRupeeSign, FaShoppingBag, FaShoppingCart, FaUtensils  } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()

    return (
        <>
            <div>
                <div className="flex justify-between gap-2">
                    <p className="font-bold text-2xl">Dashboard</p>
                    <button className="flex items-center bg-blue-500 
                        text-white p-2 rounded-lg hover:bg-blue-600 transition 
                        cursor-pointer"
                        onClick={() => navigate('/add-expense')}
                    >
                        <FaPlusCircle className="m-1" />
                        Add Expense
                    </button>
                </div>
                <div className="flex gap-6 mt-6">
                    <div className="flex flex-col border border-gray-300 p-6 w-72 rounded-lg 
                    shadow-md hover:shadow-lg transition">
                        <p className="font-bold text-sm">Total Expenses</p>
                        <div className="flex items-center font-bold
                         text-blue-700 text-xl mt-2">
                            <FaRupeeSign />
                            12,500
                        </div>
                        <label className="text-gray-500 text-xs font-bold
                         mt-2">This Month</label>
                    </div>
                    <div className="flex flex-col border border-gray-300 p-6 w-56 rounded-lg 
                    shadow hover:shadow-2xl transition">
                        <div className="flex items-center gap-2">
                            <FaUtensils className="text-orange-500 text-2xl" />
                            <p className="font-bold text-xs text-gray-700">Food</p>
                        </div>
                        
                        <div className="flex items-center font-bold
                         text-xl mt-3 ">
                            <FaRupeeSign />
                            4,000
                        </div>
                        <label className="text-gray-700 text-xs font-bold
                         mt-2">32%</label>
                    </div>
                    <div className="flex flex-col border border-gray-300 p-6 w-56 rounded-lg 
                    shadow hover:shadow-2xl transition">
                        <div className="flex items-center gap-2">
                            <FaCar className="text-blue-500 text-2xl"/>
                            <p className="font-bold text-xs text-gray-700">Transport</p>
                        </div>
                        
                        <div className="flex items-center font-bold
                         text-xl mt-3">
                            <FaRupeeSign />
                            3,500
                        </div>
                        <label className="text-gray-700 text-xs font-bold
                         mt-2">28%</label>
                    </div>
                    <div className="flex flex-col border border-gray-300 p-6 w-56 rounded-lg 
                    shadow hover:shadow-2xl transition">
                        <div className="flex items-center gap-2">
                            <FaShoppingBag className="text-green-500 text-2xl"/>
                        <p className="font-bold text-xs text-gray-700">Shopping</p>
                        </div>
                        <div className="flex items-center font-bold
                         text-xl mt-3">
                            <FaRupeeSign />
                            5,000
                        </div>
                        <label className="text-gray-700 text-xs font-bold
                         mt-2">40%</label>
                    </div>
                </div>
                <div className="flex justify-between mt-4 pt-4">
                    <p className="font-bold text-l">Recent Expenses</p>
                    <button className="flex items-center
                    text-blue-500 font-bold">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-4 items-center py-3">
                    <div className="flex items-center gap-2">
                         <FaPizzaSlice className="text-orange-500" />
                         <p className="font-bold">Pizza</p>
                    </div>                    
                    <p className="text-green-500 font-bold">Food</p>
                    <p className="text-gray-500 font-bold">14 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹500</p>
                </div>
                <div className="grid grid-cols-4 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaGasPump className="text-blue-500" />
                        <p className="font-bold">Petrol</p>
                    </div>                    
                    <p className="text-blue-500 font-bold">Transport</p>
                    <p className="text-gray-500 font-bold">14 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹1000</p>
                </div>
                <div className="grid grid-cols-4 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaFilm className="text-purple-600" />
                        <p className="font-bold">Netflix</p>
                    </div>                    
                    <p className="text-purple-800 font-bold">Entertainment</p>
                    <p className="text-gray-500 font-bold">13 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹649</p>
                </div>
                <div className="grid grid-cols-4 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaShoppingBag className="text-orange-500" />
                        <p className="font-bold">Shoes</p>
                    </div>                   
                    <p className="text-orange-500 font-bold">Shopping</p>
                    <p className="text-gray-500 font-bold">12 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹2,500</p>
                </div>
                <div className="grid grid-cols-4 items-center py-3">
                    <div className="flex items-center gap-2">
                        <FaShoppingCart className="text-green-500" />
                        <p className="font-bold">Grocery</p>
                    </div>
                    <p className="text-green-500 font-bold">Food</p>
                    <p className="text-gray-500 font-bold">11 Jun 2026</p>
                    <p className="text-red-500 font-bold">₹1,200</p>
                </div>


            </div>
        </>
    )
}

export default Dashboard