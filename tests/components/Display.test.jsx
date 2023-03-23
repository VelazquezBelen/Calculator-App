const { render, screen } = require("@testing-library/react")
const { Display } = require("../../src/components/Display");


describe('Pruebas en <Display/>', () => {
    test('debe mostrar el calc y result ', () => {

        render(<Display result ={"3"} calc={"1+2"}/>)
        expect(screen.getByText("(3)")).toBeTruthy();
        expect(screen.getByText("1+2")).toBeTruthy();
    })
})