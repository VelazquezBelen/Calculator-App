const { render, screen, fireEvent } = require("@testing-library/react")
const { Digits } = require("../../src/components/Digits")


describe('Pruebas en <Digits/>', () => {
    test('Debe mostrar 12 botones ', () => {
        const updateCalc = jest.fn();
        const calculate = jest.fn();
        render(<Digits updateCalc={updateCalc} calculate={calculate}/>)

        expect( screen.getAllByRole('button').length ).toBe(12);
    });

    test('Debe llamar updateCalc al hacer click sobre un digito', () => {
        const updateCalc = jest.fn();
        const calculate = jest.fn();
        render(<Digits updateCalc={updateCalc} calculate={calculate}/>)
        const button = screen.getByText('1');
        
        fireEvent.click(button);
        expect(updateCalc).toHaveBeenCalledTimes(1);
        expect(updateCalc).toHaveBeenCalledWith('1');
    });

    test('Debe llamar calculate al hacer click sobre =', () => {
        const updateCalc = jest.fn();
        const calculate = jest.fn();
        render(<Digits updateCalc={updateCalc} calculate={calculate}/>)
        const button = screen.getByText('=');
        
        fireEvent.click(button);
        expect(calculate).toHaveBeenCalledTimes(1);
    });
})