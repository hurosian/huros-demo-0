"use client";

import React from "react";
import { useState } from "react";

export default function Subscription({}) {
  const data = {
    alerts: {
      vault_collection: [
        {
          type: "new_release",
          subscribed: true,
        },
        {
          type: "watchlist",
          subscribed: true,
        },
        {
          type: "bids",
          subscribed: true,
        },
        {
          type: "governance",
          subscribed: true,
        },
        {
          type: "sale_of_watch",
          subscribed: true,
        },
      ],
      marketplace: [
        {
          type: "offers",
          subscribed: true,
        },
        {
          type: "request",
          subscribed: true,
        },
      ],
    },
    marketing: [
      {
        type: "newsletter",
        subscribed: true,
      },
      {
        type: "events",
        subscribed: true,
      },
    ],
  };

  const [subscriptions, setSubscriptions] = useState(data);

  const handleCheck = (e, category, type) => {
    const isCheck = e.target.checked;

    category !== "marketing"
      ? subscriptions["alerts"][category].find((subscription) => {
          if (subscription.type === type) {
            subscription.subscribed = isCheck;
          }
        })
      : subscriptions[category].find((subscription) => {
          if (subscription.type === type) {
            subscription.subscribed = isCheck;
          }
        });

    setSubscriptions(subscriptions);
  };

  return (
    <section id="subscription">
      <form className="w-full">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-huros-1">ALERTS</h4>
            <div>
              <label>Vault Collection</label>
              <SubscriptionList
                subscriptions={subscriptions.alerts.vault_collection}
                handleCheck={handleCheck}
                category={"vault_collection"}
              />
            </div>

            <div>
              <label>Marketplace</label>
              <SubscriptionList
                subscriptions={subscriptions.alerts.marketplace}
                handleCheck={handleCheck}
                category={"marketplace"}
              />
            </div>
          </div>

          <div className="items-between grid grid-rows-1">
            <div>
              <h4 className="text-huros-1">MARKETING</h4>
              <div>
                <SubscriptionList
                  subscriptions={subscriptions.marketing}
                  handleCheck={handleCheck}
                  category={"marketing"}
                />
              </div>
              <label className="text-sm text-slate-300">
                By opting out, you might miss out an exlusive updates and
                offers.
              </label>
            </div>

            <div className="mt-3 flex w-full items-end justify-between">
              <button
                title="Remove from the watchlist"
                className="inline-flex w-full justify-center rounded-md bg-[#201c0f] pt-1 font-['Avenir'] text-slate-300 hover:bg-huros-1 hover:text-black"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

const SubscriptionList = ({ subscriptions, handleCheck, category }) => {
  return (
    <>
      {subscriptions.map((item) => (
        <div
          key={item.type}
          className={`" + flex items-center justify-between ${
            category !== "marketing" ? "pl-10" : ""
          }`}
        >
          <label className="capitalize" htmlFor={item.type}>
            {item.type.split("_").join(" ")}
          </label>
          <input
            id={item.type}
            name={item.type}
            type="checkbox"
            defaultChecked={item.subscribed}
            onChange={(e) => handleCheck(e, category, item.type)}
          />
        </div>
      ))}
    </>
  );
};
