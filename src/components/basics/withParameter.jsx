import React from 'react';

export default function withParameter(props){
    const status = props.score>= 7 ? ' Passed' : ' failed the exam'
    return (
        
        <div>
            <h2>{props.title}</h2>
            <h3>
                <strong>{props.student}'s test result is {props.score} points and he {status}</strong>
            </h3>
        </div>
    )
}