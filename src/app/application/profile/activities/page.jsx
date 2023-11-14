"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const dateStruct = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

export default function Activities({}) {
  const sections = {
    vaultCollection: "vault-collection",
    marketplace: "marketplace",
    watchPurchases: "watch-purchases",
  };

  const activities = [
    {
      type: "vault-collection",
      data: [
        {
          id: 1,
          image_source:
            "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
          brand: "Patek Phillipe",
          series: "Nautilus",
          model_number: "5711/1A-011",
          list_price: 104_500,
          eon_price: 13_585,
          eon_owned: "13%",
          date_of_purchase: "2023-06-01",
        },
        {
          id: 2,
          image_source:
            "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
          brand: "Rolex",
          series: "Submariner",
          model_number: "116610LN",
          list_price: 13_200,
          eon_price: 3_300,
          eon_owned: "25%",
          date_of_purchase: "2023-06-01",
        },
        {
          id: 3,
          image_source:
            "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
          brand: "Audemars Piguet",
          series: "Royal Oak",
          model_number: "1540",
          list_price: 26_500,
          eon_price: 2_750,
          eon_owned: "10%",
          date_of_purchase: "2023-06-01",
        },
      ],
    },
    {
      type: "marketplace",
      data: [
        {
          id: 4,
          image_source:
            "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
          brand: "Patek Phillipe",
          series: "Nautilus",
          model_number: "5711/1A-011",
          original_owner: "Beatrix",
          purchased_price: 13_585,
          eon_owned: "13%",
          date_of_purchase: "2023-06-01",
        },
        {
          id: 5,
          image_source:
            "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
          brand: "Rolex",
          series: "Submariner",
          model_number: "116610LN",
          original_owner: "Jasper",
          purchased_price: 3_300,
          eon_owned: "25%",
          date_of_purchase: "2023-06-01",
        },
        {
          id: 6,
          image_source:
            "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
          brand: "Audemars Piguet",
          series: "Royal Oak",
          model_number: "1540",
          original_owner: "Alix",
          purchased_price: 2_750,
          eon_owned: "10%",
          date_of_purchase: "2023-06-01",
        },
      ],
    },
    {
      type: "watch-purchases",
      data: [
        {
          id: 7,
          image_source:
            "https://cdn.watchbase.com/watch/patek-philippe/nautilus/5711-1a-011-d1.png",
          brand: "Patek Phillipe",
          series: "Nautilus",
          model_number: "5711/1A-011",
          authentication_papers: "https://www.google.com/",
          status: "En-route",
          date_of_purchase: "2023-06-01",
          date_of_deliver: "N/A",
        },
        {
          id: 8,
          image_source:
            "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
          brand: "Rolex",
          series: "Submariner",
          model_number: "116610LN",
          authentication_papers: "https://www.google.com/",
          status: "Authenticating",
          date_of_purchase: "2023-06-01",
          date_of_deliver: "N/A",
        },
        {
          id: 9,
          image_source:
            "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
          brand: "Audemars Piguet",
          series: "Royal Oak",
          model_number: "1540",
          authentication_papers: "https://www.google.com/",
          status: "Delivered",
          date_of_purchase: "2023-06-01",
          date_of_deliver: "2023-06-08",
        },
      ],
    },
  ];

  const [tab, setTab] = useState(sections.vaultCollection);

  const handleClick = (id) => {
    const tabClicked = Object.keys(sections).find(
      (key) => sections[key] === id,
    );

    if (tabClicked === undefined) {
      setTab(sections.vaultCollection);
      return;
    }

    setTab(sections[tabClicked]);
  };

  return (
    <section id="activities">
      <div className="w-full">
        <ul className="flex pb-3 pl-2 pt-4 text-xl font-bold">
          {activities.map((activity) => (
            <li className="mr-6" key={activity.type}>
              <Link
                id={activity.type}
                className={
                  tab === activity.type
                    ? "text-huros-1 underline underline-offset-4"
                    : "text-slate-300 hover:text-slate-300"
                }
                href="#"
                onClick={(e) => handleClick(e.target.id)}
                aria-current="page"
              >
                {activity.type}
              </Link>
            </li>
          ))}
        </ul>

        <ActivityTable activities={activities} tab={tab} sections={sections} />
      </div>
    </section>
  );
}

const ActivityTable = ({ activities, tab, sections }) => {
  const histories = activities.find((activity) => activity.type === tab);

  switch (tab) {
    case sections.vaultCollection:
      return (
        <>
          <table className="w-full text-center text-white">
            <thead>
              <tr>
                <th className="w-3/20">Ref</th>
                <th className="w-1/10">Series</th>
                <th className="w-1/10">Brand</th>
                <th className="w-13/100">Model No</th>
                <th className="w-13/100">List Price</th>
                <th className="w-13/100">Eon Price</th>
                <th className="w-13/100">Eon Owned</th>
                <th className="w-13/100">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {histories.data.map((history) => (
                <tr key={history.id}>
                  <td>
                    <Image
                      src={history.image_source}
                      width={150}
                      height={150}
                      alt={history.brand}
                    />
                  </td>
                  <td> {history.brand} </td>
                  <td> {history.series} </td>
                  <td> {history.model_number} </td>
                  <td>
                    {history.list_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>
                    {history.eon_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td> {history.eon_owned} </td>
                  <td suppressHydrationWarning>
                    {new Date(history.date_of_purchase).toLocaleDateString(
                      undefined,
                      dateStruct,
                    )}
                  </td>
                </tr>
              ))}
              {histories.data.length === 0 && (
                <tr>
                  <td colSpan={8}> No record found </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      );
    case sections.marketplace:
      return (
        <>
          <table className="w-full text-center text-white">
            <thead>
              <tr>
                <th className="w-3/20">Ref</th>
                <th className="w-1/10">Series</th>
                <th className="w-1/10">Brand</th>
                <th className="w-13/100">Model No</th>
                <th className="w-13/100">Original Owner</th>
                <th className="w-13/100">Purchased Price</th>
                <th className="w-13/100">Eon Owned</th>
                <th className="w-13/100">Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {histories.data.map((history) => (
                <tr key={history.id}>
                  <td>
                    <Image
                      src={history.image_source}
                      width={150}
                      height={150}
                      alt={history.brand}
                    />
                  </td>
                  <td> {history.brand} </td>
                  <td> {history.series} </td>
                  <td> {history.model_number} </td>
                  <td> {history.original_owner} </td>
                  <td>
                    {history.purchased_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td> {history.eon_owned} </td>
                  <td>
                    {new Date(history.date_of_purchase).toLocaleDateString(
                      undefined,
                      dateStruct,
                    )}
                  </td>
                </tr>
              ))}
              {histories.data.length === 0 && (
                <tr>
                  <td colSpan={8}> No record found </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      );
    case sections.watchPurchases:
      return (
        <>
          <table className="w-full text-center text-white">
            <thead>
              <tr>
                <th className="w-3/20">Ref</th>
                <th className="w-1/10">Series</th>
                <th className="w-1/10">Brand</th>
                <th className="w-13/100">Model No</th>
                <th className="w-13/100">Authentication Papers</th>
                <th className="w-13/100">Status</th>
                <th className="w-13/100">Purchase Date</th>
                <th className="w-13/100">Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {histories.data.map((history) => (
                <tr key={history.id}>
                  <td>
                    <Image
                      src={history.image_source}
                      width={150}
                      height={150}
                      alt={history.brand}
                    />
                  </td>
                  <td> {history.brand} </td>
                  <td> {history.series} </td>
                  <td> {history.model_number} </td>
                  <td>
                    <Link href={history.authentication_papers}>Link</Link>
                  </td>
                  <td> {history.status} </td>
                  <td>
                    {new Date(history.date_of_purchase).toLocaleDateString(
                      undefined,
                      dateStruct,
                    )}
                  </td>
                  <td>
                    {new Date(history.date_of_deliver) == "Invalid Date"
                      ? "N/A"
                      : new Date(history.date_of_deliver).toLocaleDateString(
                          undefined,
                          dateStruct,
                        )}
                  </td>
                </tr>
              ))}
              {histories.data.length === 0 && (
                <tr>
                  <td colSpan={8}> No record found </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      );
    default:
      return (
        <>
          <table>
            <tbody>
              <tr>
                <td> N/A </td>
              </tr>
            </tbody>
          </table>
        </>
      );
  }
};
