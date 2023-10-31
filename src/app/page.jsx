import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import hurosLogo from "public/logos/logo-huros.svg";
import twitterXIcon from "public/logos/logo-x.svg";
import discordIcon from "public/logos/logo-discord.svg";
import linkedInIcon from "public/logos/logo-linkedin.svg";

export default function Home() {
  return (
    <div className="md:h-screen">
        <section className=" absolute md:h-screen z-20 bg-gradient-to-b from-huros-bg-gray-1 from-25% to-huros-bg-gray-1 to-80% via-transparent via-50%">
          <header className=" h-56 md:h-2/6">
            <div className=" flex item-center justify-center w-full relative  h-full">
              <Image
                src={hurosLogo}
                fill
                alt="Huros Logo"
                quality={50}
                priority={true}
                className=" object-contain fill-white"
              />
            </div>
          </header>
          <main className="py-8 h-fit md:h-3/6 md:my-0">
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
            <div className=" px-16 md:px-32 flex flex-col justify-center text-white h-full">
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
        </section>
      </div>

  );
}
