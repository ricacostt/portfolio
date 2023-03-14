import React from "react";

function Card() {
  return (
    <>
    <div className="flex flex-row p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto justify-start gap-0 md:gap-10 overflow-auto ">
    
      <div className="flex flex-row justify-center card scale-75 xsm:scale-90 md:scale-100 max-w-sm shrink-0 shadow bg-buttonsecondarylight dark:bg-bgcard origin-top-left border border-buttonprimarydark	dark:border-bgdarkopa">
        <div className="card-body gap-4">
          <a  href="https://stokka.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold tracking-tight  dark:text-textdark text-textlight hover:text-buttontextlight dark:hover:text-textaccent"> Stokka </h2> </a>
          <p className=" text-textlight dark:text-textdark">
            A mobile-first website where the user can filter board games based
            on their needs and preferences and can be part of an active
            community.
          </p>
          <div className="flex flex-row flex-wrap text-xsm gap-2 pb-4 text-textlight dark:text-textdark">
            <p>Javascript</p>
            <p>Node.js</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>TailwindCSS</p>
            <p>Auth0</p>
          </div>
          <div className="card-actions justify-start gap-10">
            {/* <div className='card-actions justify-start '> */}
            <a
              href="https://stokka.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base stroke-textlight  dark:stroke-textdark hover:text-buttontextlight dark:hover:text-textaccent hover:stroke-buttontextlight dark:hover:stroke-textaccent"
            >
              Discover
              <svg
                className="feather feather-github w-5 h-5 ml-2 stroke-textlight dark:stroke-textdark  hover:stroke-buttontextlight dark:hover:stroke-textaccent"
                xmlns="http://www.w3.org/2000/svg"
                // width="20"
                // height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            {/* </div> */}
            <a
              href="https://stokka.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base hover:text-buttontextlight dark:hover:text-textaccent"
            >
              Live Demo
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* RubberyDucky */}
      <div className="flex flex-row justify-center card max-w-sm shrink-0 border border-buttonprimarydark	dark:border-bgdarkopa  shadow bg-buttonsecondarylight dark:bg-bgcard  scale-75 xsm:scale-90 md:scale-100 origin-top-left">
        {/* <figure><Image src="/ligthstokka.png" alt="stokka landing page" width="200" height='10' /></figure> */}
        <div className="card-body gap-4">
          <a  href="https://granchio4ducky.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold tracking-tight  dark:text-textdark text-textlight hover:text-buttontextlight dark:hover:text-textaccent"> Rubbery Ducky </h2> </a>
          <p className=" text-textlight dark:text-textdark">
          Rubbery Ducky is a platform where you can read, publish and comment completely anonymously. It is a blog aimed at allowing people to express problems, feelings, frustrations or just to have fun among us bootcamper peers. It also has an extra function that has the sole purpose of giving you feedback based on your mood; laughter is never enough!
          </p>
          <div className="flex flex-row flex-wrap text-xsm gap-2 pb-4 text-textlight dark:text-textdark">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Node.js</p>
            <p>React.js</p>
          </div>
          <div className="card-actions justify-start gap-10">
            <a
              href="https://github.com/SchoolOfCode/bc13_w9_project-frontend-team-granchio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base hover:text-buttontextlight stroke-buttontextlight  dark:stroke-textdark hover:stroke-buttontextlight dark:hover:text-textaccent"
            >
              Discover
              <svg
                className="feather feather-github w-5 h-5 ml-2 stroke-textlight dark:stroke-textdark hover:stroke-buttontextlight dark:hover:stroke-textaccent"
                xmlns="http://www.w3.org/2000/svg"
                // width="20"
                // height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            {/* </div> */}
            <a
              href="https://granchio4ducky.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-textlight dark:text-textdark hover:underline text-base hover:text-buttontextlight dark:hover:text-textaccent"
            >
              Live Demo
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
    <div>
    {/* <div className="carousel carousel-center rounded-box p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto">
  <div className="carousel-item">
  
    <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
  <div className="carousel-item">
  <Image src="/seasvg.svg" alt="Pizza" width='100' height='100' />
  </div> 
</div> */}
    </div>
    </>
  );
}

export default Card;
