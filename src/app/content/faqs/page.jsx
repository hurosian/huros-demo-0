"use client";
import React, { Children } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FaqsPage() {
  return (
    <article className="xl:grid xl:grid-cols-3">
      <h2 className=" text-huros-1 mb-6 xl:col-span-1">FAQs</h2>
      <section className="xl:col-span-2">
        {faqs.map((item) => {
          return (
            <FaqSection topic={item.header} key={item.header}>
              <QnaAccordian qnas={item.qnas}/>
            </FaqSection>
          );
        })}
      </section>
    </article>
  );
}

function FaqSection({ topic, children }) {
  return (
    <section className=" mb-16">
      <h3 className="mb-4 text-huros-1">{topic}</h3>
      {children}
    </section>
  );
}

function QnaAccordian({ qnas }) {
  return (
    <dl className="mt-10 space-y-6 divide-y divide-white/10">
      {qnas.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                  <p className="text-xl font-semibold leading-7">
                    {faq.question}
                  </p>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-300">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}

const faqs = [
  {
    header: "General Information",
    qnas: [
      {
        question: "What is Huros?",
        answer:
          "Huros is a platform that combines the worlds of luxury horology and blockchain technology. We provide a decentralized platform where you can co-own, trade, and invest in luxury timepieces. By tokenizing high-value watches into smaller, tradable fractional units, we democratize access to this traditionally exclusive asset class. Through blockchain technology, we ensure transparency, security, and ease of transaction for all users.",
      },
      {
        question: "When is the launch date?",
        answer:
          "We are planning for an official launch around late Q1 2024. Stay tuned to our social media channels for the latest updates and announcements!",
      },
      {
        question: "How does Huros work?",
        answer:
          "Huros operates on a unique model where luxury watches are tokenized. The watches are then stored in our secure vault, or fractions of these timepieces can be traded through our platform. In addition, Huros engages in arbitrage trading of these watches to co-share profits with our users and allows for governance mechanisms where holders can vote on platform and portfolio decisions.",
      },
      {
        question: "Why should I choose Huros and not other platforms? ",
        answer:
          "Several reasons make Huros stand out:<br><br>1. Co-ownership: We enable you to own a fraction of a luxury watch, lowering the entry barrier to this lucrative market. Through co-ownership, you can rely on the expertise of the Huros team to generate profit for you for your timepieces.<br><br>2. The Web3 Grey Dealer: Huros positions as a secondary market dealer operating to serve both the web3 community and traditional watch enthusiast, facilitating a more direct and transparent purchasing and selling process, which benefits both the consumer and the watch industry.<br><br>3. Crypto Payments: We offer a wide variety of payment options ranging from fiat to major cryptocurrencies, in addition to our own native token that provides a myriad of benefits.<br><br>4. Bridging Traditional Grey Dealers and Gamification: We partner with traditional grey dealers to broaden our inventory and offer a gamified experience through our platform activities and rewards, making the watch trading experience more engaging.",
      },
      {
        question: "Who is behind Huros?",
        answer:
          "Huros is founded by a team of watch enthusiasts who are passionate about democratizing access to luxury timepieces. Our team comprises of members versed in the watch industry, business growth, blockchain development, decentralized finance and compliance. We are supported by experts in various sectors including blockchain, marketing and growth advisories. All members of the Huros team are fully doxxed and our profiles are transparent to the public.",
      },
      {
        question: "Is Huros a registered company?",
        answer:
          "Yes, Huros is a legally registered company based in Singapore. We adhere to all local and international laws and regulations governing asset tokenization and trading.",
      },
      {
        question: "How much can I earn from Huros?",
        answer:
          "The potential earnings from Huros can vary based on several factors such as the watches you invest in, market conditions, and the amount you invest. Huros aims to create a new economic model for the luxury watch market that is inclusive, transparent, and highly liquid. This model aims to provide lucrative opportunities for all stakeholders, including individual fractional owners.",
      },
    ],
  },
  {
    header: "Product and Services",
    qnas: [
      {
        question: "What types of watches are available?",
        answer:
          "Huros offers a curated selection of high-quality luxury watches, spanning a variety of brands, models, and price points. Whether you're interested in vintage classics or contemporary masterpieces, you'll find a wide range of options to suit your taste and investment goals. Brands available will include, but are not limited to, Rolex, Patek Philippe, Audemars Piguet, and many more.",
      },
      {
        question: "How do I buy a watch?",
        answer: `Buying a watch or an Eon on the Huros platform is a straightforward process:

                1. Create an Account: Sign up for a Huros account and connect your wallet if you have one. Otherwise, we will guide you through the creation process. 
                
                2. Browse Inventory: Explore our diverse range of luxury watches, each broken down into Eons. 
                
                3. Select & Confirm: Choose the watch or Eon you wish to purchase and review the details. Alternatively, you can purchase the watch entirely and we will ship the watch securely to you. 
                
                4. Payment: Complete the purchase using supported cryptocurrencies or fiat options. 
                
                5. Transaction Complete: Once the transaction is confirmed, your ownership of the Eon will be recorded on the blockchain, and you'll receive a digital certificate.`,
      },
      {
        question: "What are EONs?",
        answer: `Eons are fractionalized digital tokens representing ownership in a luxury timepiece on the Huros platform. When a luxury watch is fractionalized, it's divided into smaller, tradable units, which we refer to as "Eons." By purchasing an Eon, you are essentially buying a share of the physical asset, which allows you to partake in its future appreciation and trading. The first of many words playing with the concept of time for a product on the Huros platform!`,
      },
      {
        question: `How do I sell my EON or watch?`,
        answer: `Users are able to sell their Eons on the Eons Marketplace and at their desired price. We will also provide general price indications for each timepiece model to facilitate a good decision on how much to price an Eon.`,
      },
    ],
  },
  {
    header: "Investment and Ownership",
    qnas: [
      {
        question: "How does tokenized watch ownership work?",
        answer: `Tokenized watch ownership allows you to own a "fraction" or "share" of a luxury watch. When a watch is tokenized, its value is divided into smaller units, termed Eons on Huros. By purchasing Eons, you acquire a percentage of ownership in the watch, recorded securely on the blockchain.`,
      },
      {
        question: `How do I profit from my EON or watch ownership?`,
        answer: `You can profit in two primary ways: 

 

                1. Capital Appreciation: If the value of the watch increases, the value of your Eons increases proportionally. When a watch is sold at a profit, you obtain the proportional share of the profit according to your ownership level.  
                
                2. Sale of Eons: You can also profit by trading your Eons in the secondary market within the Huros platform.`,
      },
      {
        question: `Is there  a minimum investment required?`,
        answer: `Yes, the minimum investment varies depending on the individual watch and its total value. Detailed information is provided on each watch's listing page.`,
      },
      {
        question: `What fees are involved?`,
        answer: `We charge a nominal fee for transactions and for shipping when a watch is bought off the platform. All fees are transparently outlined before any purchase is made.`,
      },
    ],
  },
  {
    header: "$MINS Token",
    qnas: [
      {
        question: `What are the $MINS token?`,
        answer: `$MINS is the native utility token of the Huros ecosystem. It is used for transactions, governance, and accessing exclusive features and services on the platform.`,
      },
      {
        question: `How do I acquire $MINS tokens?`,
        answer: `You can acquire $MINS tokens through: 

 

                1. Participating in our pre-sale. 
                
                2. Trading on supported cryptocurrency exchanges when we are listed. 
                
                3. Earning them through our community events and governance participation. 
                
                4. Other means that will be announced via our social media.`,
      },
    ],
  },
  {
    header: "Security and Trust",
    qnas: [
      {
        question: `How secure is Huros?`,
        answer: `Huros will employ industry-leading security protocols, including encryption and multi-factor authentication, to ensure the security of your investments and personal data.`,
      },
      {
        question: `Is Huros audited?`,
        answer: `Yes, Huros will be regularly audited by third-party cybersecurity firms and smart contract auditors to ensure the highest standards of security.`,
      },
      {
        question: `How do you handle dispute and grievances?`,
        answer: `Disputes are handled through a transparent and structured resolution process, which will be outlined in our Terms of Service.`,
      },
      {
        question: `What are the risk factors involved?`,
        answer: `While we strive to minimize risks and ensure the best possible returns to our users, like any investment, there is the potential for loss. Users are encouraged to read our Risk Disclosure Statement for more details.`,
      },
    ],
  },
  {
    header: `Technology`,
    qnas: [
      {
        question: `Why is blockchain technology necessary for Huros?`,
        answer: `Blockchain ensures transparency, security, and immutable proof of ownership, thus making it ideal for tokenizing high-value physical assets like luxury watches.`,
      },
      {
        question: `What blockchain is Huros built on?`,
        answer: `Huros is built on the Ethereum blockchain, benefiting from its robust security and smart contract functionality.`,
      },
    ],
  },
  {
    header: "Community and Governance",
    qnas: [
      {
        question: `How can I join the Huros community?`,
        answer: `You can join us on Discord, where you'll find channels for announcements, discussions, and governance proposals. We are also active on various social media, which you can easily find at the bottom of the page.`,
      },
      {
        question: `How does community voting work?`,
        answer: `Owners of Eons and $MINS have certain voting rights on various governance proposals or for decisions relating to portfolio management, enabling community-driven development.`,
      },
      {
        question: `What are the benefits of joining the Discord server?`,
        answer: `By joining our Discord, you'll get real-time updates, access to exclusive community events, and the opportunity to participate in governance and networking with other users.`,
      },
    ],
  },
  {
    header: "Partnerships",
    qnas: [
      {
        question: `How can I partner with Huros?`,
        answer: `To explore partnership opportunities, you can reach out to us via the 'Contact Us' section on our website or email us directly.`,
      },
      {
        question: `What kind of partnerships is Huros looking for?`,
        answer: `We are open to various kinds of partnerships that align with our vision, including those with luxury watch brands, crypto platforms, and financial institutions.`,
      },
    ],
  },
  {
    header: "Support",
    qnas: [
      {
        question: `How do I contact customer support?`,
        answer: `You can reach customer support via the 'Contact Us' section on our website or through direct support channels on Discord.`,
      },
      {
        question: `What are the support hours?`,
        answer: `Our customer support is available 24/7 to assist you with any queries or issues you may have and will reply to your query as soon as possible.`,
      },
    ],
  },
];
