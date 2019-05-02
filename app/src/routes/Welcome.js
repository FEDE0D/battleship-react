import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../redux/types";
import { GameActions } from "../redux/game.actions";

import Board from "../components/Board/Board";

class WelcomeRoute extends PureComponent {

    render() {
        return (
            <div>
                <h1>WELCOME!</h1>
                <div style={{ width: 500 }}>
                    <Board board={this.props.gameBoard}/>
                </div>
                <Link to="/game" >PLAY</Link>
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
    const { status, boardPlayer } = state.game;
    return {
        gameStatus: status,
        gameBoard: boardPlayer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            game: {
                init: (status) => dispatch(GameActions.start(status))
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeRoute);