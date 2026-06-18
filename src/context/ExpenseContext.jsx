import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext()

function ExpenseProvider ({ children }) {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses')
        return savedExpenses ? JSON.parse(savedExpenses) : []
    })

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    return (
        <>
            <ExpenseContext.Provider value={{ expenses, setExpenses }}>
                {children}
            </ExpenseContext.Provider>
        </>
    )

}

export default ExpenseProvider