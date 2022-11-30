import { solve } from "../helper/logic.js";
import {
  stringToTwoDimensionalArray,
  twoDimensionalArrayToString,
} from "../helper/convert.js";

export const solvePuzzle = (req, res) => {
  const solvedResult = solve(stringToTwoDimensionalArray(req.body.input));

  if (typeof solvedResult === "boolean")
    return res.status(400).json("this puzzle can't be solved");

  return res.status(200).json(twoDimensionalArrayToString(solvedResult));
};
