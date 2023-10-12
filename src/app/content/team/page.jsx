import Image from "next/image";
import React from "react";

import imgEvangeline from "public/team_pics/img-evangeline-edited.png";
import imgGlenn from "public/team_pics/img-glenn-edited.png";
import imgGwenda from "public/team_pics/img-gwenda-edited.png";
import imgJohn from "public/team_pics/img-john-edited.png";
import imgJoy from "public/team_pics/img-joy-edited.png";
import imgRan from "public/team_pics/img-ran-edited.png";
import imgVernon from "public/team_pics/img-vernon-edited.png";
import imgWillynn from "public/team_pics/img-willynn-edited.png";

export default function TeamPage() {
  return (
    <article className=" grid grid-flow-row xl:grid-flow-col xl:grid-cols-3 xl:gap-x-10">
      <section className="mb-14 lg:col-span-1">
        <div className="mb-6">
          <h1 className=" text-huros-1">THE HUROS TEAM</h1>
        </div>
        <p>
          Huros was founded by a team of watch enthusiasts who believe that the
          luxury watch market should be made accessible to a wider audience.
          <br />
          <br />
          Driven by a passion for timepieces that are not just accessories but
          also valuable assets, our mission is to break down the barriers that
          have traditionally excluded everyday investors from this lucrative
          market.
          <br />
          <br />
          Huros is a legally registered entity under the laws of Singapore as
          Huros Pte. Ltd. Our team maintains full transparency of who we are and
          what we do.
        </p>
      </section>
      <section className="xl:col-span-2">
        <section className=" mb-14">
          <h2 className=" text-huros-1 mb-6">FOUNDING TEAM</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
            <TeamCard image={imgGlenn} name={"Glenn Tan"} role={"CEO"} />
            <TeamCard
              image={imgEvangeline}
              name={"Evangeline Chan"}
              role={"CCO"}
            />
            <TeamCard image={imgVernon} name={"Vernon Loh"} role={"COO"} />
            <TeamCard image={imgJohn} name={"John Tan"} role={"CTO"} />
          </div>
        </section>

        <section className="md:grid md:grid-cols-2 md:gap-x-4">
          <div>
            <h2 className=" text-huros-1 mb-6">CORE CONTRIBUTORS</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <TeamCard
                image={imgJoy}
                name={"Joy Sim"}
                role={"Growth Strategist"}
              />
              <TeamCard
                image={imgGwenda}
                name={"Gwenda Soh"}
                role={"Outreach & Partnerships"}
              />
            </div>
          </div>
          <div>
            <h2 className=" text-huros-1 mb-6 ">ADVISORS</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              <TeamCard image={imgWillynn} name={"Willynn Ng"} role={""} />
              <TeamCard image={imgRan} name={"Ran Yang"} role={""} />
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

function TeamCard({ image, name, role}) {
  return (
    <article className=" flex flex-col items-center">
      <Image src={image} className=" mb-2 rounded-md" alt={name} />
      <h3 className=" text-huros-1">{name}</h3>
      <p className="text-center">{role}</p>
    </article>
  );
}
