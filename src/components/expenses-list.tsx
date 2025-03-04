export default function ExpensesList() {
  const expenses = [
    {
      id: "el",
      description: "Car insurance",
      amount: 295,
    },
  ];
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center px-4 py-2 border-b">
          <p>{expense.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
          <button className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600">
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
