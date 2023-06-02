import { LightningElement } from "lwc";

const createOptions = (size) => [...Array(size).keys()].map(value=>`Option ${value+1}`);

export default class App extends LightningElement {
  choices = createOptions(1);
  stepCount = 1;
  currentStep = 'Option 1';
  onClickStep(event) {
    this.currentStep = event.target.label;
  }
  updateSize(event) {
    this.stepCount = parseInt(event.target.value);
    this.choices = createOptions(this.stepCount);
    if(this.choices.indexOf(this.currentStep) === -1) {
      this.currentStep = this.choices[this.choices.length-1];
    }
  }
}
