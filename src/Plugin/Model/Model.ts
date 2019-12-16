import { Data } from './ext/Data';
import { Calculator } from './ext/Calculator';

export class Model {
    data: Data;
    calculator: Calculator
    constructor(private configuration: IConfiguration) {
        this.data = new Data(this.configuration);
        this.calculator = new Calculator;
    }
}