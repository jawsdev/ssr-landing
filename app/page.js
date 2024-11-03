import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to My SSR Examples</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dynamic" className="text-xl text-blue-500 hover:underline">
              Dynamic Content Example
            </Link>
          </li>
          <li>
            <Link href="/personalized" className="text-xl text-blue-500 hover:underline">
              Personalized Content Example
            </Link>
          </li>
          <li>
            <Link href="/seo-friendly" className="text-xl text-blue-500 hover:underline">
              SEO-Friendly Content Example
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
