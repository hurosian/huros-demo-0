"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTimer } from "react-timer-hook";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

  const pageUiStates = {
    overview: {
      value: "overview",
      ownershipInfo: "ownershipInfo",
      placeOrder: "placeOrder",
      completeOrder: "completeOrder",
    },
    priceHistory: {
      value: "priceHistory",
      oneMonth: "oneMonth",
      threeMonth: "threeMonth",
      sixMonth: "sixMonth",
      oneYear: "oneYear",
      threeYear: "threeYear",
      fiveYear: "fiveYear",
    },
  };

  const lineData = {
    labels: [
      "Jun",
      "",
      "",
      "Jul",
      "",
      "",
      "Aug",
      "",
      "",
      "Sep",
      "",
      "",
      "Oct",
      "",
      "",
      "Nov",
      "",
      "",
    ],
    datasets: [
      {
        id: 1,
        label: "",
        data: [
          1045, 1102, 1045, 1137, 1085, 1148, 1228, 1163, 1255,
          1186, 1270, 1045, 1089, 1110, 1125, 1056,
          1137, 1221, 1288,
        ],
      },
    ],
  };

  const lineOptions = {
    borderColor: "#B49A5B",
    backgroundColor: "#B49A5B",
    color: "white",
    plugins: {
      legend: false
    },
    scales: {
      y: {
        border: {
          display: false
        },
        grid: {
          color: "#FFFFFF60"
          },
          ticks: {
            color: "white"
          }
    },
    x: {
      border: {
        display: false
      },
      grid: {
        color: "#B49A5B00"
        },
        ticks: {
          color: "white"
        }
  },
  }
    
  }

  const [blockchainData, setBlockchainData] = useState({
    owners: [],
    originalListPrice: 104500.0,
    eonPrice: 1045.0,
    eonsAvailable: 100,
    eonsLeft: 100,
  });
  const [oraclePrice, setOraclePrice] = useState(blockchainData.eonPrice);
  const [priceHistoryUiState, setPriceHistoryUiState] = useState(
    pageUiStates.priceHistory.threeMonth,
  );
  const [overviewUiState, setOverviewUiState] = useState(
    pageUiStates.overview.ownershipInfo,
  );
  const [ownershipPriceHistoryUiState, setOwnershipPriceHistoryUiState] =
    useState(pageUiStates.overview.value);
  const [eonsAmountInput, setEonAmountInput] = useState(0);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart: true,
    expiryTimestamp: new Date().setSeconds() + Math.random() * 30,
  });

  useEffect(() => {
    ChartJS.register(
      ArcElement,
      Tooltip,
      Legend,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
    );
    restart(new Date().setSeconds(new Date().getSeconds() + 10));
  }, []);
  useEffect(() => {
    if (isRunning) {
      return;
    }
    let priceChange = 0;
    if (Math.random() > 0.5) {
      priceChange -= oraclePrice * 0.06;
    } else {
      priceChange += oraclePrice * 0.06;
    }
    let newPrice = oraclePrice + priceChange;
    setOraclePrice(newPrice);
    restart(new Date().setSeconds(new Date().getSeconds() + 10));
  }, [isRunning]);

  const changePageUi = () => {
    switch (ownershipPriceHistoryUiState) {
      case pageUiStates.overview.value:
        return changeOverviewUi();
      case pageUiStates.priceHistory.value:
        return changePriceHistoryUi();
    }
  };

  const changePriceHistoryUi = () => {
    switch (priceHistoryUiState) {
      case pageUiStates.priceHistory.threeMonth:
        return (
          <>
            <div className="">
              <div className="grid grid-flow-col grid-cols-6">
                <p className=" opacity-30 font-bold">1M</p>
                <p className=" opacity-30 font-bold">3M</p>
                <p className=" text-huros-1 underline font-bold">6M</p>
                <p className=" opacity-30 font-bold">1Y</p>
                <p className=" opacity-30 font-bold">3Y</p>
                <p className=" opacity-30 font-bold">6Y</p>
              </div>
            <Line datasetIdKey="id" data={lineData} options={lineOptions} />
            </div>
          </>
        );
    }
  };

  const changeOverviewUi = () => {
    switch (overviewUiState) {
      case pageUiStates.overview.ownershipInfo:
        return (
          <>
            <p className=" mb-14 text-3xl font-bold">Ownership Info</p>
            <p className=" mb-14 text-sm">Be the first to own this watch!</p>
            <button
              className=" mb-2 block h-14 w-full rounded-sm bg-huros-1 px-6"
              onClick={() =>
                setOverviewUiState(pageUiStates.overview.placeOrder)
              }
            >
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
          </>
        );
      case pageUiStates.overview.placeOrder:
        return (
          <>
            <p className=" mb-14 text-3xl font-bold">Place your Order</p>
            <p className=" mb-4">Eons</p>
            <div className="mb-14 grid grid-flow-col grid-cols-3">
              <input
                type="number"
                max={100}
                min={1}
                placeholder="Amount"
                onChange={(e) => setEonAmountInput(e.target.value)}
              />
              <div />
              <p>
                <span className="text-sm">USD</span>{" "}
                {(() => eonsAmountInput * blockchainData.eonPrice)()}{" "}
              </p>
            </div>
            <button
              className=" mb-2 block h-14 w-full rounded-sm bg-huros-1 px-6 disabled:bg-huros-11"
              onClick={() =>
                setOverviewUiState(pageUiStates.overview.completeOrder)
              }
              disabled={eonsAmountInput == 0}
            >
              <p className=" font-bold text-black">Confirm</p>
            </button>
          </>
        );

      case pageUiStates.overview.completeOrder:
        return (
          <>
            <>
              <p className=" mb-14 text-4xl font-black">
                Your Order has been placed
              </p>
              <p className=" mb-14">
                You may track your order on Polygonscan.
                <br />
                <br />
                Your order may take a few minutes to reflect in your wallet. You
                will receive an alert when the transaction is complete.
              </p>
              <Link
                href="/application/vaultcollection"
                className=" mb-2 flex h-14 w-full items-center justify-center rounded-sm bg-huros-1 px-6 "
              >
                <p className=" self-center text-center font-bold text-black">
                  Back to the vault
                </p>
              </Link>
            </>
          </>
        );
    }
  };

  return (
    <div>
      <section
        id="watch-listing-purchase"
        className=" mb-14  grid w-full grid-flow-col grid-cols-2 gap-x-10"
      >
        <section
          id="watch-image"
          className=" flex aspect-square h-3/4 flex-col items-center border border-huros-1"
        >
          <div className=" relative aspect-square h-5/6">
            <Image
              src={data.watch.image}
              fill
              className=" object-contain"
              quality={50}
              alt={data.watch.name}
            />
          </div>
          <div className=" flex h-1/6 flex-row items-center gap-x-3">
            <div className="h-4 w-4 rounded-full bg-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
            <div className="h-4 w-4 rounded-full border border-huros-1" />
          </div>
        </section>
        <section
          id="watch-pricing"
          className=" m-auto grid w-full  grid-flow-row grid-rows-3 gap-y-3"
        >
          <div>
            <p className=" text-4xl font-bold">
              {data.watch.brand} {data.watch.name}
            </p>
            <p className=" mb-4 text-3xl">Ref: {data.watch.ref}</p>
            <div className=" flex justify-between">
              <p>Original List Price</p>
              <p>
                <span className=" text-sm">USD</span>
                {blockchainData.originalListPrice.toFixed(2)}
              </p>
            </div>
            <div className=" flex justify-between">
              <p>Per Eon Price</p>
              <p>
                <span className=" text-sm">USD</span>
                {blockchainData.eonPrice.toFixed(2)}
              </p>
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
            <div className=" mb-4 flex justify-between">
              <p className=" font-bold text-huros-1">ORACLE SUGGESTED PRICE</p>
              <div className=" flex flex-col items-end">
                <p className=" font-bold text-huros-1">
                  <span className=" text-sm">USD</span>
                  {oraclePrice.toFixed(2)}
                </p>
                <p className=" text-sm text-huros-1">
                  Refreshes in {hours}:{minutes}:{seconds}
                </p>
                <button
                  className=" block h-8 w-full rounded-sm bg-huros-1 px-2"
                  onClick={() =>
                    restart(
                      new Date().setSeconds(new Date().getSeconds() + 0.5),
                    )
                  }
                >
                  <p className=" font-bold leading-5 text-black text-sm">Rerun Timer</p>
                </button>
              </div>
            </div>
          </div>
          <div className=" z-20 row-span-2">
            <div className="grid grid-flow-col grid-cols-3 gap-x-4 mb-4">
              <button
                onClick={() =>
                  setOwnershipPriceHistoryUiState(pageUiStates.overview.value)
                }
                className={ownershipPriceHistoryUiState === pageUiStates.overview.value ? " border border-huros-1 rounded-md" : null}
              >
                <p className={` ${ownershipPriceHistoryUiState === pageUiStates.overview.value ? " text-huros-1 font-bold" : null}`}>Overview</p>
              </button>
              <button
                onClick={() =>
                  setOwnershipPriceHistoryUiState(
                    pageUiStates.priceHistory.value,
                  )
                }
                className={ownershipPriceHistoryUiState === pageUiStates.priceHistory.value ? " border border-huros-1 rounded-md" : null}
              >
                <p className={` ${ownershipPriceHistoryUiState === pageUiStates.priceHistory.value ? " text-huros-1 font-bold" : null}`}>Price History</p>
              </button>
            </div>
            <div className=" row-span-2 m-auto h-full w-full">
              {changePageUi()}
            </div>
          </div>
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
          <Image
            src={bgNautilus}
            fill
            quality={50}
            className=" object-cover"
            alt="Nautilus banner"
          />
        </div>
      </section>
      <section
        id="newest-watch-collection"
        className=" flex w-full flex-col items-center"
      >
        <h2 className=" mb-8 text-huros-1">Newest Collection</h2>
        <section id="newest-collection" className="flex w-full flex-row">
          <div className=" scrollbar flex w-full flex-row gap-x-10 overflow-x-scroll px-1 pb-4 ">
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
        <Image
          src={image}
          fill
          className=" object-fit p-2"
          alt={brand + " " + name}
        />
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
