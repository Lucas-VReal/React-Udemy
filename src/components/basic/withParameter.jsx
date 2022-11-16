import React from 'react';

export default function withParameter(props){
    const status = props.nota>= 7 ? 'Aprovado(a)' : ' de Recuperação'
    return (
        
        <div>
            <h2>{props.title}</h2>
            <h3>
                A nota de <strong>{props.aluno}</strong>
                é <strong> {props.nota} </strong>
                e está <strong>{status}</strong>
            </h3>
        </div>
    )
}