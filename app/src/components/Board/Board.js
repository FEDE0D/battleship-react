import React, { PureComponent } from "react";
import "./Board.css";

class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const rows = this.props.board.map((columns, idx) => {
            return <BoardRow key={`${idx}`} columns={columns}/>
        });
        return (
            <div className={"container"} style={{ width: 250, height: 250 }}>
                {rows}
            </div>
        );
    }

}

class BoardRow extends PureComponent {

    render() {
        const columns = this.props.columns.map((tile, idx) => {
            return <BoardTile key={`${this.props.idx}-${idx}`} tile={tile} />
        }); 
        return (
            <div className={"row"}>
                {columns}
            </div>
        );
    }

}

class BoardTile extends PureComponent {

    render() {
        const style = {
            backgroundColor: !!this.props.tile ? "black" : "white"
        }
        return (
            <div className={"column"} style={style}></div>
        )
    }

}

export default Board;