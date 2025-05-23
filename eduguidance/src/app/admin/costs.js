import Layout from '../../components/Layout';
import ExpenseCard from '../../components/ExpenseCard';
import { expenses } from '../../data/expenses';
export default function Costs() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Expense Planning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expenses.map((exp) => (
          <ExpenseCard key={exp} name={exp} />
        ))}
      </div>
    </Layout>
  );
}
