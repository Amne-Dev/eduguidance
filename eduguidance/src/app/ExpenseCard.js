export default function ExpenseCard({ name }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm">
      <h4 className="font-medium">{name}</h4>
      <input
        type="number"
        placeholder="Estimate (MAD)"
        className="mt-2 w-full border p-2 rounded"
      />
    </div>
  );
}