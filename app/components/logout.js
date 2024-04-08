//Logout component
import { logout } from '@/app/actions';
import { redirect } from 'next/navigation';

export default function Logout() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await logout();
        redirect('/');
      }}
    >
      <button className="text-white bg-blue-700 p-1 m-2">Log Out</button>
    </form>
  );
}
