import React from 'react'

export const Operators = ({ updateCalc, deleteLast }) => {

    const operators = ['/','*','+','-'];
    
    return (
        <div className="operators">
            {
                operators.map( op => (
                    <button key={op} onClick={() => updateCalc(op)}>{op}</button>
                ))
            }
            <button onClick={ deleteLast }>DEL</button>
        </div>
    )
}
