'use client'
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import oggle from "@/public/toggle.png"
import { usePathname, useRouter } from 'next/navigation';
import { useState,} from 'react';
const routes = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    const router = useRouter();
    const handleClick=(post:any)=> {
        console.log(post);
        if (active===post) setActive("");
        else setActive(post);
    };

    return (

        <div className='flex w-full  py-5 top-0 z-20 bg-red-950' >
{/* logo image */}
            <div className='w-full flex  justify-between  max-w-7xl mx-auto'>
                <Link href="" className=' flex gap-2'>
                    <Image src={logo} width={50} height={50} alt='logo' className=' object-contain ' />
                    <p className='hover:text-yellow-700 text-white text-[18px] font-bold cursor-pointer flex pt-3'>Rahul <span className='flex'>|web developer|</span></p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {routes.map((post) => (
                        <li key={post.id}
                            className={`${active === post.title ? "text-white" : "text-green-400"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(post.title)}>
                            <p>{post.title}</p>
                        </li>
                    ))}
                </ul>
{/* toggler image */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image src={toggle ? logo : oggle} width={50} height={50} alt='oggle'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex  flex-col gap-4 justify-end items-start'>
                            {routes.map((post) => (
                                <li key={post.id}
                                    className={`${active === post.title ? "text-blue-500 font-bold" : "text-green-400"} font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(post.title); }}>
                                    <p>{post.title}</p>
                                </li>
                            ))}
                        </ul>
                     </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar