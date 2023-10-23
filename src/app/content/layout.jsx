"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
// import { Disclosure, Menu, Transition } from '@headlessui/react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Cross as Hamburger } from "hamburger-react";

import twitterXIcon from "public/X_svg.svg";
import discordIcon from "public/Discord_svg.svg";
import linkedInIcon from "public/Linkedin_svg.svg";
import HurosLogo from "public/HUROS_Logo.svg";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  const pathname = usePathname();
  let [navigation, setNavigation] = useState([
    { name: "About", href: "./about", current: false },
    { name: "Platform", href: "./platform", current: false },
    { name: "Team", href: "./team", current: false },
    { name: "Timeline", href: "./timeline", current: false },
    { name: "FAQs", href: "./faqs", current: false },
  ]);
  let [mobileNavigationOverlay, setMobileNavigationOverlay] = useState(false);

  const changeOverlayState = () => {
    setMobileNavigationOverlay(!mobileNavigationOverlay);
  };

  useEffect(() => {
    console.log(pathname);
    let newNavigation = navigation.map((obj) => {
      if (pathname.includes(obj.name.toLowerCase())) {
        return { ...obj, current: true };
      }
      return { ...obj, current: false };
    });
    setNavigation(newNavigation);
  }, [pathname]);

  return (
      <div className=" bg-huros-bg-gray-1 bg-opacity-70">
        <header className="">
          <div className="h-32 md:h-48 flex item-center justify-center w-full relative">
            <Link href="/">
              <Image
                src={HurosLogo}
                fill
                alt="Huros Logo"
                quality={50}
                priority={true}
                className=" object-contain"
              />
            </Link>
          </div>
          <nav>
            {/* DESKTOP NAVBAR */}
            <section className="hidden md:grid grid-cols-5 text-white text-center px-32">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <h3
                    className={classNames(
                      item.current
                        ? " text-huros-h2"
                        : "text-gray-400 hover:text-white",
                      ""
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </h3>
                </Link>
              ))}
            </section>
            {/* MOBILE NAVBAR */}
            <section>
              <div className="md:hidden absolute top-0 right-0 -translate-x-10 translate-y-12 z-20">
                <Hamburger
                  toggled={mobileNavigationOverlay}
                  toggle={changeOverlayState}
                  color="white"
                  label="Show Menu"
                />
              </div>
              <div
                className={`${styles.overlay} ${
                  mobileNavigationOverlay ? "block" : "hidden"
                } `}
                onClick={() => changeOverlayState()}
              >
                <div className="flex flex-col justify-center items-center h-full">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <h2
                        className={classNames(
                          item.current
                            ? " text-huros-h2"
                            : "text-gray-400 hover:text-white",
                          ["py-6"]
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </nav>
        </header>
        <main className=" px-8 py-8 md:px-16 md:py-16 min-h-fit  border-gray-700">
          {children}
        </main>
        <footer className=" h-48">
          <div className="px-16 md:px-32 flex flex-col justify-center bg-huros-bg-gray-1 text-white h-full">
            <div className="text-white flex justify-center item-center h-10">
              <a
                href="https://discord.com/invite/UNJfhU3JVP"
                target="_blank"
                className="w-12 relative mx-2"
              >
                <Image
                  priority
                  src={discordIcon}
                  alt="Join our Discord Server"
                  fill={true}
                  className="w-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/huros-io/about/"
                target="_blank"
                className="w-12 relative mx-2"
              >
                <Image
                  priority
                  src={linkedInIcon}
                  alt="Connect with us on LinkedIn"
                  fill={true}
                  className="w-full"
                />
              </a>
              <a
                href="https://twitter.com/huros_io"
                target="_blank"
                className="w-12 relative mx-2"
              >
                <Image
                  priority
                  src={twitterXIcon}
                  alt="Follow us on X"
                  fill={true}
                  className="w-full"
                />
              </a>
            </div>
            <p className="text-center">
              Copyright © 2023 Huros - All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}
