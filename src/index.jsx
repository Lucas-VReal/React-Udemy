import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import First from './components/basic/first';
import WithParameter from './components/basic/withParameter'

ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter title="Situação do Aluno" aluno="Pedro" nota = {9.3}/>
    </div>,
     document.getElementById('root')
     );





