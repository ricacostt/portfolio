import React from "react";

function Homepage() {
  return (
    <>
      <div className="flex flex-row p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto gap-4">
        <div className="leftcol flex flex-col gap-8">
          <div className="cit flex">
            <h1 className="text-textlight dark:text-textdark text-3xl italic ">
              &quot;But the eyes are blind. One must look with the heart&quot;
            </h1>
          </div>
          <div className="flex flex-row flex-wrap gap-4 buttons">
            <a>
              <button
                type="button"
                className=" text-buttontextlight dark:text-textdark bg-buttonsecondarylight 
                dark:bg-buttonsecondarydark text-xsm tracking-normal font-bold pr-2 pl-2 pt-1 pb-1 rounded-3xl
  sm:text-sm sm:tracking-wider"
              >
                GITHUB
              </button>
            </a>
            <a>
              <button
                type="button"
                className=" text-buttontextlight dark:text-textdark bg-buttonsecondarylight 
                dark:bg-buttonsecondarydark text-xsm tracking-normal font-bold pr-2 pl-2 pt-1 pb-1 rounded-3xl
  sm:text-sm sm:tracking-wider"
              >
                LINKEDIN
              </button>
            </a>
            <a>
              <button
                type="button"
                className=" text-buttontextlight dark:text-textdark bg-buttonsecondarylight 
                dark:bg-buttonsecondarydark text-xsm tracking-normal font-bold pr-2 pl-2 pt-1 pb-1 rounded-3xl
  sm:text-sm sm:tracking-wider"
              >
                TWITTER
              </button>
            </a>
            <a>
              <button
                type="button"
                className=" text-buttonsecondarylight dark:text-bgdark bg-buttonprimarylight 
                dark:bg-buttonprimarydark
                text-xsm tracking-normal font-bold pr-2 pl-2 pt-1 pb-1 rounded-full
       sm:text-sm sm:tracking-wider"
              >
                WORK.
              </button>
            </a>
          </div>
        </div>
      <div className="rightcol flex flex-col gap-10">
        <div className="about">
          <p className="text-textlight dark:text-textdark text-xl">
            👋🏻 Hi I’m Federica, 
            <br/>I’m a woman, an economist turned front-end
            developer. 
            <br/>
            <br/>
            I love cooking, jumping, smiling, singing, travelling,
            running, designing, cutting, cooking, jumping, smiling, singing,
            travelling, running, designing, cutting.
            <br/>
            <br/> When I’m not learning or
            coding, I’m developing my next pasta recipe.
          </p>
        </div>
        <div className="contact text-textlight dark:text-textdark font-bold underline text-xl">
          <a href="mailto:ricacostt@gmail.com">Get in touch.</a>
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
