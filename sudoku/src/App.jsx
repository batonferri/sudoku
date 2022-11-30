import { useState } from "react";
import axios from "axios";
import {
  stringToTwoDimensionalArray,
  twoDimensionalArrayToString,
} from "./helper/convert";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [error, setError] = useState(null);

  const handleChange = (rowId, columnId, value) => {
    if (value > 9) return;
    const newGrid = [...grid];
    newGrid[rowId][columnId] = value || 0;
    setGrid(newGrid);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/solve", {
        input: twoDimensionalArrayToString(grid),
      });
      console.log(res);
      setGrid(stringToTwoDimensionalArray(res.data));
    } catch (err) {
      console.error(err);
      setError(err.response.data);
    }
  };

  return (
    <div className="App">
      <div className="width560">
        <div className="grid">
          {grid
            .filter((r) => typeof r !== "number")
            .map((row, rowId) => (
              <div className="row" key={rowId}>
                {row.map((column, columnId) => (
                  <div className="column" key={columnId}>
                    <input
                      value={column}
                      onChange={(e) =>
                        handleChange(rowId, columnId, Number(e.target.value))
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
        <button className="btn" onClick={handleSubmit}>
          Solve
        </button>
      </div>
      {error && <h4>{error}</h4>}
    </div>
  );
}

export default App;
