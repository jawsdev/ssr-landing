const currentTime = new Date().toLocaleString();
console.log(`Page rendered at: ${currentTime}`);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to My SSR Landing Page
      </h1>
      <p className="text-xl text-white mb-8">
        Current Server Time: {currentTime}
      </p>
    </main>
  );
}
