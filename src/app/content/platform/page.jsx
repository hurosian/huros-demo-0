"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Chart, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import styles from "./page.module.css";
import bgVault from "public/backgrounds/bg-vault-blackened.png";
import bgWatch1 from "public/backgrounds/bg-watch-1-edited.png";
import bgWatch2 from "public/backgrounds/bg-watch-2-edited.png";
import bgWatch3 from "public/backgrounds/bg-watch-3-edited.png";
import bgWatch4 from "public/backgrounds/bg-watch-4-edited.png";

export default function PlatformPage() {
  ChartJS.register(ArcElement, Tooltip, ChartDataLabels);
  const chartRef = useRef(null);
  const chart = () => chartRef.current;

  useEffect(() => {
    console.log(chartRef.current);
  }, [chartRef]);

  const doughnutData = {
    labels: [
      "Team & Advisors",
      "Reserves",
      "Token Sale",
      "Ecosystem",
      "Marketing/Partnerships",
      "Future Dividends Reserve",
      "Liquidity Pool",
    ],
    datasets: [
      {
        data: [5, 15, 10, 35, 10, 5, 20],
        backgroundColor: [
          "#8C6D1F",
          "#AB9153",
          "#B59A5A",
          "#B7AA8C",
          "#C6A556",
          "#D6C8AB",
          "#FEE09A",
        ],
        hoverOffset: 4,
      },
    ],
  };
  5;

  const config = {
    cutout: "70%",
    radius: "50%",
    position: "center",
    borderColor: "#010100",
    // responsive: true,
    width: "1",
    // height: "1",
    // layout: {
    //   padding: {
    //     left: 5,
    //     right: 5,
    //     top: 5,
    //     bottom: 5,
    //   },
    // },
    events: ["click", "mousemove", "touchstart"],
    onHover: handleHover,
    plugins: {
      tooltip: {
        enabled: false,
      },

      // legend: {
      //   display: false,
      //   position: "bottom",
      //   align: "left",
      //   onHover: handleHover,
      //   labels: {
      //     color: "white",
      //     boxWidth: 30,
      //     boxHeight: 25,
      //     // font:
      //     padding: 10,
      //   },
      // },
      datalabels: {
        borderRadius: 5,
        color: "white",
        anchor: "end",
        align: "end",
        offset: 0,
        display: function (context) {
          return context.dataset.data;
        },
        font: {
          family: "Avenir",
          weight: "normal",
          size: 14,
        },
        padding: 5,
        formatter: function (value, context) {
          let label = context.chart.data.labels[context.dataIndex];
          return label.length > 10
            ? `${label.match(/\w+\s*/g).join("\n")}\n${value}%`
            : `${label}\n${value}%`;
        },
      },
    },
  };

  function removeColours(itemIndex) {
    chart().data.datasets[0].backgroundColor.forEach((color, index, colors) => {
      colors[index] =
        index === itemIndex || color.length === 9 ? color : color + "4D";
    });
    chart().update();
  }

  function restoreColours() {
    chart().data.datasets[0].backgroundColor.forEach((color, index, colors) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    chart().update();
  }

  function handleHover(evt, item) {
    if (item.length === 0) {
      restoreColours();
    } else {
      restoreColours();
      removeColours(item[0].index);
    }
  }

  return (
    <article>
      <section
        className=" min-h-fit h-[28rem]  mb-8 bg-cover"
        style={{ backgroundImage: `url(${bgVault.src})` }}
      >
        <h1 className="text-left text-huros-1 mb-6">
          HUROS <br />
          VAULT
          <br />
          COLLECTION
        </h1>
        <p className="">
          The digital boutique for your next timepiece and get instant liquidity
          on your existing timepieces by selling to Huros.
        </p>
      </section>
      <section className=" h-fit my-8 md:h-96">
        <div className=" flex flex-col md:flex-row md:h-full md:gap-x-48 md:px-12 md:py-10">
          <div className="mb-12 md:mb-0">
            <h2 className=" text-center text-huros-1">EONS</h2>
            <p className=" text-center">
              Enter luxury watch investments at a low cost with fractions (Eons)
              of a timepiece with high investment value, curated by our network
              of timepiece experts.
            </p>
          </div>
          <div className="">
            <h2 className="text-center text-huros-1">HASTE</h2>
            <p className=" text-center">
              Gamify the ownership expeirence of luxury timepieces with the
              haste system, with regular opportunities to win a timepiece
              shipped to your doorstep.
            </p>
          </div>
        </div>
      </section>
      <section className=" h-fit my-8">
        <div className=" grid grid-flow-row md:grid-flow-col md:gap-x-10">
          <div className={`${styles.hoverable} relative mb-12 h-[640px]`}>
            <div className="">
              <div
                className="absolute inset-0 w-full h-full bg-fit bg-[center_bottom_50rem]"
                style={{ backgroundImage: `url(${bgWatch1.src})` }}
              />
              <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-80" />
              <div className="absolute inset-0 w-full h-full py-10 z-20">
                <h2 className="text-center text-huros-1 mb-10 h-36">
                  Co-ownership
                </h2>
                <p className=" px-4 text-center">
                  Huros and our users share ownership over a timepiece. Huros
                  will determine the best point for sale in order to maximise
                  the benefits for every fractional owner.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverable} relative mb-12 h-[640px]`}>
            <div className="">
              <div
                className="absolute inset-0 w-full h-full bg-fit bg-[center_bottom_50rem]"
                style={{ backgroundImage: `url(${bgWatch2.src})` }}
              />
              <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-80" />
              <div className="absolute inset-0 w-full h-full py-10 z-20">
                <h2 className="text-center text-huros-1 mb-10 h-36">
                  Community Ownership
                </h2>
                <p className="px-4 text-center">
                  Full governance lies in the hands of the community. Each
                  timepiece forms its own `&lsquo;`DAO`&lsquo;`, powered by a
                  transparent voting system to create an equitable and
                  interactive environment for all users.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.hoverable} relative mb-12 h-[640px]`}>
            <div className="">
              <div
                className="absolute inset-0 w-full h-full bg-fit bg-[center_bottom_0rem]"
                style={{ backgroundImage: `url(${bgWatch3.src})` }}
              />
              <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-80" />
              <div className="absolute inset-0 w-full h-full py-10 z-20">
                <h2 className="text-center text-huros-1 mb-10 h-36">
                  Outright Ownership
                </h2>
                <p className="px-4 text-center">
                  An outright ownership is the traditional purchase of a
                  timepiece. The buyer purchases all fractions and covers a
                  small fee for shipping, insurance and other costs, and the
                  watch is securely shipped by Huros to the buyer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-fit my-8">
        <h2 className="text-center text-huros-1">$MINS TOKEN</h2>
        <p className="text-center">
          $MINS serves as the native utility token within the Huros ecosystem
          and offers a layer of liquidity to our platform, allowing easy entry
          and exit for both casual users and long-term serious investors.
        </p>
      </section>
      <section className=" h-fit my-8 bg-huros-bg-gray-1 p-10">
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:w-full items-center">
          <div className="h-44 md:h-full md:w-auto">
            <div
              className="h-full w-full bg-[length:50%] bg-no-repeat bg-center md:bg-[length:100%]"
              style={{ backgroundImage: `url(${bgWatch4.src})` }}
            />
          </div>
          <div>
            <div className="grid grid-flow-row gap-6 md:w-full">
              <div>
                <h3 className="my-2 text-huros-1">platform benefits</h3>
                <p className="">
                  While Huros will offer a variety of payment methods that a
                  user prefers, using $MINS for transactions also offer platform
                  discounts and access to exclusive features, incentivizing
                  long-term holding and utility of our token.
                </p>
              </div>
              <div>
                <h3 className=" my-2 text-huros-1">Staking Utilities</h3>
                <p>
                  $MINS can be staked in various yield-generating protocols
                  within the Huros ecosystem at a later stage, from liquidity
                  pools to asset-backed staking. Users may earn additional $MINS
                  and exclusive membership to Huros, adding a layer of passive
                  income generation powered by asset tokenization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-auto ">
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-6">
          <div className="md:col-span-2 md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <h2 className="text-huros-1">TOKENOMICS</h2>
            </div>
            <div>
              <h3 className="text-huros-1">TOTAL SUPPLY</h3>
              <p>200,000,000</p>
            </div>
            <div>
              <h3 className="text-huros-1">PUBLIC ROUND ONE</h3>
              <p>USD 0.10/$MINS</p>
            </div>
            <div>
              <h3 className="text-huros-1">LOCK-UP SCHEDULE</h3>
              <p>1 YEAR with quarterly vest of 25% upon token launch</p>
            </div>
          </div>
          <div className="md:col-span-4 w-full flex items-center  justify-end">
            <Doughnut
              ref={chartRef}
              data={doughnutData}
              options={config}
              className=" max-h-[28rem] max-w-[28rem]"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
