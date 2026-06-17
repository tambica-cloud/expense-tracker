import { FaWallet, FaPlusCircle, FaChartPie, FaListAlt } from "react-icons/fa"

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
                        <FaChartPie className="text-purple-600 text-xl" />
                        <p className="text-sm">Dashboard</p>
                    </div>
                    <div className="flex gap-2 m-2">
                        <FaListAlt className="text-purple-600 text-xl" />
                        <p className="text-sm">All Expenses</p>
                    </div>
                    <div className="flex gap-2 m-2">
                        <FaPlusCircle className="text-purple-600 text-xl" />
                        <p className="text-sm">Add Expense</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar