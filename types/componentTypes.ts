export type ExpensePropsType = {
    note: string,
    date: string,
    amount: number,
    category: string,
    id: string
}

export type ExpenseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    expense: ExpenseType
    onAddExpense: (expense:ExpenseType)=> void
    onUpdateExpense: (expense:ExpenseType)=> void
}