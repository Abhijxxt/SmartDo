import Link from "next/link";
import AboutPage from "../about/page";

export default function Navbar() {
    return(
        <header className="h-16 w-100% bg-blue-300 flex items-center justify-between shadow-sm mb-4">
            <div className="title-container ml-16">
                <h2 className="text-2xl font-bold"><Link href="/">Todo</Link></h2>
                <p className="text-sm text-slate-800">So that you are up to date</p>
            </div>
            <div className="links-and-account-container mr-16 flex justify-between items-center">
                <div className="links-container m-8">
                    <Link href="/home" className="mr-4 hover:font-bold transition-all">Home</Link>
                    <Link href="/about" className="mr-4 hover:font-bold transition-all">About</Link>
                </div>
                <div className="account-container flex justify-center items-center ml-4">
                    <p>Username</p>
                    <button className="bg-blue-950 text-white p-1 rounded-sm ml-4 hover:bg-amber-300 transition-all">↓</button>
                </div>
            </div>
        </header>
    )
}