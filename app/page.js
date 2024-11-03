import Head from 'next/head';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my landing page" />
      </Head>
      <main>
        <h1>Welcome to My Landing Page</h1>
        <p>{data.message}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulate fetching data from an API or database
  const data = { message: 'Hello from the server!' };

  return {
    props: { data },
  };
}
