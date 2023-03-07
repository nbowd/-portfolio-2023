import './Minesweeper.css'
import React, {useState, useRef, useEffect} from 'react';

function Minesweeper(props) {
    const BOARD_SIZE = 10;
    const NUMBER_OF_MINES = 10;
    const TILE_STATUSES = {
        HIDDEN: 'hidden',
        MINE: 'mine',
        NUMBER: 'number',
        MARKED: 'marked'
    }
    const [board, setBoard] = useState([]);
    const [minesLeft, setMinesLeft] = useState(NUMBER_OF_MINES);
    const boardRef = useRef();

    function createBoard(boardSize, numberOfMines) {
        const newBoard = []
        const minePositions = getMinePositions(boardSize, numberOfMines) 
        for (let x = 0; x < boardSize; x++) {
            const row = [];
            for (let y = 0; y < boardSize; y++) {

                const tile = {
                    x,
                    y,
                    tileStatus: TILE_STATUSES.HIDDEN,
                    mine: minePositions.some(pos => positionMatch(pos, {x, y})),
                    adjacentMines: 0
                }
    
                row.push(tile)
            }
            newBoard.push(row)
        }

        setBoard(newBoard)
    }
    const renderBoard = () => {
        const tiles = [];
        board.map(row => { return row.map(tile => tiles.push(
                    <div 
                        key={`${tile.x}${tile.y}`} 
                        className={`${tile.tileStatus}`} 
                        onClick={() => {
                            revealTile(tile)
                        }} 
                        onContextMenu={e => {
                            e.preventDefault(); 
                            markTile(tile)
                        }}
                    >
                        {tile.adjacentMines > 0 ? tile.adjacentMines: null}
                    </div>
                ))}
            )
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

    function markTile(tile) {
        if (
            tile.tileStatus !== TILE_STATUSES.HIDDEN &&
            tile.tileStatus !== TILE_STATUSES.MARKED
        ) {
            return
        }

        if (tile.tileStatus === TILE_STATUSES.MARKED) {
            let newBoard = [...board]
            newBoard[tile.x][tile.y].tileStatus = TILE_STATUSES.HIDDEN
            setBoard(newBoard)
            setMinesLeft(minesLeft + 1)
        } else {
            let newBoard = [...board]
            newBoard[tile.x][tile.y].tileStatus = TILE_STATUSES.MARKED
            setBoard(newBoard)
            setMinesLeft(minesLeft - 1)
        }
    }

    function revealTile(tile) {
        if (tile.tileStatus !== TILE_STATUSES.HIDDEN) {
            return
        }

        let newBoard = [...board];
        if (tile.mine) {
            newBoard[tile.x][tile.y].tileStatus = TILE_STATUSES.MINE;
            setBoard(newBoard);
            return
        }

        newBoard[tile.x][tile.y].tileStatus = TILE_STATUSES.NUMBER
        const adjacentTiles = nearbyTiles(tile)
        const mines = adjacentTiles.filter(t => t.mine)

        if (mines.length === 0) {
            adjacentTiles.forEach(adjTile => revealTile(adjTile))
        } else {
            newBoard[tile.x][tile.y].adjacentMines = mines.length
        }

        setBoard(newBoard)
    }

    function nearbyTiles({x, y}) {
        const tiles = []

        for (let xOffset = -1; xOffset <= 1; xOffset++) {
            for (let yOffset = -1; yOffset <=1; yOffset++) {
                const tile = board[x + xOffset]?.[y + yOffset]

                if (tile) {
                    tiles.push(tile)
                }
            }
        }

        return tiles
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
            Mines Left: {minesLeft}
            </div>
            <div className="board" ref={boardRef}>
                {board.length !== 0 && renderBoard()}
            </div>
        </>
    );
}

export default Minesweeper;