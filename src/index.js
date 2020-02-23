import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Quizbee extends React.Component{
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank : question
            });
        });
    };
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render(){   
        return (
            <div className = "container">
                <div className = "title">Watering trees!</div>
                {this.state.questionBank.length > 0 
                && this.state.responses < 5
                && this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => (
                        <QuestionBox 
                        question= {question} 
                        options = {answers} 
                        key={questionId}
                        selected = {answer => this.computeAnswer(answer, correct)}
                    />)
                ) }

                {this.state.responses === 5 ? (<h2>{this.state.score}</h2>): null}
            </div>
        );
    };
};

ReactDOM.render(<Quizbee />, document.getElementById('root'));
