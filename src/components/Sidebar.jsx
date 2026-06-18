import { FaWallet, FaPlusCircle, FaChartPie, FaListAlt } from "react-icons/fa"
import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <div className="h-screen">
                <div className="flex flex-col gap-2 m-4">
                    <div className="flex gap-2 mb-4">
                        <FaWallet className="text-purple-600 text-xl"/>
                        <p className="font-bold text-sm">Expense Tracker</p>
                    </div>
                    <div className="flex gap-2 m-2">
                        <NavLink to='/' className="flex gap-2 m-2 items-center">
                            <FaChartPie className="text-purple-600 text-xl" />
                            <p className="text-sm">Dashboard</p>
                        </NavLink>

                    </div>
                    <div className="flex gap-2 m-2">
                        <NavLink to='/expenses' className="flex gap-2 m-2 items-center" >
                            <FaListAlt className="text-purple-600 text-xl" />
                            <p className="text-sm">All Expenses</p>
                        </NavLink>                        
                    </div>
                    <div className="flex gap-2 m-2">
                        <NavLink to='/add-expense' className="flex gap-2 m-2 items-center" >
                            <FaPlusCircle className="text-purple-600 text-xl" />
                            <p className="text-sm">Add Expense</p>
                        </NavLink>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar