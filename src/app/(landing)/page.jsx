"use client";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import styles from "./page.module.css";
import hurosLogo from "public/logos/logo-huros.svg";
import twitterXIcon from "public/logos/logo-x.svg";
import discordIcon from "public/logos/logo-discord.svg";
import linkedInIcon from "public/logos/logo-linkedin.svg";
import googleIcon from "public/demo/logos/google.png";
import facebookIcon from "public/demo/logos/facebook.png";
import appleIcon from "public/demo/logos/apple.png";

export default function Home() {
  const [loginOverlay, setLoginOverlay] = useState(false);

  const changeOverlayState = () => {
    setLoginOverlay(!loginOverlay);
  };

  return (
    <div className="relative">
      {loginOverlay ? (
        <section className="absolute z-30">
          <div className=" flex items-center justify-center min-h-screen h-full w-screen bg-black bg-opacity-75 p-10">
            <section className=" py-4 px-8 w-2/3 bg-black border border-huros-1 rounded-sm">
              <div className="grid grid-flow-col">
                <div className="w-full my-auto float-left">
                  <Image
                    src={hurosLogo}
                    alt="Huros Logo"
                    quality={50}
                    priority={true}
                    className="relative object-fit fill-white w-28"
                  />
                </div>
                <div className=" m-auto w-full">
                  <XMarkIcon
                    className=" h-10 stroke-huros-bg-gold-1 float-right pr-10 cursor-pointer"
                    color="white"
                    onClick={changeOverlayState}
                  />
                </div>
              </div>
              <div className="mb-20">
                <h3 className=" text-huros-1">Sign In</h3>
                <p>Your blockchain wallet in one-click</p>
              </div>
              <div className=" flex flex-col w-full items-center gap-10">
                <div>
                  <p className="mb-7 text-center">Continue with</p>
                  <div className=" flex flex-row gap-x-8 mb-8">
                    <Link href="./application/profile/overview">
                    <Image
                      src={googleIcon}
                      alt="Google Icon"
                      quality={100}
                      className=" w-10"
                    />
                    </Link>

                    <Image
                      src={appleIcon}
                      alt="Apple Icon"
                      quality={100}
                      className=" w-9 opacity-50"
                    />
                    <Image
                      src={twitterXIcon}
                      alt="Twitter X Icon"
                      quality={100}
                      className=" w-10 opacity-50"
                    />
                    <Image
                      src={facebookIcon}
                      alt="Facebook Icon"
                      quality={100}
                      className=" w-10 opacity-50"
                    />
                  </div>
                  <p className=" text-xs">
                    We do not store any data related to your social logins
                  </p>
                </div>
                <div className="opacity-50">
                  <p>Email</p>
                  <input
                    type="text"
                    className="w-80 border border-huros-1 rounded-md bg-transparent px-1 py-2 mb-3"
                    placeholder="name@example.com"
                    disabled
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-80 border border-huros-1 rounded-md bg-huros-1 px1 py-2"
                      disabled
                    >
                      <p className=" text-black text-sm">Continue with email</p>
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" text-xs">
                    By creating an account with Huros, you agree to the privacy
                    policy and to the terms of use*
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}

      <section className="md:h-screen relative">
        <section className=" absolute md:h-screen z-20 bg-black bg-opacity-50 bg-gradient-to-b from-huros-bg-gray-1 from-25% to-huros-bg-gray-1 to-80% via-transparent via-50%">
          <header className=" h-56 md:h-1/4">
            <div className=" grid grid-flow-col gap-x-14 item-center justify-center w-full relative  h-full ">
              <p className=" m-auto w-48 text-center"></p>
              <div className="w-48 m-auto">
                <Image
                  src={hurosLogo}
                  alt="Huros Logo"
                  quality={50}
                  priority={true}
                  className="relative object-fit fill-white w-auto"
                />
              </div>
              <p className=" m-auto w-48 text-center">
                {" "}
                <button onClick={changeOverlayState}> SIGN UP / LOG IN</button>
              </p>
            </div>
          </header>
          <main className="py-8 h-fit md:h-1/2 md:my-0">
            <div className={`${styles.titleGrid}`}>
              <Link href="./about">
                <h3 className={` ${styles.title}`}>ABOUT</h3>
              </Link>
              <Link href="./platform">
                <h3 className={` ${styles.title}`}>PLATFORM</h3>
              </Link>
              <Link href="./team">
                <h3 className={` ${styles.title}`}>TEAM</h3>
              </Link>

              <Link href="./timeline">
                <h3 className={` ${styles.title}`}>TIMELINE</h3>
              </Link>
              <Link href="./faqs">
                <h3 className={` ${styles.titleLast}`}>FAQS</h3>
              </Link>
            </div>
          </main>
          <footer className="h-fit md:h-1/4">
            <div className=" px-16 md:px-32 flex flex-col justify-center text-white h-full">
              <div className="text-white flex justify-center item-center h-10 mb-2">
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
        </section>
      </section>
    </div>
  );
}
