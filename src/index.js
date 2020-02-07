import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom"
import "./index.css"
import registerServiceWorker from './registerServiceWorker';
import App from "./App"
import 'font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();