'use client'
import Link from "next/link";

export default function Home() {

  const getTodos = async () => {
    const response = await fetch("/api/todo")
    const data = await response.json()
    console.log(data);
  }

  return (
   <div className="marketing-page h-[80vh] w-100% flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Get started
      </h1>
      <h2 className="text-2xl mt-2 tracking-tight font-bold"> by adding your first todo</h2>
      <Link href="/create-todo"><button className="mt-6 bg-pink-600 text-slate-100 p-3 px-4 rounded-full shadow-lg" onClick={getTodos}>Let's add a todo</button></Link>
   </div>
  );
}
