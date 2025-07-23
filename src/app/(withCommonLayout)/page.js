"use client"

import { useRouter } from "next/navigation";


const HomePages = () => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/dashboard')
  }
  return (
    <div className='text-center pt-10'> 
      <h1 className='text-2xl text-center pt-20'>Hello, Jamil! </h1>
      <h2 className='h2 text-center pt-10'>This is Home Page!!!!</h2>
      
      <button onClick={handleNavigation} className='text-center pt-10'>Dashboard</button>
    </div>
  );
};

export default HomePages;