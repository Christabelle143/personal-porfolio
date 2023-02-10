import React from "react";
import Project from "../components/Project";
import styles from "./Projects.module.css"
import mentors from "../images/projects/covid-19-app.PNG"
import bookstore from "../images/projects/bookstore2.PNG"
import math from "../images/projects/Reactcapstone.PNG"
import todo from "../images/projects/calculator.PNG"
import leaders from "../images/projects/1stproject.PNG"
import portfolio from "../images/projects/leaderboard2.PNG"

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.title}>My Projects</div>
      <div className={styles.projectsSection}>
        <div className={styles.projectsSection1}>
          <Project 
            name="Covid-19-app"
            description="COVID-19 Data is a tracking site that provides the necessary information on COVID-19 cases in any African country and their updates. Built with React and Redux."
            im={mentors}
            liveLink="https://christabelle143-78cc21.netlify.app/"
            source="https://github.com/Christabelle143/covid-19-app"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="Bookstore"
            description="Awesome Books website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book. Built with React, Sass and JavaScript."
            im={bookstore}
            liveLink="https://christabelle143-abb92a.netlify.app/"
            source="https://github.com/Christabelle143/bookstore"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="Chef Food Restuarant"
            description="This is a first capstone project and it's about a restuarant website called Chef Food Restaurant. It features a list of traditional dishes, an about page and partner sections. Made using HTML , CSS and Javacsript."
            im={leaders}
            liveLink="https://christabelle143.github.io/Capstone1/"
            source="https://github.com/Christabelle143/Capstone1"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project
            name="Leaderboard"
            description="A site connected to an API to allow gamers record their scores and view other player's scores."
            im={portfolio}
            liveLink="https://christabelle143.github.io/Leaderboard/"
            source="https://github.com/Christabelle143/Leaderboard"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project
            name="Space Travelers' Hub"
            description=" This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Built with React, Redux Toolkit, API, CSS and JavaScript."
            im={math}
            liveLink="https://christabelle143-a00257.netlify.app/"
            source="https://github.com/Christabelle143/react-group-project"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="Math magicians"
            description="Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote. Built with React, CSS and JavaScript"
            im={todo}
            liveLink="https://christabelle143-maths-magician-2.netlify.app/"
            source="https://github.com/Christabelle143/maths-magician-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects;