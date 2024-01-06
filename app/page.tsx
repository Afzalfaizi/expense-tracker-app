import ExpenseList from "./components/expenseList/expenseList"
import ExpenseChart from "./components/expenseChart/expenseChart"
import Card from "./components/card/card"
export default function Expense() {
  return (
    <div>
        <h1 className="text-5xl text-center m-5">Expense Tracker App</h1>   
        <ExpenseList/>
        <ExpenseChart/>
        <Card></Card>
    </div>
  )
}