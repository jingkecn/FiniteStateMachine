import { AbstractEventTarget } from "./AbstractEventTarget";

export class AbstractNotifyPropertyChangedEventTarget extends AbstractEventTarget {

  constructor() {
    if (this.constructor.name === "AbstractNotifyPropertyChangedEventTarget") {
      throw new Error(`Can't instantiate ${this.constructor.name}`);
    }
    this.addEventListener("PropertyChanged", this.onPropertyChanged);
  }

  onPropertyChanged(propertyName) {
    this.dispatchEvent("PropertyChanged", propertyName);
  }

}