import React from "react";

import BgVault from "public/backgrounds/bg-vault.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function VaultCollection() {
  const data = {
    newestCollection: [
      {
        id: 1,
        brand: "Patek Philippe",
        name: "Nautilus",
        ref: "5711/1A",
        image:
          "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
        eonPrice: 1045.0,
      },
      {
        id: 2,
        brand: "Rolex",
        name: "Submariner",
        ref: "116610LN",
        image:
          "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
        eonPrice: 132.0,
      },
      {
        id: 3,
        brand: "Audemars Piguet",
        name: "Royal Oak",
        ref: "15400",
        image:
          "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
        eonPrice: 275.0,
      },
      {
        id: 4,
        brand: "Rolex",
        name: "Daytona Panda",
        ref: "116500LN",
        image:
          "https://images.montro.com/e8zULtWf4_AYa1JFGnT20yI32ZA=/600x0/https%3A%2F%2Fchronexttime.imgix.net%2FV%2F4%2FV47524%2FV47524_1.png",
        eonPrice: 407.0,
      },
    ],
    watches: [
      {
        id: 1,
        brand: "Patek Philippe",
        name: "Nautilus",
        ref: "5711/1A",
        image:
          "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
        eonPrice: 1045.0,
      },
      {
        id: 2,
        brand: "Rolex",
        name: "Submariner",
        ref: "116610LN",
        image:
          "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
        eonPrice: 132.0,
      },
      {
        id: 3,
        brand: "Audemars Piguet",
        name: "Royal Oak",
        ref: "15400",
        image:
          "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
        eonPrice: 275.0,
      },
      {
        id: 4,
        brand: "Rolex",
        name: "Daytona Panda",
        ref: "116500LN",
        image:
          "https://images.montro.com/e8zULtWf4_AYa1JFGnT20yI32ZA=/600x0/https%3A%2F%2Fchronexttime.imgix.net%2FV%2F4%2FV47524%2FV47524_1.png",
        eonPrice: 407.0,
      },
      {
        id: 5,
        brand: "Example 5",
        name: "Example 5",
        ref: "116500LN",
        image:
          "https://images.montro.com/e8zULtWf4_AYa1JFGnT20yI32ZA=/600x0/https%3A%2F%2Fchronexttime.imgix.net%2FV%2F4%2FV47524%2FV47524_1.png",
        eonPrice: 450.0,
      },
      {
        id: 6,
        brand: "Example 6",
        name: "Example 6",
        ref: "116500LN",
        image:
          "https://images.montro.com/e8zULtWf4_AYa1JFGnT20yI32ZA=/600x0/https%3A%2F%2Fchronexttime.imgix.net%2FV%2F4%2FV47524%2FV47524_1.png",
        eonPrice: 1000.0,
      },
    ],
    brands: [
      {
        id: 1,
        name: "A. Lange & Söhne",
      },
      {
        id: 2,
        name: "Audemars Piguet",
      },
      {
        id: 3,
        name: "Cartier",
      },
      {
        id: 4,
        name: "Franck Muller",
      },
      {
        id: 5,
        name: "Harry Winston",
      },
      {
        id: 6,
        name: "Audemars Piguet",
      },
      {
        id: 7,
        name: "MB&F",
      },
      {
        id: 8,
        name: "Omega",
      },
      {
        id: 9,
        name: "Patek Phillipe",
      },
      {
        id: 10,
        name: "Richard Mille",
      },
      {
        id: 11,
        name: "Vacheron Constantin",
      },
    ],
  };
  return (
    <div>
      <section id="page-banner" className="relative mb-16 h-80 min-h-fit">
        <div
          className="absolute h-full w-full bg-cover"
          style={{ backgroundImage: `url(${BgVault.src})` }}
        />
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-40" />
        <div className="absolute inset-0 z-20 flex h-full w-full item px-10s-center">
          <h2 className="text-huros-1">Huros Vault Collection</h2>
        </div>
      </section>
      <section id="newest-collection" className="mb-16">
        <h3 className=" mb-4">Newest Collection</h3>
        <div className=" pb-4 scrollbar flex flex-row gap-x-10 overflow-x-scroll ">
          {data.newestCollection.map((item) => (
            <NewestWatch
              key={item.id}
              image={item.image}
              name={item.name}
              brand={item.brand}
              watchRef={item.ref}
              eonPrice={item.eonPrice}
              watchId={item.id}
            />
          ))}
        </div>
      </section>
      <section id="all-watches">
        <div className=" grid grid-cols-10">
          <section id="watch-filter" className=" col-span-2">
            <h3 className=" mb-4">All Watches</h3>
            <div className="mb-2">
              <h4 className=" text-huros-1">Sort By</h4>
              <section id="sort-by" className="mb-2">
                <input
                  type="radio"
                  className=" mb-4 mr-2"
                  id="high_to_low"
                  name="sortWatches"
                  value="descending"
                />
                <label htmlFor="high_to_low" className=" text-white">
                  Price: high to low
                </label>
                <br />
                <input
                  type="radio"
                  className=" mb-4  mr-2"
                  id="low_to_high"
                  name="sortWatches"
                  value="ascending"
                />
                <label htmlFor="low_to_high" className=" text-white">
                  Price: low to high
                </label>
                <br />
                <input
                  type="radio"
                  className=" mb-4 mr-2"
                  id="newest"
                  name="sortWatches"
                  value="newest"
                />
                <label htmlFor="newest" className=" text-white">
                  Newest
                </label>
              </section>
              <section id="brands">
                <h3 className=" text-huros-1">Brands</h3>
                {data.brands.map((item) => (
                  <BrandCheckbox
                    value={item.id}
                    key={item.id}
                    id={item.id}
                    label={item.name}
                  />
                ))}
              </section>
            </div>
          </section>
          <section id="all-watches-list" className="col-span-8">
            <div className=" flex max-w-full flex-row flex-wrap gap-6">
              {data.watches.map((item) => (
                <WatchItem
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  watchRef={item.ref}
                  eonPrice={item.eonPrice}
                  watchId={item.id}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function BrandCheckbox({ value, id, label }) {
  return (
    <>
      <input className="mb-3 mr-2" type="checkbox" value={value} id={id} />
      <label className=" text-white" htmlFor={id}>
        {label}
      </label>
      <br />
    </>
  );
}

function WatchItem({ image, name, brand, watchRef, eonPrice, watchId }) {
  return (
      <Link href={`/application/vaultcollection/${watchId}`} className={`${styles.hoverable} h-76 flex w-52 cursor-pointer flex-col items-center pb-1`}>
        <div className="relative mb-2 h-52 w-52 border border-huros-1">
          <Image src={image} fill className=" object-fit p-2" />
        </div>
        <p className="text-md">{name}</p>
        <p className="text-sm">{brand}</p>
        <p className="mb-2 text-sm">{watchRef}</p>
        <p className=" text-huros-1">
          <span className=" text-sm">USD</span> {eonPrice.toFixed(2)}
          <span className="text-sm">/Eon</span>
        </p>
        <button className=" bg-huros-1 px-6">
          <p className="text-sm text-black ">Buy</p>
        </button>
      </Link>
  );
}

function NewestWatch({ image, name, brand, watchRef, eonPrice, watchId }) {
  return (
      <Link href={`/application/vaultcollection/${watchId}`} className={`${styles.hoverable} h-76 flex w-72 cursor-pointer flex-col items-center pb-3`}>
        <div className="relative mb-2 h-72 w-72 border border-huros-1">
          <Image src={image} fill className=" object-fit p-2" />
        </div>
        <p className="text-md">{name}</p>
        <p className="text-sm">{brand}</p>
        <p className="mb-2 text-sm">{watchRef}</p>
        <p className=" text-huros-1">
          <span className=" text-sm">USD</span> {eonPrice.toFixed(2)}
          <span className="text-sm">/Eon</span>
        </p>
        <button className=" bg-huros-1 px-6">
          <p className="text-sm text-black ">Buy</p>
        </button>
      </Link>
  );
}
