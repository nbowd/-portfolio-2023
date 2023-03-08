import './Minesweeper.css'
import React, {useState, useRef, useEffect} from 'react';

import flag from '../assets/flag.png'
import bomb from '../assets/bomb.png'

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
    const [gameOverText, setGameOverText] = useState('');
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
                            checkGameEnd()
                        }} 
                        onContextMenu={e => {
                            e.preventDefault(); 
                            markTile(tile)
                        }}
                        style={{color: getNumberColor(tile.adjacentMines)}}
                    >
                        {tile.tileStatus === TILE_STATUSES.MARKED  && <img src={flag} alt='flag icon' className='flag-icon'></img>}
                        {tile.tileStatus === TILE_STATUSES.MINE  && <img src={bomb} alt='bomb icon' className='bomb-icon'></img>}
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

    function checkGameEnd() {
        const win = checkWin();
        const lose = checkLose();

        if (win || lose) {
            boardRef.current.addEventListener('click', stopProp, { capture: true })
            boardRef.current.addEventListener('contextmenu', stopProp, { capture: true })
        }

        if (win) {
            setGameOverText('You Win!')
        }

        if (lose) {
            setGameOverText('You Lose')
            let newBoard = [...board];
            newBoard.forEach(row => {
                row.forEach(tile => {
                    if (tile.tileStatus === TILE_STATUSES.MARKED && tile.mine) {
                        markTile(tile)
                    }
                    if (tile.mine) {
                        revealTile(tile)
                    }
                })
            })
        }
    }

    function stopProp(e) {
        e.stopImmediatePropagation()
    }

    function checkWin() {
        return board.every(row => {
            return row.every(tile => {
                return (
                    tile.tileStatus === TILE_STATUSES.NUMBER || 
                    (tile.mine && 
                        (tile.tileStatus === TILE_STATUSES.HIDDEN ||
                            tile.tileStatus === TILE_STATUSES.MARKED)))
            })
        })
    }

    function checkLose() {
        return board.some(row => {
            return row.some(tile => {
                return tile.tileStatus === TILE_STATUSES.MINE
            })
        })
    }

    function getNumberColor(number) {
        let color = ''
        switch (number) {
            case 1:
                color = '#0001fb'
                break;
            case 2:
                color = '#017e00'
                break
            case 3:
                color = '#fe0100'
                break
            case 4:
                color = '#010000'
                break
            case 5:
                color = '#800002'
                break
            case 6:
                color = '#008080'
                break
            case 7:
                color = '#000000'
                break
            case 8:
                color = '#808080'
                break
            default:
                color = '#'
                break;
        }
        // console.log(number)
        return color
    }
    useEffect(() => {
        createBoard(BOARD_SIZE, NUMBER_OF_MINES);
        
        const boardElement = document.querySelector(".board");
        boardElement.style.setProperty("--size", BOARD_SIZE);
    }, [])
    return (
        <div className='minesweeper'>
            <h3 className="title">Minesweeper</h3>
            <div className="subtext">
            { gameOverText? gameOverText: `Mines Left: ${minesLeft}`}
            </div>
            <div className="board" ref={boardRef}>
                {board.length !== 0 && renderBoard()}
            </div>
        </div>
    );
}

export default Minesweeper;