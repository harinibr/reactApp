import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name='Harini';
// const ele = <h1>Hello, {name}</h1>;
function formatUserName(user) {
    return user.fn + ' ' + user.ln;
}
const user = {
    'fn':'Harini',
    'ln': 'Radhakrishna'
};

function getGreeting(usr){
    if(usr){
        return <h1>Hello, {formatUserName(usr)}</h1>;
    }
    return <h1>Hello, Stranger</h1>;
}

const ele = (
    <h1>Hello, {formatUserName(user)}!</h1>
);
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}
// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>;
// }
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
const clsElement = <Welcome name="Sara" />


function App(){

    return(
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Latha" />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// setInterval(tick,1000);
