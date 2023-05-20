import React from 'react'
import Styles from '../CSS/from.module.css'

export default class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            firstName  : "",
            lastName : ""
        }
    }

    handleFirstName = (e) =>{
        // let {firstName} = this.state;
        // firstName += e.target.value;
        this.setState({
            firstName : e.target.value
        })
    }

    handleLastName = (e) =>{
        // let {lastName} = this.state;
        //lastName += e.target.value;
        this.setState({
            lastName : e.target.value
        })
    }

    componentDidMount(){
        document.title = this.state.firstName
    }

    componentDidUpdate(){
        document.title = this.state.firstName
    }


    render(){
        return (
            <>
                <div className={Styles.form}>
                    <label className={Styles.labels}> Name : </label><br/>
                    <input onKeyUp={this.handleFirstName} className={Styles.inputField} type="text" placeholder="Name" /><br/>
                    <hr />
                    <label className={Styles.labels}> LastName </label><br/>
                    <input onKeyUp={this.handleLastName} className={Styles.inputField} type="text" placeholder="LastName" />
                    <hr />
                    <h2>Hello {this.state.firstName} {this.state.lastName} </h2>
                </div>
    
            </>
        )
    }
    
}