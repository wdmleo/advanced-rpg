import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import './Grid.sass'

class App extends React.Component {

    render() {
        return (
            <div className="main">
                <BrowserRouter>
                    <Route path="/" component={Home} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;