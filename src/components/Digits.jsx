
export const Digits = ({ updateCalc, calculate }) => {

    const digits = ['1','2','3','4','5','6','7','8','9']

    return (
        <div className="digits">
            {
                digits.map(digit => (
                    <button key={digit} onClick={() => updateCalc(digit)}>
					    {digit}
				    </button>
                ))
            }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={ calculate }>=</button>
        </div>		
    )
}
