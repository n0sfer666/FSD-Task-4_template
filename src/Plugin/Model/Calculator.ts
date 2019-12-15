export class Calculator {
    public calculate_range_of_available_values(range: [number, number], step: number): number[] {
        let arr: number[] = [range[0]];
        let isDone: boolean = false;

        while(!isDone) {
            if(arr[arr.length-1] + step < range[1]) {
                arr.push(arr[arr.length-1] + step);
            } else {
                arr.push(range[1]);
                isDone = true;
            }
        }
        return arr;
    }
}