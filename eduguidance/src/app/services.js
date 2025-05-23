import Layout from '../layout';
import ServiceCard from '../ServiceCard';
import { services } from '../data/services';
export default function Services() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Our Services & Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </Layout>
  );
}
