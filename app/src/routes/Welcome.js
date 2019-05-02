import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../redux/types";
import { GameActions } from "../redux/game.actions";

import Board from "../components/Board/Board";

class WelcomeRoute extends PureComponent {

    componentDidMount() {
        this.props.actions.game.init();
    }

    render() {
        return (
            <div>
                <h1>WELCOME!</h1>
                <div style={{ width: 500 }}>
                    <Board board={this.props.boardPlayer}/>
                </div>
                <Link to="/game" onClick={() => this.props.actions.game.start()}>PLAY</Link>
            </div>
        )
    }

}

/**
 * 
 * @param {ReduxState} state 
 * @param {object} props 
 */
function mapStateToProps(state, props) {
    const { boardPlayer } = state.game;
    return {
        boardPlayer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            game: {
                init: () => dispatch(GameActions.init()),
                start: () => dispatch(GameActions.start()),
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeRoute);