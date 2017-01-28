import { AbstractNotifyPropertyChangedEventTarget } from "../Event/AbstractNotifyPropertyChangedEventTarget";

import { Command } from "./Command";
import { State } from "./State";
import { Transition } from "./Transition";

class StateMachine extends AbstractNotifyPropertyChangedEventTarget {

  constructor(intialState) {
    this._currentState = initialState;
  }

  get currentState() {
    return this._currentState;
  }

  set currentState(state) {
    this._currentState = state;
    onPropertyChanged("currentState");
  }

  defineTransition(transition) {
    (this._transitions = this._transitions || []).push(transition);
    return this;
  }

  moveNext(command) {
    this._transitions = this._transitions || [];
    var nextStates = this._transitions.slice(0).filter((t) => t.originalState !== this._currentState || t.command !== command).map((t) => t.finalState);
    if (nextStates.length !== 0)
      currentState = nextStates.pop();
    return this;
  }

  onPropertyChanged(propertyName) {
    super.onPropertyChanged(propertyName);
    if (propertyName === "currentState")
      onStateTransitioned(this.currentState);
  }

  onStateTransitioned(newState) {
    this.dispatchEvent("StateTransitioned", newState);
  }

}

export let AppStateMachine = new StateMachine(State.Inactive);