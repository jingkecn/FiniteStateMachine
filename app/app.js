import { Command } from "./FiniteStateMachine/Command";
import { State } from "./FiniteStateMachine/State";
import { Transition } from "./FiniteStateMachine/Transition";
import { AppStateMachine } from "./FiniteStateMachine/StateMachine";

class Application {

  constructor() {
    AppStateMachine.defineTransition(new Transition(State.Inactive, Command.Activate, State.Active));
    AppStateMachine.defineTransition(new Transition(State.Inactive, Command.Dispose, State.Disposed));
    AppStateMachine.defineTransition(new Transition(State.Active, Command.Deactivate, State.Inactive));
    AppStateMachine.defineTransition(new Transition(State.Active, Command.Dispose, State.Disposed));
    AppStateMachine.addEventListener("StateTransitioned", this.onStateTransitioned);
  }

  get rootElement() {
    return this._rootElement;
  }

  initialize(rootElement) {
    this._rootElement = rootElement;
  }

  onStateTransitioned(newState) {
    switch (newState) {
      case State.Inactive:
        // TODO: logics when app is inactive.
        break;
      case State.Active:
        // TODO: logics when app is active.
        break;
      case State.Disposed:
        // TODO: logics when app is disposed.
        break;
      default:
        throw new Error("State out of range!");
    }
  }

}

// Bootstrap
let app = new Application();
document.addEventListener("loadend", (e) => app.initialize(document.getElementById("app")));
