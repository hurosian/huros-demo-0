"use client";

import Image from "next/image";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Watchlist({}) {
  const data = [
    {
      id: 1,
      image_source:
      "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
      brand: "Patek Phillipe",
      series: "Nautilus White Dial",
      model_number: "5711/1A-011",
      eon_price: 1_045,
    },
    {
      id: 2,
      image_source:
        "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
      brand: "Rolex",
      series: "Submariner",
      model_number: "116610LN",
      eon_price: 132,
    },
    {
      id: 3,
      image_source:
        "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
      brand: "Audemars Piguet",
      series: "Royal Oak White Dial",
      model_number: "1540",
      eon_price: 275,
    },
  ];

  const [watchlist, setWatchlist] = useState(data);

  const handleClick = (id) => {
    const newWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(newWatchlist);
  };

  return (
    <section id="watchlist">
      <div className="grid grid-cols-3 gap-10">
        <WatchlistBox watchlist={watchlist} handleClick={handleClick} />
      </div>
    </section>
  );
}

const WatchlistBox = ({ watchlist, handleClick }) => {
  return (
    <>
      {watchlist.map((item) => (
        <div
          key={item.id}
          className="border border-huros-1"
          title={item.brand + " " + item.series}
        >
          <div className="flex justify-end">
            <button
              type="button"
              title="Remove from the watchlist"
              className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              onClick={() => handleClick(item.id)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center p-3">
            <div className="relative mb-2">
              <Image
                src={item.image_source}
                className="object-fit"
                width={200}
                height={200}
                alt={item.series}
              />
            </div>
            <label>
              {item.brand + " "}
              {item.series.length > 10
                ? item.series.slice(0, 10) + "..."
                : item.series}
            </label>
            <label>Ref: {item.model_number}</label>
            <label>
              <br />
              Price per EON
            </label>
            <label className="text-lg text-huros-1">
              {item.eon_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "code",
              })}
            </label>

            <div className="mt-3 flex w-full justify-between">
              <button
                title="Remove from the watchlist"
                className="inline-flex w-full justify-center rounded-md bg-[#201c0f] pt-1 font-['Avenir'] text-slate-300 hover:bg-huros-1 hover:text-black"
                onClick={() => handleClick(item.id)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
