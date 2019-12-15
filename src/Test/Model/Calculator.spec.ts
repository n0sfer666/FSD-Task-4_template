import { Calculator } from '../../Plugin/Model/Calculator';

describe('Model -> Calculator', () => {
    let calculator: Calculator = new Calculator;
    describe('function: calculate_array_of_available_values', () => {
        it('param: range = [-10, -2], step = 3', () => {
            let result: number[] = [-10, -7, -4, -2];
            let toExpect: number[] = calculator.calculate_range_of_available_values([-10, -2], 3);
            expect(toExpect).toEqual(result);
        });
        it('param: range = [-10, -2], step = 2.5', () => {
            let result: number[] = [-10, -7.5, -5, -2.5, -2];
            let toExpect:number[] = calculator.calculate_range_of_available_values([-10,-2], 2.5);
            expect(toExpect).toEqual(result);
        })
    })
})