import React from "react";
import { Btn } from "./btn";
import { Img } from "./images";
import { Link } from "./link";

interface FLnk {
    src : string;
}


const LnkFull = (props: FLnk) => {


    return (        
           <Btn>
            <Link>
                <Img src={props.src}/>
            </Link>
           </Btn>    
    )
}

export default LnkFull;