"use client"
import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@mui/material';
import { categories } from '@/public/data/category';
import { useRecoilState } from 'recoil';
import { titleAtom } from '@/recoil/title';

function DesktopNavBar() {
    const [,setTitle] = useRecoilState<string>(titleAtom);
    const router = useRouter();

    return (
        <>
            <nav className="py-2.5 bg-gradient-to-tr from-cyan-100 to-cyan-500 pr-2 pl-2">
                <div className="w-full flex justify-between items-center">
                    <div className='flex w-auto items-center'>
                        <Link href="/">
                            <img src='/images/portfolio.png' height={30} alt="Vittorio's portfolio"/>
                        </Link>
                        <span className="font-bold text-4xl pl-4" style={{flex: '1 0 0%'}}>Vittorio Morellini</span>
                    </div>
                    <div className="flex" id="navbar-default">
                        <ul className="flex pt-4">
                            {categories?.map((category, index) => (
                                <li key={category.id}>                                    
                                    {category.external ?
                                        <div key={index} className="px-4 hover:underline">                                    
                                            <Link href={category.url} passHref
                                                    target={"_blank"}
                                                    rel={category.external && "noreferrer"}
                                                >
                                                    {category.name}
                                            </Link>
                                        </div>
                                    :
                                    <button className="pr-4 pl-3 text-black hover:underline" onClick={() => {
                                        setTitle(category.title);
                                        router.push(category.url)
                                    }}>
                                        {category.description}
                                    </button>
                                    }
                                </li>
                            ))}
                        </ul>
                        <div className="flex px-4 pt-4 justify-between">
                            <a href="https://twitter.com/VittoMorellini" target="_blank" rel="noreferrer">
                                <Icon className="h-8 w-8 hover:text-gray-400">
                                    <BsTwitter />
                                </Icon>
                            </a>
                            <a href="https://www.linkedin.com/in/vittorio-morellini-0325b620" target="_blank" rel="noreferrer">
                                <Icon className="h-8 w-8 hover:text-gray-400">
                                    <BsLinkedin />
                                </Icon>
                            </a>
                            <a href="https://github.com/vittoriomorellini" target="_blank" rel="noreferrer">
                                <Icon className="h-8 w-8 hover:text-gray-400">
                                    <BsGithub />
                                </Icon>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DesktopNavBar;