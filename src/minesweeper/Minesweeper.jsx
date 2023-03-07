import './Minesweeper.css'
import React, {useState, useRef, useEffect} from 'react';

function Minesweeper(props) {
    const BOARD_SIZE = 10;
    const NUMBER_OF_MINES = 2;
    const TILE_STATUSES = {
        HIDDEN: 'hidden',
        MINE: 'mine',
        NUMBER: 'number',
        MARKED: 'marked'
    }
    const [board, setBoard] = useState([]);
    const boardRef = useRef();

    function createBoard(boardSize, numberOfMines) {
        const newBoard = []
        const minePositions = getMinePositions(boardSize, numberOfMines) 
        console.log(minePositions);
        for (let x = 0; x < boardSize; x++) {
            const row = [];
            for (let y = 0; y < boardSize; y++) {

                const tile = {
                    x,
                    y,
                    tileStatus: TILE_STATUSES.HIDDEN,
                    mine: minePositions.some(pos => positionMatch(pos, {x, y})),
                }
    
                row.push(tile)
            }
            newBoard.push(row)
        }
        console.log(newBoard)
        setBoard(newBoard)
    }
    const renderBoard = () => {
        const tiles = [];
        board.map(row => 
            row.map(tile => 
                tiles.push(
                    <div key={`${tile.x}${tile.y}`} className={`.${tile.tileStatus}`} onClick={() => {console.log('left click')}} onContextMenu={e => {e.preventDefault(); console.log('right click')}}></div>
                )))
        return tiles
    
    }

    function getMinePositions(boardSize, numberOfMines) {
        const positions = []

        while (positions.length < numberOfMines) {
            const position = {
                x: randomNumber(boardSize),
                y: randomNumber(boardSize)
            }

            if (!positions.some(p => positionMatch(p, position))) {
                positions.push(position)
            }

        }

        return positions
    }

    function positionMatch(a, b) {
        return a.x === b.x && a.y === b.y
    }
    function randomNumber(size) {
        return Math.floor(Math.random() * size)
    }

    useEffect(() => {
        createBoard(BOARD_SIZE, NUMBER_OF_MINES);
        
        const boardElement = document.querySelector(".board");
        boardElement.style.setProperty("--size", BOARD_SIZE);
    }, [])
    return (
        <>
            <h3 className="title">Minesweeper</h3>
            <div className="subtext">
            Mines Left: 10
            </div>
            <div className="board" ref={boardRef}>
                {board.length !== 0 && renderBoard()}
            </div>
        </>
    );
}

export default Minesweeper;