import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class ResultRoute extends PureComponent {

    render() {
        return (
            <div>
                <h1>RESULT</h1>
                <Link to="/">AGAIN</Link>
            </div>
        );
    }

}

export default ResultRoute;