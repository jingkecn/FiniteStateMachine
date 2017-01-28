import { Command } from "./Command";
import { State } from "./State";

export class Transition {

  constructor(originalState, command, finalState) {
    if (!(originalState instanceof State))
      throw new Error("Invalid original state!");
    if (!(command instanceof Command))
      throw new Error("Invalid command!");
    if (!(finalState instanceof State))
      throw new Error("Invalid final state!");
    this._originalState = originalState;
    this._command = command;
    this._finalState = finalState;
  }

  get originalState() {
    return this._originalState;
  }

  get command() {
    return this._command;
  }

  get finalState() {
    return this._finalState;
  }

  equals(other) {
    return other instanceof Transition &&
      other.originalState === this.originalState &&
      other.command === command &&
      other.finalState === this.finalState;
  }

}