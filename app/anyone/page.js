// export const revalidate = false; // means cache forever
// export const revalidate = 0; // don't cache
// export const revalidate = 60 * 10; // means cache for 10 mins

import NavBar from '@/app/components/navbar';
import Logout from '@/app/components/logout';
import { getSession } from '@/app/actions';

export default async function Page() {
  let token = await getSession();

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <header className="p-4">
        <h1>Anyone Can See This Page</h1>

        <NavBar />
      </header>
      <section>{token?.value && <Logout />}</section>
    </main>
  );
}
