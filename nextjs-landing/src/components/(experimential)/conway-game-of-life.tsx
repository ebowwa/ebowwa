// components/GameOfLife.tsx
import { useState, useEffect } from 'react';

interface Cell {
  x: number;
  y: number;
  alive: boolean;
}

const GameOfLife = () => {
  const [gridSize, setGridSize] = useState(20);
  const [cells, setCells] = useState<Cell[]>([]);
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    const initializeGrid = () => {
      const grid: Cell[] = [];
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          grid.push({ x, y, alive: Math.random() < 0.5 });
        }
      }
      setCells(grid);
    };
    initializeGrid();
  }, [gridSize]);

  useEffect(() => {
    const tick = () => {
      const newCells: Cell[] = [];
      for (const cell of cells) {
        const neighbors = getNeighbors(cell, cells);
        const aliveNeighbors = neighbors.filter((n) => n.alive).length;
        let newAlive = cell.alive;
        if (cell.alive && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
          newAlive = false;
        } else if (!cell.alive && aliveNeighbors === 3) {
          newAlive = true;
        }
        newCells.push({ ...cell, alive: newAlive });
      }
      setCells(newCells);
      setGeneration(generation + 1);
    };
    const intervalId = setInterval(tick, 100);
    return () => clearInterval(intervalId);
  }, [cells, generation]);

  const getNeighbors = (cell: Cell, cells: Cell[]) => {
    const neighbors: Cell[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue;
        const neighborX = cell.x + x;
        const neighborY = cell.y + y;
        if (neighborX >= 0 && neighborX < gridSize && neighborY >= 0 && neighborY < gridSize) {
          const neighbor = cells.find((c) => c.x === neighborX && c.y === neighborY);
          if (neighbor) neighbors.push(neighbor);
        }
      }
    }
    return neighbors;
  };

  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridGap: '1px',
        }}
      >
        {cells.map((cell, index) => (
          <div
            key={index}
            style={{
              backgroundColor: cell.alive ? 'black' : 'white',
              width: '10px',
              height: '10px',
            }}
          />
        ))}
      </div>
      <p>Generation: {generation}</p>
    </div>
  );
};

export default GameOfLife;