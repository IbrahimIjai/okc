import React, { useState } from "react";
import FaqHelper from "./FaqHelper"
// import { id } from 'ethers/lib/utils';

export default function Faq() {
  const faq = [
    {
      id: 1,
      Head: <h3>What is the Qatar World Cup Event?</h3>,
      Body: (
        <div>
          <p>
            The Qatar World Cup event is a response from the team at Distance
            Labs to create an environment for expansion of Distant Finance
            products and its ecosystem as it ushers in new areas of research and
            products to release to the community, increase utility value to the
            $VOID token and benefit the community at its tail end
          </p>
        </div>
      ),
    },
    {
      id: 2,
      Head: <h3> How to make predictions </h3>,
      Body: (
        <div>
          <p>
            Its easy. Select a Game you want to predict and choose the outcome
            as you see fit. There are three options to select from. Click a
            button and your prediction happens automagically 😵‍💫
          </p>
        </div>
      ),
    },
    {
      id: 3,
      Head: <h3>Any rules one should know of? </h3>,
      Body: (
        <div>
          <p>
            Of course! We are not barbarians. But we live by code, not rules.
          </p>
          <ul>
            <li> Games are available to play if match has not started</li>
            <li>
              You can update your Prediction choice if the Game is yet to begin
            </li>
            <li>1 KCS is the minimum entry cost to participate</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      Head: <h3>Too much rules. Lets talk rewards 🤩</h3>,
      Body: (
        <div>
          <p>
            This is the fun part for me writing 🤤. For each game an address
            makes a prediction on, that address gets a draw chance to earn our
            Utility Qatari NFT. How it is to be conducted yet, I do not know 😪.
            The development team are keen on not sharing 😑
          </p>
        </div>
      ),
    },
    {
      id: 5,
      Head: <h3>Made a right prediction?</h3>,
      Body: (
        <div>
          <p>
            There is a prize pool of KCS for each game generated from the pooled
            funds as rewards to the Winners. It can be claimed on the Game page
            for said match
          </p>
        </div>
      ),
    },
    {
      id: 6,
      Head: <h3>Made a wrong prediction? </h3>,
      Body: (
        <div>
          <p>
            Oops. Sorry bud. You do not get any KCS rewards but on the bright
            side, you are still entered on the draw for the Qatari NFTs 😵 and
            also, you earn points in the null Airdrop event. <br /> winner
            winner chicken dinner 🥳
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen bg-green-100 dark:bg-BgDarkGreen">
      <div className="topicHead">
        <h3> Frequently Asked Question</h3>
      </div>
      <div className="questionsContainer">
        {faq.map((d, i) => {
          return (
            <div key={d.id}>
              <FaqHelper id={d.id} Body={d.Body} Head={d.Head} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
