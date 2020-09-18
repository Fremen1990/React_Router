import React, { Component } from "react";

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Home = () => {
    console.log("rendering...")
    return (
        <h1>Start page</h1>
    )
}
const News = () => {
    console.log("render")
    return (
        < h1 > News</h1 >

    )

}

const Contact = () => <h1>Contact me</h1>




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                {/* <li><a href="Start">Start</a></li>
                                <li><a href="News">News</a></li>
                                <li><a href="Contact">Contact</a></li> */}

                                <li><Link to="Start">Start</Link></li>
                                <li><Link to="News">News</Link></li>
                                <li><Link to="Contact">Contact</Link></li>

                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Route path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/contact" component={Contact} />
                    </section>
                </div>
            </Router>
        )
    }
}
export default App;
