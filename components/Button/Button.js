import React from "react";

function Button({ text, href, aria }) {
  return (
    <div className="containe flex">
      <a aria-label={aria} href={href} target="_blank" rel="noopener noreferrer">
      
{text === 'RESUME' ? <button type='button' className="text-buttonsecondarylight dark:text-bgdark bg-buttonprimarylight 
                dark:bg-buttonprimarydark
                text-sm font-bold px-3 py-1 rounded-full
       tracking-widest">{text}</button> : <button
          type="button"
         className="text-buttontextlight dark:text-textdark bg-buttonsecondarylight 
                dark:bg-buttonsecondarydark text-sm font-bold px-3 py-1 rounded-3xl
  sm:text-sm tracking-widest" 
              >
          {text}
        </button>}


        
      </a>
    </div>
  );
}

export default Button;