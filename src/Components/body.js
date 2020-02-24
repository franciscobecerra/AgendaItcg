import React from 'react';

export default class Body extends React.Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }

    render(){
        const style = {
            main:{ 
                width:"100%",
                height:"80vh",
                borderBottom:"solid pink 1px",
                margin:"0%",
                overflow: "scroll",
            },
            Dias:{
                display:"flex",
                // overflowX: "scroll",
                // overflow: "scroll",
            },
        }

        let dias = ["Lunes","Martes","Miercoles","Jueves"];

        return<div style={ style.main }>
            <div style={style.Dias}>
                {
                    dias.map( i => (
                        <Dias day={ i } valor={false}/>
                    ))
                }
            </div>
        </div>
    }
}

function Dias(props){

    const style = {
        Dias:{
            width:"300px",
            margin:"2%",
            border:"solid 1px green",
        },
        DiasHeader:{
            borderBottom:"solid 1px pink",
            margin:"Auto"
        },
        DiasBody:{
            borderBottom:"solid 1px pink",
        },
        DiasFooter:{
            borderBottom:"solid 1px pink",
        },
        Horas:{
            width:"100%",
            height:"50px",
            border:"solid 1px",
        }
    };

    return<div style={style.Dias}>
        <div style={style.DiasHeader}>
            <h1 style={ {"textAlign":"center"} }>{props.day}</h1>
        </div>
        <div style={style.DiasBody}>
            <h1>7:00</h1>
            <h1>8:00</h1>
            <h1>9:00</h1>
            {
                (props.valor) ? <h1>10:00 <button title="Agregar "/> </h1> :
                <null/>
                
            }
            <h1>11:00</h1>
            <h1>12:00</h1>
            <h1>13:00</h1>
            <h1>14:00</h1>
            <h1>15:00</h1>
            <h1>16:00</h1>
            <h1>17:00</h1>
            <h1>18:00</h1>
        </div>
        <div style={style.DiasFooter}>
            <h1>Footer</h1>
        </div>
    </div>
}