import React from "react";
import im from "../images/copyoforiginal.jpg"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutLeft}>
        <img src={im} alt="about" />
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.aboutRightTitle}>About me</div>
        <div className={styles.aboutRightText1}>Over two years of developing web apps.</div>
        <div className={styles.aboutRightText2}>  
          I am a full-stack developer with expertise  in front-end programming. I primarily work
          with React/Redux and Javascript, with which I have built a couple of projects. I can  also work on
          the back-end  using Ruby on Rails and PostgreSQL hence can adapt to any role in any firm.<br/> <br/>
          I do enjoy teamwork and collaborating with others on projects. I believe teamwork gives 
          developers a chance to learn from each other. But with that being said, I can work solely on projects.
          <br/> <br/>
          I also enjoy solving problems around me.
          I believe life is a learning process and everyone can still learn new things so I make it a point
          to keep learning.
        </div>
      </div>
    </div>
  )
}

export default About;