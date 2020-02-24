import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/header'
import Body from './Components/body'
import Footer from './Components/footer'

function App() {
    const style = {
        main:{ 
            width:"99%",
            height:"99vh",
            border:"solid white 1px",
            margin:"0%"
        }
    }

    return<div style={ style.main }>
        <Header/>
        <Body/>
        <Footer/>
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
