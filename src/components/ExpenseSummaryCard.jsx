function ExpenseSummaryCard ({ title, amount, icon }) {

    return (
        <>
            <div className="flex flex-col border border-gray-300 p-6 w-56 rounded-lg 
            shadow hover:shadow-2xl transition">
                <div className="flex items-center gap-2">
                    {icon}
                    <p className="font-bold text-xs text-gray-700">{title}</p>
                </div>
                
                <div className="flex items-center font-bold
                    text-xl mt-3 ">
                     ₹ {amount}
                </div>
                {/* <label className="text-gray-700 text-xs font-bold
                    mt-2">32%</label> */}
            </div>
        </>
    )
}

export default ExpenseSummaryCard