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
          "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
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
          "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
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
        <section className=" h-full w-full border border-huros-1 p-5">
          <div className=" mb-4 grid grid-flow-col">
            <h3 className=" text-huros-1">Profile</h3>
            <p className=" my-auto text-right text-sm text-gray-400 hover:text-huros-1">
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
        <section className=" h-full w-full border border-huros-1 p-5">
          <div className=" mb-4 grid grid-flow-col">
            <h3 className=" text-huros-1">Portfolio</h3>
            <p className=" my-auto text-right text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
          <div className=" grid grid-cols-2  gap-2">
            {data.portfolio.map((item, index) => (
              <div
                className="relative grid h-32 w-full grid-flow-col gap-x-4"
                key={index}
              >
                <div className="relative h-20 w-20  border border-huros-1">
                  <Image
                    src={item.image}
                    quality={50}
                    alt={item.brand + item.name}
                    fill
                    className="object-fit relative"
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
        <section className=" h-96 w-full border border-huros-1 p-5">
          <div className=" mb-4 grid grid-flow-col">
            <h3 className=" text-huros-1">Watchlist</h3>
            <p className=" my-auto text-right text-sm text-gray-400 hover:text-huros-1">
              View more
            </p>
          </div>
        </section>
        <section className=" h-full w-full border border-huros-1 p-5">
          <div className=" mb-4 grid grid-flow-col">
            <h3 className=" text-huros-1">Subscription</h3>
            <p className=" my-auto text-right text-sm text-gray-400 hover:text-huros-1">
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
