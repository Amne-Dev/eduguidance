export default function ServiceCard({ title, price, currency = 'MAD', description }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <span className="text-2xl font-bold">
        {price === 0 ? 'Free' : `${price} ${currency}/mo`}
      </span>
    </div>
  );
}
