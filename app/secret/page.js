export const revalidate = 0; //never cache this page
export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import Link from 'next/link';
import Logout from '@/app/components/logout';
import NavBar from '@/app/components/navbar';
import { getSession } from '@/app/actions';

export default async function Page({ params, searchParams }) {
  let token = await getSession();
  // let token = cookies().get('token'); //Eg: {name:'token', value:'a3df6f'}

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <header className="p-4">
        <h1>Secret page</h1>
        <h2>You Must Be Logged In to See This Page</h2>
        <NavBar token={token?.value} />
      </header>
      <section className="p-4">
        <p>You are logged in... with token {token?.value}.</p>

        <p>
          <Logout />
        </p>
      </section>
    </main>
  );
}
