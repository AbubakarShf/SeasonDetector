import React from 'react';
import './seasonDisplay.css';

// Object
const seasonConfig={
    summer:{
        text: 'Lets hit the beach!',
        iconName:'sun',
        color:'rgb(243, 243, 116)',
    },
    winter:{
        text:'Burrr it is cold',
        iconName:'snowflake',
        color:'rgb(34, 159, 241)',
    }
};



const getSeason=(lat,month)=>{
    if(month>2 && month<9)
    {
        return lat>0? 'summer':'winter';
    }
    else
    {
        return lat>0? 'winter':'summer';
    }
}


const seasonDisplay=(props)=>{
    const season=getSeason(props.lat,new Date().getMonth());
    const {text,iconName,color}=seasonConfig[season];
    return (
            <body style={{backgroundColor: color}}>
            <div className={`season-Display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`}/>
                <h2>{text}</h2>
                <i className={`icon-right massive ${iconName} icon`}/>
            </div>
                </body>
    );
};
export default seasonDisplay;