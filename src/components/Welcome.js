import React from 'react';
import Header from './Header';


export default class Welcome extends React.Component{

    render() {
        return (
            <div>
            <h2>This is a Welcome Component !!</h2>
            <Header/>
            </div>
        )
    }

}