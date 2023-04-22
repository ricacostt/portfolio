import React from 'react'
import { BsDisplay } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import {FiExternalLink} from "react-icons/fi"




function Card({href, hrefAPI, appType, appName, description, tech1, tech2, tech3, tech4, tech5, tech6, techAPI, github, figma, presentation}) {
  return (
    <div className='flex flex-row justify-center card scale-75 xsm:scale-90 md:scale-100 max-w-sm shrink-0 shadow bg-buttonsecondarylight dark:bg-bgcard origin-top-left border border-buttonprimarydark	dark:border-bgdarkopa'>
      <div className='card-body gap-4'>
        <a aria-label="Read more about the project" href={href} target='_blank' rel="noopener noreferrer">
        <span className="text-buttontextlight dark:text-textaccent">
                {appType}
              </span>
              <h2 className="text-2xl font-semibold tracking-tight  dark:text-textdark text-textlight hover:text-buttontextlight dark:hover:text-textaccent">
                {appName}
              </h2>
        </a>
        <p className=" text-textlight dark:text-textdark">
              {description}
            </p>
            <div className="flex flex-row flex-wrap text-xsm gap-2 pb-4 text-textlight dark:text-textdark">
              <a aria-label="Read more about the API"
                className="hover:underline hover:text-buttontextlight dark:hover:text-textaccent"
                href={hrefAPI}
              >
                <p>{techAPI}</p>
              </a>
              <p>{tech1}</p>
              <p>{tech2}</p>
              <p>{tech3}</p>
              <p>{tech4}</p>
              <p>{tech5}</p>
              <p>{tech6}</p>
            </div>
            <div className="card-actions justify-start gap-10">
{github &&  <a aria-label="Read more about the code in github"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base stroke-textlight  dark:stroke-textdark hover:text-buttontextlight dark:hover:text-textaccent hover:stroke-buttontextlight dark:hover:stroke-textaccent"
              >
                Discover
                <VscGithubAlt
                  className=" w-5 h-5 ml-2 stroke-textlight dark:stroke-textdark  hover:stroke-buttontextlight dark:hover:stroke-textaccent"/>
                 
              </a>}
           
          {href &&  <a aria-label="Read more about the live demo"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base hover:text-buttontextlight dark:hover:text-textaccent"
              >
                Live Demo
                <FiExternalLink
                  className="w-5 h-5 ml-2"/>
                  
              </a>}
              {figma &&  <a aria-label="Read more about the figma prototype"
                href={figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base stroke-textlight  dark:stroke-textdark hover:text-buttontextlight dark:hover:text-textaccent hover:stroke-buttontextlight dark:hover:stroke-textaccent"
              >
                Lo-fi Prototype
                <FaFigma className="w-5 h-5 ml-2 feather feather-figma" />
              </a>}
              {presentation &&  <a aria-label="Read more about the project, ask for permission to see presentation"
                href={presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base stroke-textlight  dark:stroke-textdark hover:text-buttontextlight dark:hover:text-textaccent hover:stroke-buttontextlight dark:hover:stroke-textaccent"
              >
                Read More
               <BsDisplay className='ml-2 w-5 h-5 stroke-textlight dark:stroke-textdark  hover:stroke-buttontextlight dark:hover:stroke-textaccent'/>
              </a>}
            </div>
      </div>
    </div>
  )
}

export default Card
