import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Board from "../components/Board/Board";
import "../redux/types";
import { GameActions } from "../redux/game.actions";

class GameRoute extends PureComponent {

    render() {
        return (
            <div>
                <h1>BATTLE!</h1>
                <div style={{ width: 500 }}>
                    <Board board={this.props.boardPlayer}/>
                </div>
                <Link to="/result">END GAME</Link>
            </div>
        )
    }

}

/**
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
                end: () => dispatch(GameActions.end())
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRoute);