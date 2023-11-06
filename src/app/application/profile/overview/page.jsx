"use client";
import React, { useState } from "react";
import Image from "next/image";

import AudemarsPiguet from "public/demo/portfolio/Audemars Piguet Royal Oak.png";
import PatekPhilippe from "public/demo/portfolio/Patek Philippe Nautilus.png";
import RolexSubmariner from "public/demo/portfolio/Rolex Submariner.png";

export default function Overview({}) {
  const [data, setData] = useState({
    profile: {
      username: "Chloe P",
      wallet: "x26...CD",
      email: "chloe@example.com",
    },
    subscription: {
      newsletter: "New release",
      marketing: "watchlist",
      events: [],
    },
    portfolio: [
      {
        brand: "Patek Philippe",
        name: "Nautilus",
        ref: "5711/1A",
        image:
          "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
      },
      {
        brand: "Rolex",
        name: "Submariner",
        ref: "116610LN",
        image:
          "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
      },
      {
        brand: "Audemars Piguet",
        name: "Royal Oak",
        ref: "15400",
        image:
          "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
      },
    ],
    watchlist: [
      {
        brand: "Patek Philippe",
        name: "Nautilus",
        ref: "5711/1A",
        image:
          "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
        eonPrice: 1045.0,
      },
      {
        brand: "Rolex",
        name: "Submariner",
        ref: "116610LN",
        image:
          "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
        eonPrice: 132.0,
      },
      {
        brand: "Audemars Piguet",
        name: "Royal Oak",
        ref: "15400",
        image:
          "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
        eonPrice: 275.0,
      },
    ],
  });
  return (
    <section className="">
      <div className=" grid grid-flow-row grid-cols-2 gap-10">
        <section className=" border border-huros-1 p-5 w-full h-full">
          <div className=" grid grid-flow-col mb-4">
            <h3 className=" text-huros-1">Profile</h3>
            <p className=" text-right my-auto text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
          <div className="grid grid-flow-col grid-cols-3">
            <div>
              <p className=" text-gray-600">Username</p>
              <p className=" text-gray-600">Wallet</p>
              <p className=" text-gray-600">Email</p>
            </div>
            <div>
              <p>{data.profile.username}</p>
              <p>{data.profile.wallet}</p>
              <p>{data.profile.email}</p>
            </div>
          </div>
        </section>
        <section className=" border border-huros-1 p-5 w-full h-full">
          <div className=" grid grid-flow-col mb-4">
            <h3 className=" text-huros-1">Portfolio</h3>
            <p className=" text-right my-auto text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
          <div className=" grid grid-cols-2  gap-2">
            {data.portfolio.map((item, index) => (
              <div className="w-full grid grid-flow-col relative h-32 gap-x-4" key={index}>
                <div className="relative border border-huros-1  w-20 h-20">
                  <Image
                    src={item.image}
                    quality={50}
                    alt={item.brand + item.name}
                    fill
                    className="relative object-fit"
                  />
                </div>
                <div>
                  <p>
                    {item.brand} {item.name}
                  </p>
                  <p>Ref: {item.ref}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className=" border border-huros-1 p-5 w-full h-96">
          <div className=" grid grid-flow-col mb-4">
            <h3 className=" text-huros-1">Watchlist</h3>
            <p className=" text-right my-auto text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
        </section>
        <section className=" border border-huros-1 p-5 w-full h-full">
          <div className=" grid grid-flow-col mb-4">
            <h3 className=" text-huros-1">Subscription</h3>
            <p className=" text-right my-auto text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
          <div className=" grid grid-flow-col grid-cols-3">
            <div className="">
              <p className=" text-gray-600">Newsletter</p>
              <p className=" text-gray-600">Marketing</p>
              <p className=" text-gray-600">Events</p>
            </div>
            <div>
              <p>{data.subscription.newsletter}</p>
              <p>{data.subscription.marketing}</p>
              <p>{data.subscription.events}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
