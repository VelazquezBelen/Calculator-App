import { useState } from "react";
import { Digits } from "./components/Digits";
import { Display } from "./components/Display";
import { Operators } from "./components/Operators";

function CalculatorApp() {

	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/','*','+','-','.'];

	const updateCalc = (value) => {
		if ( ops.includes(value) && calc === '' ||
			ops.includes(value) && ops.includes(calc.slice(-1)) ) 
		{
			return;
		}
		setCalc(calc + value);

		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}


	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if ( calc === '' ) {
			return;
		}
		const value = calc.slice(0, -1);
		setCalc(value);
	}

	return (
		<div className="CalculatorApp">
			<div className="calculator">
				<Display result={result} calc={calc}/>

				<Operators updateCalc={updateCalc} deleteLast={deleteLast}/>

				<Digits updateCalc={updateCalc} calculate={calculate}/>
						
			</div>
		</div>
	);
}

export default CalculatorApp;