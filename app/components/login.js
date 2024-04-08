// Login component
import { redirect } from 'next/navigation';

export default function Login() {
  //server side component could call a server action
  //we are just sending the user to the Google Auth page
  //which will return us to this website on the /login/page.js
  const redir = encodeURIComponent('http://localhost:9000/login');
  const url = `http://localhost:7777/api/google/auth?redirect_url=${redir}`;

  return (
    <form
      action={async (formData) => {
        'use server';
        redirect(url);
      }}
    >
      <button className="text-white bg-blue-700 p-1 m-2">Log In</button>
    </form>
  );

  // return (
  //   <p className="p-4">
  //     <button
  //       className="text-white bg-blue-700 p-1 m-2"
  //       onClick={(ev) => {
  //         // const redir = encodeURIComponent('http://localhost:9000/secret');
  //         // above if you want to send them elsewhere after logging in
  //         const redir = encodeURIComponent('http://localhost:9000/');
  //         router.push(`http://localhost:7777/api/google/auth?redirect_url=${redir}`);
  //       }}
  //     >
  //       Log In
  //     </button>
  //   </p>
  // );
}
