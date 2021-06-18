import React from "react";


 export default function MediaCard(props){
    return(
        <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={props.className}
                src={props.img}
                alt={props.alt}
                style={props.style}
              />
            </a>

    );
}





