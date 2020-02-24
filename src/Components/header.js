import React from 'react';
import logo from './header.jpg';

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }

    render(){
        const style = {
            main:{ 
                width:"100%",
                borderBottom:"solid green 1px",
                margin:"0%"
            },
            img:{
                width:"100%"
            }
        }

        return<div style={ style.main }>
            <img src={logo} style={style.img} alt="header" />
            <Bar/>
        </div>
    }
}

function Bar(props){

    const style = {
        main:{
            width:"100%",
            border:"solid",
            textAlign:"center"
        }
    }

    return<div style={style.main} >
        <h1>barra chida</h1>
    </div>
}