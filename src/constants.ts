export const ACTIONS_TODO  = [
    {
        action : 'multiply',
        firstOperator:2,
        secondOperator:3
    },
    {
        action : 'add',
        firstOperator:8,
        secondOperator:16
    },
    {
        action : 'divide',
        firstOperator:2,
        secondOperator:3
    },
    {
      action : 'remove',
      firstOperator:1,
      secondOperator:2
    }
];

export const FUNCTIONS :{ [x: string]: Function; }= {
    'multiply' : (x:number,y:number,z:number) => x * y * z,
    'add'  : (x:number,y:number,z:number) =>  x + y + z,
    'divide': (x:number,y:number,z:number) =>  x / y / z,
    'remove': (x:number,y:number,z:number) =>  x - y - z
}