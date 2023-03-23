
export const Display = ({result, calc}) => {

    // poner el ternario en una cte  { result ? <span>({result})</span> : null } 

    return (
        <div className="display">				
            { result ? <span>({result})</span> : null } 
            &nbsp;
            { calc || "0"}
        </div>
    )
}
