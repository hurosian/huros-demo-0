import React from "react";

export default function TimelinePage() {
  return (
    <article className=" grid grid-flow-row gap-y-16  xl:grid-flow-col xl:grid-cols-3 xl:gap-x-10">
      <section>
        <div className="mb-6">
          <h1 className=" text-huros-1">
            THE
            <br />
            HUROS
            <br />
            JOURNEY
          </h1>
        </div>

        <p>
          Huros lays out our development into four crucial stages, each allowing
          us to further grow, expand and obtain greater market standing.
          <br />
          <br />
          Detailed insight within each stage will be expanded as the Huros
          project develops.
        </p>
      </section>

      <div className=" grid grid-flow-row gap-y-2 gap-x-14 lg:grid-flow-col lg:grid-cols-4 xl:col-span-2">
        <section className="grid grid-flow-row gap-y-4 border-huros-1 py-10 border-r-0 border-b-2  md:px-2 lg:border-b-0 lg:grid-rows-[8rem_12rem_14em] lg:gap-y-0 lg:border-r-2 ">
          <h2 className=" text-huros-1">STAGE 1</h2>
          <div>
            <h3 className="mb-1 text-huros-1">OPERATIONS</h3>
            <div>
              <p>Incorporation</p>
              <p>Fund-raising</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">PRODUCT</h3>
            <div>
              <p>Pre-sales</p>
              <p>$MINS token development</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">MARKETING</h3>
            <p>Mass marketing</p>
          </div>
        </section>
        <section className="grid grid-flow-row gap-y-4 border-huros-1 py-10 border-r-0 border-b-2   md:px-2 lg:border-b-0 lg:grid-rows-[8rem_12rem_14rem] lg:gap-y-0 lg:border-r-2">
          <h2 className=" text-huros-1">STAGE II</h2>
          <div>
            <h3 className="mb-1 text-huros-1">OPERATIONS</h3>
            <div>
              <p>Expansion of partnerships verticals</p>
              <p>Vault fabrication</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">PRODUCT</h3>
            <div>
              <p>$MINS token launch</p>
              <p>Launch of MVP</p>
              <p>Development of mobile app</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">MARKETING</h3>
            <p>Increased marketing activities</p>
          </div>
        </section>
        <section className="grid grid-flow-row gap-y-4 border-huros-1 py-10 border-r-0 border-b-2   md:px-2 lg:border-b-0 lg:grid-rows-[8rem_12rem_14rem] lg:gap-y-0 lg:border-r-2 ">
          <h2 className=" text-huros-1">STAGE III</h2>
          <div>
            <h3 className="mb-1 text-huros-1">OPERATIONS</h3>
            <div>
              <p>Team expansion</p>
              <p>Overseas market expansion</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">PRODUCT</h3>
            <div>
              <p>Official launch</p>
              <p>Development of new features</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">MARKETING</h3>
            <p>Participation in global watch and web3 events</p>
          </div>
        </section>
        <section className="grid grid-flow-row gap-y-4 pt-10  md:px-2 lg:grid-rows-[8rem_12rem_14rem] lg:gap-y-0 ">
          <h2 className=" text-huros-1">STAGE IV</h2>
          <div>
            <h3 className="mb-1 text-huros-1">OPERATIONS</h3>
            <div>
              <p>Partnerships with brands</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">PRODUCT</h3>
            <div>
              <p>Opening of private club</p>
              <p>Adoption of other asset classes</p>
            </div>
          </div>
          <div>
            <h3 className="mb-1 text-huros-1">MARKETING</h3>
            <p>Hosting of exclusive events</p>
          </div>
        </section>
      </div>
    </article>
  );
}
