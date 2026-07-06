import "./sheshNag.css";

function SheshNag(props){
    return (
        <>
            <div className="SheshNag">
                <h1>There is nothing to show. 
                    <br />
                    <button 
                    onClick={props.onClickResetbtn}
                    className="Resetbtn">
                        Click here to reset...</button>
                </h1>
                
            </div>
        </>
    )
}

export default SheshNag;