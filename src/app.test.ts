import { getListActions, main } from "./app";

const VICTOIRE1 = 2;
const VICTOIRE2 = 3;

test('verify getListActions', () => {

    const actionsList:Function[] = getListActions();
    expect(actionsList.length).toEqual(4);
    
    for(const action of actionsList){
        expect(typeof action).toBe("function");
    }
});

test('test main', () => {
    let my_number = 1;
    const result1 = main(my_number);
    expect(result1).toEqual(VICTOIRE1);

    my_number = 2;
    const result2 = main(my_number);
    expect(result2).toEqual(VICTOIRE2);
});