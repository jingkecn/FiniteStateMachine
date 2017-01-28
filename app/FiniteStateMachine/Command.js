import { Enum } from "enumify";

export class Command extends Enum {}
Command.initEnum(["Activate", "Deactivate", "Dispose"]);