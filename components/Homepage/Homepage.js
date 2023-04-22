import React from "react";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";

function Homepage() {
  return (
    <>
      <div className="md:flex md:flex-row p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto gap-4">
        <div className="leftcol flex flex-col gap-4 md:gap-8 mb-8 ">
          <div className="cit flex">
            <h1 className="text-textlight dark:text-textdark text-xl xsm:text-3xl italic ">
              &quot;But the eyes are blind. One must look with the heart.&quot;
            </h1>
          </div>
          <div className="flex flex-row flex-wrap gap-5 buttons">

<Button text={'GITHUB'} href={'https://github.com/ricacostt'} aria={'link to my github page'}/>
<Button text={'LINKEDIN'} href={'https://www.linkedin.com/in/federica-costantino/'} aria={'link to my linkedin page'}/>
<Button text={'TWITTER'} href={'https://twitter.com/ricacostt'} aria={'link to my twitter page'}/>
<Button text={'RESUME'} href={'https://www.dropbox.com/s/wkwahbhjh4wxud0/FedericaCostantinoCV.pdf?dl=0'} aria={'link to my resume on dropbox'}/>

        {/* <div>
  <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/ricacostt"><img src="https://www.codewars.com/users/ricacostt/badges/micro" alt="codewars badge micro" /></a>

  </div> */}
          </div>
        </div>
      <div className="rightcol flex flex-col gap-10">
        <div className="about">
          <p className="text-textlight dark:text-textdark text-base xsm:text-xl">
            👋🏻 Hi I’m Federica, 
            <br/>I’m a woman, an economist turned full-stack
            developer. 
            <br/>
            <br/>
            I love reading, jumping, smiling, singing, travelling,
            running, designing, cutting, cooking, coding, learning, discovering,
            playing, swimming, listening, creating.
            <br/>
            <br/> When I’m not learning or
            coding, I’m developing my next pasta recipe.
          </p>
        </div>
        <div className="contact text-textlight dark:text-textdark font-bold underline text-base xsm:text-xl hover:text-textaccent dark:hover:text-textaccent">
          <a aria-label="link to my send me an email" href="mailto:ricacostt@gmail.com" target="_blank"
              rel="noopener noreferrer">Get in touch.</a>
        </div>
      </div>
      </div>
      <div>
        <Work/>
        <Footer/>
      </div>
    </>
  );
}

export default Homepage;
