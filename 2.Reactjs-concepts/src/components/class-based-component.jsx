import { Component } from "react";

class classbasedcomponent extends Component{

    //state  
    state={
        showText:false,
        changeColor:false
    }

    handleClick=()=>{
        console.log("Buttone clicked")
        //this is not recomends to toggle the state
        //this.showText=!this.showText   so use state mangemet  i.e state and sestate
        const {showText,changeColor}=this.state

        this.setState({
            //showText:!this.state.showText
            showText:!showText,
            changeColor:!changeColor
        })

    }
    /*  another way  to access the state 
    constructor(props){
       super(props)
       this.state={
            showText:false
          }

    }
 */


    /*   class */
    render(){
        //this os thw way to access the state of a object here state i s an object
        console.log(this.state)
        const {showText,changeColor}=this.state

        return(
            <div>
                <h1>class based components</h1>
                {showText? <h3 style={{color:changeColor ? 'red' :"black" }}>Class Based Components</h3>   :null}
                <button onClick={this.handleClick}>Toggle Text</button>

            </div>
        )

    }
}

export default classbasedcomponent