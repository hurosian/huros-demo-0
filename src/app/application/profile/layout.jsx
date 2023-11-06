"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";


export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  let [navigation, setNavigation] = useState([
    { name: "Overview", href: "./overview", current: false },
    { name: "Profile", href: "./profile", current: false },
    { name: "Portfolio", href: "./portfolio", current: false },
    { name: "Watchlist", href: "./watchlist", current: false },
    { name: "Subscription", href: "./subscription", current: false },
    { name: "Activities", href: "./activities", current: false },
    { name: "Help", href: "./help", current: false },
  ]);

  useEffect(() => {
    let newNavigation = navigation.map((obj) => {
      if (pathname.substring(pathname.lastIndexOf("/") + 1).includes(obj.name.toLowerCase())) {
        return { ...obj, current: true };
      }
      return { ...obj, current: false };
    });
    setNavigation(newNavigation);
  }, [pathname]);

  return (
    <>
      <section className=" grid grid-flow-col grid-cols-4">
        <div className="mx-auto">
          <div className="grid grid-flow-row gap-y-4">
            <h3 className=" text-huros-1">MY HUROS</h3>
            {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <h4
                    className={classNames(
                      item.current
                        ? " text-huros-1"
                        : "text-gray-400 hover:text-white",
                      ""
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </h4>
                </Link>
              ))}
            <button className=" bg-huros-1 rounded-sm ">
              <p className=" text-huros-2">Log out</p>
            </button>
          </div>
        </div>
        <div className=" col-span-3 mx-10">
          <h2 className=" text-huros-1">{pathname.substring(pathname.lastIndexOf("/") + 1)}</h2>
          {children}</div>
      </section>
    </>
  );
}
