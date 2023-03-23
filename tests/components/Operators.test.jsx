const { render, screen, fireEvent } = require("@testing-library/react")
const { Operators } = require("../../src/components/Operators");


describe('Pruebas en <Operators/>', () => {
    test('Debe mostrar 5 botones', () => {
        const updateCalc = jest.fn();
        const deleteLast = jest.fn();
        render(<Operators updateCalc ={updateCalc} deleteLast={deleteLast}/>)
        expect( screen.getAllByRole('button').length ).toBe(5);
    });

    test('Debe llamar updateCalc al hacer click sobre una operación', () => {
        const updateCalc = jest.fn();
        const deleteLast = jest.fn();
        render(<Operators updateCalc ={updateCalc} deleteLast={deleteLast}/>)
        const button = screen.getByText('*');
        
        fireEvent.click(button);
        expect(updateCalc).toHaveBeenCalledTimes(1);
        expect(updateCalc).toHaveBeenCalledWith('*');
    });

    test('Debe llamar deleteLast al hacer click sobre DEL', () => {
        const updateCalc = jest.fn();
        const deleteLast = jest.fn();
        render(<Operators updateCalc ={updateCalc} deleteLast={deleteLast}/>)
        const button = screen.getByText('DEL');
        
        fireEvent.click(button);
        expect(deleteLast).toHaveBeenCalledTimes(1);
    });
})