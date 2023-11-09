import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import { categories } from '@/public/data/category';
import Image from 'next/image';
import { signOut, auth } from '@/auth';
import { PowerIcon, UserIcon } from '@heroicons/react/24/outline';


async function DesktopNavBar() {
    
    const session = await auth()

    return (
        <>
            <nav className="py-2.5 bg-gradient-to-tr from-cyan-100 to-cyan-500 pr-2 pl-2">
                <div className="w-full flex justify-between items-center">
                    <div className='flex w-auto items-center'>
                        <Link href="/">
                            <Image src='/images/portfolio.png' height={30} width={30} alt="Vittorio's portfolio"/>
                        </Link>
                        <span className="font-bold text-4xl pl-4 flex flex-1">Vittorio Morellini</span>
                    </div>
                    <div className="flex" id="navbar-default">
                        <ul className="flex pt-4">
                            {categories?.map((category, index) => (
                                <li key={category.id}>                                    
                                    {category.external ?
                                        <div key={index} className="px-4 hover:underline">                                    
                                            <Link href={category.url} passHref
                                                    target={"_blank"}
                                                    rel="noreferrer noopener"
                                                >
                                                    {category.name}
                                            </Link>
                                        </div>
                                    :
                                    <Link prefetch={false} className="pr-4 pl-3 text-black hover:underline" href={category.url} passHref rel="noreferrer noopener">
                                        {category.description}
                                    </Link>
                                    }
                                </li>
                            ))}
                        </ul>
                        <ul className='flex pt-4'>
                            <li>
                                <div className="flex px-4 justify-between pt-1">
                                <Link href="https://twitter.com/VittoMorellini" target="_blank" className="h-8 w-8 hover:text-gray-400" rel="noopener noreferrer" title='Twitter'>
                                    <BsTwitter />
                                </Link>
                                <Link className="h-8 w-8 hover:text-gray-400" href="https://www.linkedin.com/in/vittorio-morellini-0325b620" target="_blank" rel="noopener noreferrer" title="Linkedin">
                                    <BsLinkedin />
                                </Link>
                                <Link className="h-8 w-8 hover:text-gray-400" href="https://github.com/vittoriomorellini" target="_blank" rel="noopener noreferrer" title='Github'>
                                    <BsGithub />
                                </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex pr-4 pl-3 text-black">
                                    <UserIcon className="w-6" />
                                    <div>{session?.user?.name}</div>
                                </div>
                            </li>
                        </ul>
                        <form action={async () => {
                            'use server';
                            await signOut();
                        }}
                        >
                            {/* <button className="flex grow items-baseline gap-2 rounded-md text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:px-3"> */}
                            <ul className='flex pt-4'>
                                <li>
                                    <button className="flex pr-4 pl-3 text-black hover:underline">
                                        <PowerIcon className="w-6" />
                                        <div>Sign Out</div>
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DesktopNavBar;
