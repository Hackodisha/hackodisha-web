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

// function SilverSpons(props){
//   return(
//     <a
//           href="https://polygon.technology/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             className="logo-mid"
//             src={props.img}
//             alt={props.alt}
//             style={props.style}
//           />
//         </a>

// );
// }




