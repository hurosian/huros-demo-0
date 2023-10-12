import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import hurosLogo from "public/HUROS_Logo.svg";
import twitterXIcon from "public/X_svg.svg";
import discordIcon from "public/Discord_svg.svg";
import linkedInIcon from "public/Linkedin_svg.svg";

export default function Home() {
  return (
    <div className="md:h-screen bg-huros-bg-gray-1">
      <header className=" h-56 md:h-2/6">
        <div className=" flex item-center justify-center w-full relative bg-huros-bg-gray-1 h-full">
          <Image
            src="/HUROS_Logo.svg"
            fill
            alt="Huros Logo"
            quality={50}
            priority={true}
            className=" object-contain fill-white"
          />
        </div>
      </header>
      <main className="my-8 h-fit md:h-3/6 md:my-0 ">
        <div className={`${styles.titleGrid}`}>
          <Link href="./content/about">
            <h3 className={` ${styles.title}`}>ABOUT</h3>
          </Link>
          <Link href="./content/platform">
            <h3 className={` ${styles.title}`}>PLATFORM</h3>
          </Link>
          <Link href="./content/team">
            <h3 className={` ${styles.title}`}>TEAM</h3>
          </Link>

          <Link href="./content/timeline">
            <h3 className={` ${styles.title}`}>TIMELINE</h3>
          </Link>
          <Link href="./content/faqs">
            <h3 className={` ${styles.titleLast}`}>FAQS</h3>
          </Link>
        </div>
      </main>
      <footer className="h-fit md:h-1/6">
        <div className=" px-16 md:px-32 flex flex-col justify-center bg-huros-bg-gray-1 text-white h-full">
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
