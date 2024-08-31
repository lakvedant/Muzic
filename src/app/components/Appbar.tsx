"use client";
import {signIn, useSession, signOut} from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          Muzic
        </div>
        <div>
          {session.data?.user && <button className='m-2 p-2 bg-blue-400' onClick={() => signOut()}>Logout</button>}
          {!session.data?.user &&<button className='m-2 p-2 bg-blue-400' onClick={() => signIn()}>Signin</button>}
        </div>      
      </div>
    </div>
  )
}

export default Appbar
