import React from "react";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import Image from "next/image";

function Homepage() {
  return (
    <>
      <div className="md:flex md:flex-row p-6 xsm:p-10 max-w-screen-xl mr-auto ml-auto gap-10">
        <div className="leftcol flex flex-col max-w-md gap-4 md:gap-8 mb-8 ">
          {/* <Image className="w-16" src='fedepixel.svg' width='96' height='96'/> */}
          <div className="cit flex flex-col">
            <h1 className="text-textlight dark:text-textdark text-xl xsm:text-3xl italic ">
            {/* I love reading, travelling, designing, cooking, coding, learning, playing, swimming, listening, creating. */}
            
           
           &quot;I code Monday to Friday and occasionally in my dreams.  I am a globetrotter, yogi, kung fu artist, and tennis enthusiast.&quot; 
            
            
            </h1>
         {/* <p className="text-base"> But don&apos;t worry; I still find time to indulge my other passions like reading, designing, swimming, cooking, travelling and playing.</p> */}
          </div>
          <div className="flex flex-row flex-wrap gap-5 buttons">

<Button text={'GITHUB'} href={'https://github.com/ricacostt'} aria={'link to my github page'}/>
<Button text={'LINKEDIN'} href={'https://www.linkedin.com/in/federica-costantino/'} aria={'link to my linkedin page'}/>
<Button text={'TWITTER'} href={'https://twitter.com/ricacostt'} aria={'link to my twitter page'}/>
<Button text={'CODEWARS'} href={'https://www.codewars.com/users/ricacostt'} aria={'link to my codewars page'}/>
<Button text={'RESUME'} href={'https://www.dropbox.com/scl/fi/gaoq6iduizuf1a9cimn4r/FedericaCostantinoCV.pdf?rlkey=5tvqza3eb3efaypsqgo2ewzsx&dl=0'} aria={'link to my resume on dropbox'}/>

        {/* <div>
  <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/ricacostt"><img src="https://www.codewars.com/users/ricacostt/badges/micro" alt="codewars badge micro" /></a>

  </div> */}
          </div>
        </div>
      <div className="rightcol flex flex-col gap-10">
        <div className="about">
          <p className="text-textlight dark:text-textdark text-base xsm:text-xl">
            👋🏻 Hi I’m Federica,
            <br/>  I&apos;m a woman, an economist turned<span className="text-textaccent"> Software Engineer</span> currently working at <a className="underline" aria-label="link to ADP main page" target="_blank"
              rel="noopener noreferrer" href="https://uk.adp.com/">ADP</a>.
            <br/>
            <br/>
            I love nothing more than bringing ideas to life through coding and creativity.
            <br/> 
            <br/>
            My journey into development started last summer when I decided to take the plunge and enroll in a full-stack development bootcamp. Let&apos;s just say, I didn&apos;t look back. 
           
             
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
