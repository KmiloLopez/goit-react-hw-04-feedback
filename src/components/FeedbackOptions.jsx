import React from "react";
import { FeedbackBotton } from "./FeedbackOptions.styled";
import Proptypes from "prop-types";



const FeedbackOptions=({ incrementGood, incrementNeutral,incrementBad }) =>{
    return(

    <div>
        
        
            
                <li key="a">
                    <FeedbackBotton
                        onClick={() => {
                            incrementGood();
                        }}>
                        Good
                    </FeedbackBotton>
                </li>
                <li key="b">
                    <FeedbackBotton
                        onClick={() => {
                            incrementNeutral();
                        }}>
                        Neutral
                    </FeedbackBotton>
                </li>
                <li key="c">
                    <FeedbackBotton
                        onClick={() => {
                            incrementBad();
                        }}>
                        Bad
                    </FeedbackBotton>
                </li>
            
    
        
    </div>   
    )
};

FeedbackOptions.propTypes ={
    options:Proptypes.arrayOf(Proptypes.string.isRequired)
}
export default FeedbackOptions;