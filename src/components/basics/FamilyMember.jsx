import React from 'react';

export default (props) => {
    return (
        <div>
            <h3>{props.name} <strong>{props.lastName} {props.familyName}</strong></h3>
        </div>
    )
}