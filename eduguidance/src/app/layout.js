import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>EduGuidance</title>
        <meta name="description" content="Your future powered by AI" />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold">EduGuidance</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-white shadow p-4 mt-10 text-center text-sm">
          © 2025 EduGuidance – Casablanca, Morocco
        </footer>
      </div>
    </>
  );
}
