import Image from "next/image";
import React from "react";
import Link from "next/link";

import bgNautilus from "public/demo/backgrounds/bg-nautilus.png";
import styles from "./page.module.css";

export default function VaultCollectionListing({ params }) {
  const data = {
    watch: {
      id: params.id,
      brand: "Patek Philippe",
      name: "Nautilus",
      ref: "5711/1A",
      image:
        "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
      movementType: "Automatic",
      case: "Steel, 40mm",
      dial: "White, No numerals",
      bracelet: "Steel",
      productionYear: 2016,
      condition: "Mint",
      accessories: ["Original box", "Papers"],
      description:
        "The Patek Philippe Nautilus White Dial Ref. 5711/1A-011 is a part of the iconic Nautilus collection, introduced in 1976. Designed by Gerald Genta, this luxury sports watch is celebrated for its elegant yet sporty style and was groundbreaking for its use of stainless steel in high-end watchmaking. The White Dial Ref. 5711/1A-011 continues this legacy, blending timeless design with precision craftsmanship, making it a highly sought-after piece for watch enthusiasts and collectors.",
    },
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
  };
  const blockchainData = {
    owners: [],
    originalListPrice: 104500.0,
    eonPrice: 1045.0,
    eonsAvailable: 100,
    eonsLeft: 100,
  };
  return (
    <div>
      <section
        id="watch-listing-purchase"
        className=" mb-14  grid w-full grid-flow-col grid-cols-2 gap-x-10"
      >
        <section
          id="watch-image"
          className=" flex aspect-square h-full flex-col items-center border border-huros-1"
        >
          <div className=" relative aspect-square h-5/6">
            <Image src={data.watch.image} fill className=" object-contain" />
          </div>
          <div className=" flex h-1/6 flex-row items-center gap-x-3">
            <div className="h-4 w-4 rounded-full bg-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
          </div>
        </section>
        <section id="watch-pricing" className=" m-auto w-full">
          <p className=" text-4xl font-bold">
            {data.watch.brand} {data.watch.name}
          </p>
          <p className=" mb-4 text-3xl">Ref: {data.watch.ref}</p>
          <div className=" flex justify-between">
            <p>Original List Price</p>
            <p>{blockchainData.originalListPrice.toFixed(2)}</p>
          </div>
          <div className=" flex justify-between">
            <p>Per Eon Price</p>
            <p>{blockchainData.eonPrice.toFixed(2)}</p>
          </div>
          <div className=" mb-4 flex justify-between">
            <p>Available Eons</p>
            <p>
              {blockchainData.eonsLeft}
              <span className=" text-xs opacity-50">
                {" "}
                / {blockchainData.eonsAvailable}{" "}
              </span>
            </p>
          </div>
          <p className=" mb-14 text-3xl">Ownership Info</p>
          <p className=" mb-14 text-sm">Be the first to own this watch!</p>
          <button className=" mb-2 block h-14 w-full rounded-sm bg-huros-1 px-6">
            <p className=" font-bold text-black">Buy Eons</p>
          </button>
          <button className=" block h-14 w-full rounded-sm bg-huros-1 px-6">
            <p className=" font-bold leading-5 text-black">
              Own at <span className="text-sm">USD</span>
              {blockchainData.originalListPrice}*
            </p>
            <p className=" text-xs text-black">
              price may increase due to service fees
            </p>
          </button>
        </section>
      </section>
      <section
        id="watch-information"
        className=" mb-14 grid grid-flow-col grid-cols-2 gap-x-10"
      >
        <div>
          <p className=" mb-8 text-2xl font-bold">Watch information</p>
          <div className=" grid grid-flow-row">
            <div className=" flex justify-between">
              <p className=" w-full">Brand</p>
              <p className=" w-full">{data.watch.brand}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Model</p>
              <p className=" w-full">{data.watch.name}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Reference number</p>
              <p className=" w-full">{data.watch.ref}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Movement type</p>
              <p className=" w-full">{data.watch.movementType}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Case</p>
              <p className=" w-full">{data.watch.case}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Dial</p>
              <p className=" w-full">{data.watch.dial}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Bracelet</p>
              <p className=" w-full">{data.watch.bracelet}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Production year</p>
              <p className=" w-full">{data.watch.productionYear}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Condition</p>
              <p className=" w-full">{data.watch.condition}</p>
            </div>
            <div className=" flex justify-between">
              <p className=" w-full">Accessories</p>
              <p className=" w-full">{data.watch.accessories}</p>
            </div>
          </div>
        </div>
        <div>
          <p className=" mb-8 text-2xl font-bold">Description</p>
          <p> {data.watch.description}</p>
        </div>
      </section>
      <section id="watch-image-banner" className="mb-14">
        <div className=" relative -mx-9 h-[40rem] w-auto">
          <Image src={bgNautilus} fill className=" object-cover" />
        </div>
      </section>
      <section
        id="newest-watch-collection"
        className=" flex w-full flex-col items-center"
      >
        <h2 className=" mb-8 text-huros-1">Newest Collection</h2>
        <section id="newest-collection" className="flex w-full flex-row">
          <div className=" scrollbar flex w-full flex-row gap-x-10 overflow-x-scroll px-10 pb-4 ">
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
      </section>
    </div>
  );
}

function NewestWatch({ image, name, brand, watchRef, eonPrice, watchId }) {
  return (
    <Link
      href={`/application/vaultcollection/${watchId}`}
      className={`${styles.hoverable} h-76 flex w-72 cursor-pointer flex-col items-center pb-3`}
    >
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
