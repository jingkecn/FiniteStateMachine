import { Enum } from "enumify";

export class State extends Enum {}
State.initEnum(["Inactive", "Active", "Disposed"]);