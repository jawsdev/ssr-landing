import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Welcome to My SSR Examples</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dynamic">Dynamic Content Example</Link>
          </li>
          <li>
            <Link href="/personalized">Personalized Content Example</Link>
          </li>
          <li>
            <Link href="/seo-friendly">SEO-Friendly Content Example</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
