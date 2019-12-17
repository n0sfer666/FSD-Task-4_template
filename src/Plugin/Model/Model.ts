<<<<<<< HEAD
import { Calculator } from './Calculator';

export class Model {
    private calculator: Calculator;
    constructor(public configuration: IModelData) {
        this.calculator = new Calculator();
        this.configuration.range_of_available_values = this.calculator.calculate_range_of_available_values(this.configuration.range, this.configuration.step);
    }
}
=======
>>>>>>> iss1
