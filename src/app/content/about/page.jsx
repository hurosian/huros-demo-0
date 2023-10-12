import React from "react";

export default function AboutPage() {
  return (
    <article className="flex flex-col justify-center items-start gap-20 md:flex-row md:gap-y-0">
      <section>
        <div className="grid row-auto gap-10">
          <h1 className=" text-6xl text-huros-bg-gold-1">
            TIMEPIECE OWNERSHIP REDEFINED
          </h1>
          <p>
            Huros is redefining the value and investment potential of the luxury
            timepiece industry with our approach to real-world asset
            tokenization and true community ownership.
          </p>
          <button className=" rounded-md bg-huros-bg-gold-1 mx-10 px-3 py-3 md:mx-0">
            <p className=" font-bold tracking-widest text-huros-bg-gray-1">REGISTER YOUR INTEREST</p>
          </button>
        </div>
      </section>
      <section>
        <div className="grid row-auto gap-10">
          <h1 className="text-5xl text-huros-bg-gold-1">OBJECTIVES</h1>
          <div className="grid row-auto gap-6">
            <div>
              <h3 className=" font-bold my-2 text-huros-1">Enhanced Access to Luxury Investment </h3>
              <p className="">
                We democratise the luxury watch market by enabling fractional
                ownership to make high-value luxury assets with great returns
                easy to invest in.
              </p>
            </div>
            <div>
              <h3 className=" font-bold my-2 text-huros-1">The Web3 Grey Dealer</h3>
              <p>
                We are the next-gen Web3 grey dealer for luxury watches,
                providing a platform that enables the use of both traditional
                and new digital payment methods in a familiar setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
