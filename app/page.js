export const revalidate = 0; //never cache this page
export const dynamic = 'force-dynamic';

import Login from '@/app/components/login';
import Logout from '@/app/components/logout';
import NavBar from '@/app/components/navbar';

import Link from 'next/link';
import { getSession } from '@/app/actions';

export default async function Home() {
  let token = await getSession(); //called from server-side can accept a return value

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <header className="p-4">
        <h1>Home page</h1>
        <NavBar token={token?.value} />
      </header>
      <section className="p-4">
        <Login />

        <Logout />
      </section>
      <section className="p-4">
        <p className="p-4">TOKEN: {token?.value}</p>
        {token?.value ? <p>You are logged in.</p> : <p>No Session Token. You are NOT logged in.</p>}
      </section>
    </main>
  );
}
