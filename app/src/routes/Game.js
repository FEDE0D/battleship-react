import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class GameRoute extends PureComponent {

    render() {
        return (
            <div>
                <h1>GAME SCREEN!</h1>
                <Link to="/result">END</Link>
            </div>
        );
    }

}

export default GameRoute;