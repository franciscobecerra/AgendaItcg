import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }

    render(){
        const style = {
            main:{ 
                width:"100%",
                borderBottom:"solid black 1px",
                textAlign:"center"
            }
        }
        return<div style={ style.main }>
            <p>Tecnológico Nacional de México</p>
            <p>Instituto Tecnológico de Ciudad Guzmán</p>
            <p>Avenida Tecnológico #100.</p>
            <p>Ciudad Guzmán, Mpio. de Zapotlán el Grande, Jalisco, México.</p>
            <p>Teléfono: 341 575 20 50</p>
        </div>
    }
}