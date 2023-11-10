"use client";

import Image from "next/image";
import React from "react";

import { useRef, useState } from "react";
import PortfolioModal from "./PortfolioModal";

export default function Portfolio({}) {
  const data = [
    {
      id: 1,
      image_source:
        "https://images.montro.com/o5svgh219aG4lBp_Uzh2iDgMMxo=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F12%2F16161444%2F5811_1G_001_1-1.png",
      brand: "Patek Phillipe",
      series: "Nautilus White Dial",
      model_number: "5711/1A-011",
      eon_owned: "13%",
      eon_valuation: 15_730,
      date_of_purchase: "2023-06-01",
      available_eon: 86,
    },
    {
      id: 2,
      image_source:
        "https://images.montro.com/sfHTGzdfKrTWZJM-F8RlvW8V4CU=/800x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2023%2F04%2F05152724%2FRolex-Submariner-116610LN_F-3-1.png",
      brand: "Rolex",
      series: "Submariner",
      model_number: "116610LN",
      eon_owned: "25%",
      eon_valuation: 15_731,
      date_of_purchase: "2023-06-01",
      available_eon: 86,
    },
    {
      id: 3,
      image_source:
        "https://images.montro.com/wj38BYnypuJLNtSWqekTho2J1Do=/600x0/https%3A%2F%2Famz.luxewatches.co.uk%2Fapp%2Fuploads%2F2022%2F10%2F27114301%2FAP-Boutique-dial-F-2-1.png",
      brand: "Audemars Piguet",
      series: "Royal Oak White Dial",
      model_number: "1540",
      eon_owned: "10%",
      eon_valuation: 15_732,
      date_of_purchase: "2023-06-01",
      available_eon: 86,
    },
  ];

  const [portfolio, setPortfolio] = useState(data);

  // Modal dialog
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const closeButtonRef = useRef(null);

  const handleClick = (item) => {
    setOpen(true);
    setModalInfo(item);
  };

  return (
    <section id="portfolio">
      <div className="grid grid-cols-3 gap-10">
        <PortfolioList portfolio={portfolio} handleClick={handleClick} />

        <PortfolioModal
          open={open}
          setOpen={setOpen}
          closeButtonRef={closeButtonRef}
          info={modalInfo}
        />
      </div>
    </section>
  );
}

const PortfolioList = ({ portfolio, handleClick }) => {
  return (
    <>
      {portfolio.map((item) => (
        <div
          key={item.id}
          className="border border-huros-1"
          title={"Click to view " + item.brand + " " + item.series}
          onClick={() => handleClick(item)}
        >
          <div className="flex cursor-pointer flex-col items-center p-3">
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
              Eon Owned:
            </label>
            <label className="text-lg text-huros-1"> {item.eon_owned} </label>
          </div>
        </div>
      ))}
    </>
  );
};
