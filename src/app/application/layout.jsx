import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import HurosLogo from "public/logos/logo-huros.svg";
import TwitterXLogo from "public/demo/logos/x.png";
import TelegramLogo from "public/demo/logos/telegram.png";
import TiktokLogo from "public/demo/logos/tiktok.png";
import LinkedinLogo from "public/logos/logo-linkedin.svg";

export default function ApplicationLayout({ children }) {
  return (
    <div className=" bg-black  min-h-screen">
      <header className="">
        <section className=" h-32 grid grid-flow-col grid-cols-7 border-b border-b-huros-1 relative">
          <div className="col-span-1" />

          <p className=" m-auto col-span-2">
            <Link href={"/application/vaultcollection"}>Vault Collection </Link>
          </p>

          <div className=" h-auto">
            <Image
              src={HurosLogo}
              quality={75}
              alt="Huros Logo"
              className=" h-32 m-auto"
            />
          </div>
          <p className=" m-auto col-span-2">Marketplace</p>
          <div className="">
            <div className=" h-full m-auto grid grid-flow-col grid-cols-2">
              <EnvelopeIcon className=" m-auto w-10 stroke-huros-1 stroke-1" />
              
              <Link className=" m-auto w-10 " href="/application/profile/overview">
              <UserCircleIcon className="stroke-huros-1 stroke-1" />
              </Link>
            </div>
          </div>
        </section>
      </header>
      <section className="min-h-screen py-10 px-10">{children}</section>
      <footer className=" h-56">
        <section className="m-20 h-32 grid grid-flow-col grid-cols-3">
          <section id="more_information" className=" m-auto">
            <div className="grid grid-flow-col grid-cols-2">
              <div>
                <p className=" text-sm">About</p>
                <p className=" text-sm">Platform</p>
                <p className="  text-sm">Team</p>
                <p className="  text-sm">Timeline</p>
                <p className="  text-sm">FAQs</p>
              </div>
              <div>
                <p className="  text-sm">Terms of use</p>
                <p className="  text-sm">Privacy policy</p>
                <p className="  text-sm">Whitepaper</p>
              </div>
            </div>
          </section>
          <section id="connect_with_us" className="mx-auto">
            <div className="">
              <p className=" text-sm text-center"> Connect with us</p>
              <div className=" flex flex-row gap-x-3">
                <Image src={TwitterXLogo} alt="Twitter" className=" w-10" />
                <Image src={TelegramLogo} alt="Telegram" className=" w-10" />
                <Image src={TiktokLogo} alt="Tiktok" className=" w-10" />
                <Image
                  src={LinkedinLogo}
                  alt="Twitter Logo"
                  className=" w-10"
                />
              </div>
            </div>
          </section>
          <section id="huros_logo">
            <div className=" h-auto">
              <Image
                src={HurosLogo}
                quality={75}
                alt="Huros Logo"
                className=" h-32 m-auto"
              />
            </div>
          </section>
        </section>
      </footer>
    </div>
  );
}
