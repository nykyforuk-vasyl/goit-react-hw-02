import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const transactionRows = items.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionRows}</tbody>
    </table>
  );
};

export default TransactionHistory;
