import React from "react";
import { useState } from "react";

import { Statistics } from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import { Section } from "./Section";
import {Notification} from "./Notification"
import { Container } from "./ReviewsCollected.styled";

    

    const ReviewsCollected = () =>{
  
        const [Good, setGood] =useState(0);
        const [Neutral, setNeutral] = useState(0);
        const [Bad, setBad] = useState(0);
    
        const incrementGood=()=> {
            setGood((s)=>s+1);
            
        }
        const incrementNeutral=()=> {
            setNeutral((s)=>s+1);
        }
        const incrementBad=()=> {
            setBad((s)=>s+1)
        }
        const countTotalFeedback = () => {
            let totale = Good + Neutral + Bad;
            return totale;
        };
        const countPositiveFeedbackPercentage = ()=> {
            let percent = Math.round(
                (Good /
                    (Good + Neutral + Bad)) *
                    100
            );
            return percent;
        }
    /* Hay forma de hacer esto con hooks?
        const leaveFeedback = (option) => {
            `set${option}`((prevState) =>
                prevState + 1,
            );
        }; */
    
    
        /* const {good, neutral, bad}=this.state;  */
        

        return (
            <Container>
                <Section tittle="Please leave a feedback">
                    <FeedbackOptions
                        incrementGood={incrementGood}
                        incrementNeutral={incrementNeutral}
                        incrementBad ={incrementBad}
                    />
                </Section>

                <Section tittle="Statistics">
                  {countTotalFeedback()===0?(<Notification message="There is no feedback"></Notification>):
                  <Statistics
                  good={Good}
                  neutral={Neutral}
                  bad={Bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
              />
                  }
                    
                </Section>
            </Container>
        );
    
  
}
export default ReviewsCollected;
    

