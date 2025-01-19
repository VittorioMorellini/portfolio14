import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import { categories } from '@/public/data/category';
import Image from 'next/image';
import { PowerIcon, UserIcon, IdentificationIcon } from '@heroicons/react/24/outline';
//import { getServerSession } from 'next-auth';
//import { options } from '@/app/api/auth/[...nextauth]/options';

async function DesktopNavBar() {
    
    //const session = await getServerSession(options)
    //console.log({session})
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
                        </ul>
                        {/*session ? (
                            <ul className='flex pt-4'>
                                <li>
                                    <div className="flex pr-4 pl-3 text-black">
                                        <UserIcon className="w-6" />
                                        <div>{session?.user?.name}</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/api/auth/signout?callbackUrl=/" className="flex pr-4 pl-3 text-black hover:underline">
                                        <PowerIcon className="w-6" />
                                        <div>Sign Out</div>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className='flex pt-4'>
                                <li>
                                    <Link href="/api/auth/signin?callbackUrl=/" className="flex pr-4 pl-3 text-black hover:underline">
                                        <UserIcon className="w-6" />
                                        <div>Sign In</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/api/auth/signin?callbackUrl=/" className="flex pr-4 pl-3 text-black hover:underline">
                                        <IdentificationIcon className="w-6" />
                                        <div>Register</div>
                                    </Link>
                                </li>
                            </ul>
                        )*/}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DesktopNavBar;
