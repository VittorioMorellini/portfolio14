import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import { categories } from '@/public/data/category';
import Image from 'next/image';
//import { useRecoilState } from 'recoil';
//import { titleAtom } from '@/recoil/title';

function DesktopNavBar() {
    //const [,setTitle] = useRecoilState<string>(titleAtom);
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
                                            <Link prefetch={false} href={category.url} passHref
                                                    target={"_blank"}
                                                    rel={category.external && "noreferrer"}
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
                        <div className="flex px-4 pt-4 justify-between">
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
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DesktopNavBar;