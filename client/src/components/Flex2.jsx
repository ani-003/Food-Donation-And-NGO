import React from "react";
import './style/ani.css';
import Reviewbox from "./Rating";
import GridComponent from "./Button";
import Catelog from "./Catelog";


const Flex2 = () => {
    return (
        <>

            <div  className="container col-lg-8 col-md-8 col-sm-12 flex1">

                <div className="container d-flex flex-column col-lg-9 flex-2">
                    

                    <GridComponent />
                    <br />
                
                    <Reviewbox />
                    <br />
                    
                </div>

                <Catelog />

            </div>

        </>
    )
}

export default Flex2;

