import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super();
        // set the default internal state
        this.state = {
            clicks: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        this.refs.myComponentDiv.addEventListener(
            'click', 
            this.clickHandler
        );
    }

    componentWillUnmount() {
        this.refs.myComponentDiv.removeEventListener(
            'click', 
            this.clickHandler
        );
    }

    clickHandler() {
        this.setState({
            clicks: this.state.clicks + 1
        });  
    }

    render() {
        let children = this.props.children;

        return (
            <div className="my-component" ref="myComponentDiv">
                <h2>My Component ({this.state.clicks} clicks)</h2>
                <h3>{this.props.headerText}</h3>
                {children}
            </div>
        );
    }
}

ReactDOM.render(<MyComponent headerText={"this is headerText"} children={"this is children"}/>,document.getElementById('root'));