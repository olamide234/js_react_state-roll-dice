// addressing setState issues
import React, { Component } from 'react'

export default class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {score : 0};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        // Not a good way to update state if it 
        // relies on existing state values
        this.setState({score: this.state.score + 1});
    }
    // tripleKill() { 
    //     // this.setState({score: this.state.score + 1});
    //     // this.setState({score: this.state.score + 1});
    //     // this.setState({score: this.state.score + 4});

    //     // with the above three instance of setState, but 
    //     // the one being implemented is the very last one.
    //     // setState() is asynchronous, so, it's risky to 
    //     // assume previous call has been finished when you call it.
    //     // Also, React someimes batch calls to setState together into one 
    //     // for performance reasons
    //     // So, in a case like this where call to setState() depends on 
    //     // current state, it's safest to use the alternate "callback form"
    //     this.setState(curState => {
    //         return {score : curState.score + 1};
    //     });
    //     this.setState(curState => {
    //         return {score : curState.score + 1};
    //     });
    //     this.setState(curState => {
    //         return {score : curState.score + 1};
    //     });
    // }

    // for testing purposes or use with redux, the above function can be written like
    incrementScore(curState) {
        return {score : curState.score + 1};
    }
    tripleKill(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);  
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        )
    }
}
