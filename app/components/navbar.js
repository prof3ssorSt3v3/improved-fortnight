import Link from 'next/link';
import { getSession } from '@/app/actions';

export default async function NavBar(props) {
  let token = await getSession();
  return (
    <nav>
      <span className="px-4">
        <Link href="/" className="text-amber-400 underline">
          Home
        </Link>
      </span>
      {token?.value && (
        <span className="px-4">
          <Link href="/secret" className="text-amber-400 underline">
            Private
          </Link>
        </span>
      )}
      <span className="px-4">
        <Link href="/anyone" className="text-amber-400 underline">
          Public
        </Link>
      </span>
    </nav>
  );
}
