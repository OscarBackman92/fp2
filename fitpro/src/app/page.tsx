import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Your Workout App!</h1>
      </div>
    </Layout>
  );
}