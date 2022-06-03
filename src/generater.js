import React from "react";

class Generater extends React.Component{

    constructor(props){
        super(props);
        this.imagelinks = [];
        this.state = {
            render: false
        }
    }


    generateHandler = ()=>{
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        var firsthalf = "http://student.mcet.in/ImageHandler.ashx?roll_no=";
        var template = document.getElementById('template').value;
        var secondhalf = "%20%20%20%20%20%20%20&sMenu=ST";
        
            for(let i=start*1;i<end;i++){
                this.imagelinks.push(firsthalf+template+"0"+i+secondhalf);
            }
        
        this.setState({render: true});
    }

    render(){
        return(
            <div>
                <div>
                    <label>Rollno Template (Eg: 12MEC)</label>
                    <input type="text" id="template"/>
                    <label>starting Range</label>
                    <input type="text"  id="start"/>
                    <label>Ending Range</label>
                    <input type="text" id="end" />
                    <button onClick={this.generateHandler}>Generate</button>
                </div>
                <div>
                    {this.imagelinks.map((link) => {
                        return(
                            <div>
                                <img width="80%" height="80%" src={link} alt="nothing" />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Generater;