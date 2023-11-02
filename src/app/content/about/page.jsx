"use client";
import React, { useEffect, useRef } from "react";
import {
  useFormStatus,
  useFormState,
} from "react-dom";
import Image from "next/image";

import styles from "./page.module.css";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { submitInterest } from "./actions";
import logoAceSg from "public/logos/logo-acesg.png"

export default function AboutPage() {
  const [interestFormOverlay, setInterestFormOverlay] = useState(false);
  const [interestFormState, interestFormAction] = useFormState(submitInterest);

  const changeOverlayState = () => {
    setInterestFormOverlay(!interestFormOverlay);
  };

  useEffect(() => {
    if (interestFormState?.type === "success") {
      window.alert("Successfully submitted interest!");
      changeOverlayState();
    } else if (interestFormState?.type === "failed") {
      window.alert("Failed to submit interest. This shouldn't happen.");
      changeOverlayState();
    }
  }, [interestFormState]);

  return (
    <div>
      <section
        className={`${styles.overlay} ${
          interestFormOverlay ? "block" : "hidden"
        } scrollbar`}
      >
        <form className="" action={interestFormAction}>
          <div className=" flex flex-row mb-14">
            <h3 className="flex-grow">Interest Registration</h3>
            <div className=" flex-grow items-center">
              <XMarkIcon
                className=" w-10 h-10  float-right stroke-huros-bg-gold-1"
                color="white"
                onClick={() => changeOverlayState()}
              />
            </div>
          </div>
          <div className="mb-8">
            <p>
              Full Name <span className=" text-xs text-huros-1">Required</span>
            </p>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-8">
            <p>
              Email <span className=" text-xs text-huros-1">Required</span>
            </p>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className=" md:flex md:flex-row md:gap-4">
            <div className="mb-8 md:flex-grow">
              <p>Location</p>
              <input type="text" name="location" placeholder="Location" />
            </div>
            <div className="mb-8 md:flex-grow">
              <p>Company</p>
              <input type="text" name="company" placeholder="Company" />
            </div>
          </div>
          <div className=" md:flex md:flex-row md:gap-4">
            <div className="mb-8 md:flex-grow">
              <p>Telegram</p>
              <input type="text" name="telegram" placeholder="Telegram" />
            </div>
            <div className="mb-8 md:flex-grow">
              <p>Discord</p>
              <input type="text" name="discord" placeholder="Discord" />
            </div>
          </div>
          <div className=" md:flex md:flex-row md:gap-4">
            <div className="mb-8 md:flex-grow w-1/2">
              <p>Wallet Address</p>
              <input type="text" name="wallet" placeholder="Wallet" />
            </div>
            <div className="mb-8 md:flex-grow md:w-1/2">
              <p>Gender</p>
              <select name="gender" defaultValue={""}>
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonbinary">Non Binary</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className=" mb-8">
            <p className="mb-6">Please tick what you are interested in</p>
            <Checkbox
              checkboxName="useHuros"
              checkboxLabel="Interested to use Huros"
              checkboxValue="Use Huros"
            />
            <Checkbox
              checkboxName="investInHuros"
              checkboxLabel="Interested in investing in Huros"
              checkboxValue="Invest in Huros"
            />
            <Checkbox
              checkboxName="partnerWithHuros"
              checkboxLabel="Interested in partnering with Huros"
              checkboxValue="Partner with Huros"
            />
          </div>
          <SubmitButton />
        </form>
      </section>

      <div className="min-h-screen">
      <section
        className={`flex flex-col justify-center items-start gap-20 md:flex-row md:gap-y-0 mb-14  ${
          interestFormOverlay ? " overflow-hidden" : ""
        }`}
      >
        <section>
          <div className="grid row-auto gap-10">
            <h1 className=" text-6xl text-huros-bg-gold-1">
              TIMEPIECE OWNERSHIP REDEFINED
            </h1>
            <p>
              Huros is redefining the value and investment potential of the
              luxury timepiece industry with our approach to real-world asset
              tokenization and true community ownership.
            </p>
            <button
              className=" rounded-md bg-huros-bg-gold-1 mx-10 px-3 py-3 md:mx-0"
              onClick={() => changeOverlayState()}
            >
              <p className=" font-bold tracking-widest text-huros-bg-gray-1">
                REGISTER YOUR INTEREST
              </p>
            </button>
          </div>
        </section>
        <section>
          <div className="grid row-auto gap-10">
            <h1 className="text-5xl text-huros-bg-gold-1">OBJECTIVES</h1>
            <div className="grid row-auto gap-6">
              <div>
                <h3 className=" font-bold my-2 text-huros-1">
                  Enhanced Access to Luxury Investment{" "}
                </h3>
                <p className="">
                  We democratise the luxury watch market by enabling fractional
                  ownership to make high-value luxury assets with great returns
                  easy to invest in.
                </p>
              </div>
              <div>
                <h3 className=" font-bold my-2 text-huros-1">
                  The Web3 Grey Dealer
                </h3>
                <p>
                  We are the next-gen Web3 grey dealer for luxury watches,
                  providing a platform that enables the use of both traditional
                  and new digital payment methods in a familiar setting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <section>
        <h2 className=" text-huros-1 mb-14">Supported By</h2>
        <div>
          <Image src={logoAceSg} className=" w-52 "/>
        </div>
      </section> */}
      </div>

    </div>
  );
}

function Checkbox({ checkboxName, checkboxLabel, checkboxValue }) {
  return (
    <div className=" relative flex items-start mb-4">
      <div className="flex h-6 items-center">
        <input
          id={checkboxName}
          name={checkboxName}
          type="checkbox"
          className=" h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          value={checkboxValue}
        />
      </div>
      <div className="ml-3 text-lg leading-6">
        <label htmlFor="comments" className="font-medium text-gray-300">
          {checkboxLabel}
        </label>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className=" rounded-md bg-huros-bg-gold-1 mx-10 px-3 py-3 md:mx-0"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {" "}
      <p className=" text-sm font-bold tracking-widest text-huros-bg-gray-1">
        Submit
      </p>
    </button>
  );
}
