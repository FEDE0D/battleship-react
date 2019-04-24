import React from "react";
import { Link } from "react-router-dom";

const WelcomeRoute = () => {
    return (
        <div>
            <h1>WELCOME!</h1>
            <Link to="/game">PLAY</Link>
        </div>
    )
}

export default WelcomeRoute;