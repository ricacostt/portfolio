import { NextFetchEvent } from "next/server";
import React from "react";
import Card from "../Card/Card";

function Work() {
  return (
    <div className="xms:mt-16 md:mt-28" id="work">
      {/* <div className='text-textlight dark:text-textdark font-semibold text-3xl xsm:text-6xl pt-10 pl-6 pr-6 pb-0 xsm:pt-10 xsm:pl-10 xsm:pr-10 max-w-screen-xl mr-auto ml-auto'>Work.</div> */}
      <div className="text-textlight dark:text-textdark font-semibold text-xl xsm:text-3xl pt-10 pl-6 pr-6 pb-0 xsm:pt-10 xsm:pl-10 xsm:pr-10 max-w-screen-xl mr-auto ml-auto">
        Some things I&apos;ve Built
      </div>
      <div className="flex flex-row p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto justify-start gap-0 md:gap-10 overflow-auto ">
        <Card
          href={"https://stokka.netlify.app/"}
          appType={"Mobile Web Application"}
          appName={"Stokka"}
          description={
            "Choosing the right board game at a venue can be a confusing experience. Stokka allows customers to filter, sort and search for board games based on their needs and preferences, find trustable reccomendations and help them to become part of an active community."
          }
          tech1={"Javascript"}
          tech2={"Node.js"}
          tech3={"React.js"}
          tech4={"Next.js"}
          tech5={"TailwindCSS"}
          tech6={"Auth0"}
          github={
            "https://github.com/SchoolOfCode/bc13_final-project_front-end-oh-shift"
          }
        />
        <Card
          href={"https://granchio4ducky.netlify.app/"}
          appType={"Web Application"}
          appName={"RubberyDucky"}
          description={
            "A platform where bootcampers can read, publish and comment completely anonymously. It is a blog aimed at allowing people to express problems, feelings, frustrations or just to have fun among us bootcamper peers. It also has an extra function that has the sole purpose of giving you feedback based on your mood; laughter is never enough!"
          }
          tech1={"HTML5"}
          tech2={"CSS3"}
          tech3={"Javascript"}
          tech4={"Node.js"}
          tech5={"React.js"}
          github={
            "https://github.com/SchoolOfCode/bc13_w9_project-frontend-team-granchio"
          }
        />
         <Card
          appType={"UI/UX Mobile Application"}
          appName={"GrabGo"}
          description={
            "GrabGo mobile app aims to simplify the food ordering process for a large fast food chain, allowing users to easily place orders for eat-in or pick-up. With a user-friendly interface and intuitive design, our target users are busy individuals who want to quickly order and pay their favorite fast food items without any hassle."
          }
          tech1={"User Research"}
          tech2={"Digital Wireframes"}
          tech3={"Prototyping"}
          tech4={"Usability Testing"}
         figma={'https://www.figma.com/proto/Rnmtz0pmwKAd4heQzCoHaD/Mobileapp---prototype?page-id=18%3A862&node-id=76%3A218&viewport=289%2C332%2C0.2&scaling=scale-down&starting-point-node-id=76%3A218'}
         presentation={'https://docs.google.com/presentation/d/1rPdY_OPrYQjvtYrEP4scR4lzHNF2n1iA0jSdg67SD6Y/edit?usp=sharing'}
        />
        <Card
          appType={"Website"}
          appName={"Weather Checker"}
          description={
            "A simple website where you can check the current weather and he forecast for the day with a 3h frequency of the city of your choice."
          }
          tech1={"HTML5"}
          tech2={"CSS3"}
          tech3={"Typescript"}
          tech4={"React.js"}
          techAPI={"WeatherAPI"}
          hrefAPI={"https://openweathermap.org/api"}
          github={
            "https://github.com/SchoolOfCode/bc13_w12d5_hackathon_react-typescript-rica-greg-room50"
          }
        />
        <Card
          appType={"Personal Website"}
          appName={"Portfolio"}
          description={"A showcase of my skills and passion in the world of software development and UX Design."}
          tech1={"Javascript"}
          tech2={"React.js"}
          tech3={"Next.js"}
          tech4={"TailwindCSS"}
          github={"https://github.com/ricacostt/portfolio"}
        />
      <Card
        href={"https://news-ricacostt.netlify.app/"}
        appType={"Website"}
        appName={"Fast News"}
        description={
          "A fast news website that includes a collection of the current trending news in english, from all over the world and of all categories. The search bar allows you to search for news items of interest to you, just enter a keyword (ex. India) to receive all the news items where that keyword is present."
        }
        techApi={"GNews API"}
        hrefAPI={"https://gnews.io/"}
        tech1={"Javascript"}
        tech2={"React.js"}
        tech3={"TailwindCSS"}
        github={"https://news-ricacostt.netlify.app/"}
      />
      </div>
    </div>
  );
}

export default Work;
