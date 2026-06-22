import { useNavigate } from "react-router-dom"
import { FaEye, FaTrash } from "react-icons/fa"
import categoryConfig from "./categoryConfig"

function ExpenseItem({ expense, deleteExpense, showActions = false }) {

    const navigate = useNavigate()
    const config = categoryConfig[expense.category]
    const Icon = config?.icon

    return (
        <>
            <div className="grid grid-cols-5 items-center py-3">
                <div className="flex items-center gap-2">
                        {Icon && <Icon className={config.color} />}
                        <p className="font-bold">{expense.expenseName}</p>
                </div>                    
                <p className="text-green-500 font-bold">{expense.category}</p>
                <p className="text-gray-500 font-bold">{expense.date}</p>
                <p className="text-red-500 font-bold">₹{expense.amount}</p>
                {
                    showActions && (
                        <div className="flex gap-4 items-center justify-start">
                        <button onClick={() => navigate(`/expense-detail/${expense.id}`)}>
                        <FaEye 
                            className="text-blue-500 hover:text-blue-700 
                            cursor-pointer" />
                        </button>
                        <button onClick={() => deleteExpense(expense.id)}>
                        <FaTrash 
                            className="text-red-500 hover:text-red-700 
                            cursor-pointer" />
                        </button>
                        </div>
                    )
                }
                
            </div>
        </>
    )
}

export default ExpenseItem