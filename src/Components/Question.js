import React, { Component } from "react";

import MyTimer from './MyTimer'


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions:{
            'question': 'which is the capital city of Israel?',
            'correct': 'Jerusalem',
            'a' : 'Tel-Aviv',
            'b' : 'Haifa',
            'c': 'Eilat'
          },
        }
      }


    render() {
        return (
            <div style= {{ padding: '7em'}}>
                <MyTimer />
             <h1> { this.state.questions.question } </h1>




            </div>
        );
    }
}

export default Question;
