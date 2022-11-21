import styles from "../styles/HHome.module.css"
import react, { useState } from "react";

export default function Home() {


  const AllTabs = [
    {
      Id: 1,
      Title: "The world Cup",
      Content: (
        <div>
           <p>Join the hottest event  on kcc betting your favorite countries to win the world cup matches and the world cup</p>
        </div>
      ),
    },
    { 
      Id: 2, 
      Title: "Our GamePlan", 
      Content: (
      <div>
        <p>222Join the hottest event  on kcc betting your favorite countries to win the world cup matches and the world cup</p>
      </div>
      )
    },
    { 
      Id: 3, 
      Title: "Rules", 
      Content: (
      <div>
        <p>333Join the hottest event  on kcc betting your favorite countries to win the world cup matches and the world cup</p>
      </div>
      )
    },
    { 
      Id: 4, 
      Title: "Rewards", 
      Content: (
      <div>
        <p>441Join the hottest event  on kcc betting your favorite countries to win the world cup matches and the world cup</p>
      </div>
      )
    },
  ];

  const [CurTab, setCurTab] = useState(AllTabs[0]);


  return (
    
    <div className={styles.HomeContainer}>
      <div className={styles.Heros}>
        <div className={styles.Hero}>
            <p className={styles.boldTxt}>FIFA World Cup 2022 on   KCC</p>
            <p className={styles.Txt}> Join the hottest event  on kcc betting your favorite countries to win the world cup matches and the world cup</p>
            <div className={styles.herosBtn}>
              <div> Get Started</div>
              <div>Buy Now</div>
            </div>   
        </div>
      </div>


      <div className={styles.body}>
        <div className={styles.bodyNav}>
          {AllTabs.map((d) => {
            return (
              <div className={styles.bNav}
                onClick={() => {
                  if (CurTab.Id !== d.Id) setCurTab(d);
                }}
                key={d.Id}
                active={CurTab.Id === d.Id}
              >
                {d.Title}
              </div>
            );
          })}
        </div>
        <div className={styles.correspondinContent}>
          {CurTab.Content}
        </div>

      </div>
    </div>
  )
}