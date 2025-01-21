"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Container } from "../../app/(components)/container";
import social from "../../public/data/social";
import {categories} from "../../public/data/category";

function Drawer() {
  return (
    <Container
      size="full"
      className="fixed z-10 min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-600"
    >
      <div className="flex flex-col justify-center items-center w-full h-full pt-24">
        <div className="grid gap-6">
          {categories.map((data) => (
            <Link href={data.url} key={data.url}
                className="font-bold text-2xl"
                target={data.external ? "_blank" : "_self"}
              >
                {" "}
                {data.description}{" "}
            </Link>
          ))}
        </div>
        <div className="mt-24">
          {social.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              className="inline-block mr-8"
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              <Icon className="h-6 w-6 hover:text-blue-400" />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}

interface MobileNavBarProps {
    show: boolean,
    onChangeVisibility?: (open: boolean) => void
}
export function MobileNavBar({ show, onChangeVisibility }: MobileNavBarProps) {
  //const [open, setOpen] = useState(show);

  useEffect(() => {
    onChangeVisibility && onChangeVisibility(show);
  }, [show, onChangeVisibility]);

  useEffect(() => {
    //setOpen(show);
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);

  return (
    <>
      <Container size="2xl">
        <div className="w-full pt-5">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-xl font-bold">Vittorio Morellini</Link>
            </div>
            <button onClick={() => onChangeVisibility && onChangeVisibility(!show)}>
              {show ? (
                <IoMdClose className="w-7 h-7" />
              ) : (
                <IoMdMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {show && <Drawer />}
    </>
  );
}