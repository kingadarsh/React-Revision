import useGifs from "../hooks/useGifs";
import Spinner from "./Spinner";

function RandomGifs() {
    const {gifs,loading,fetchData}=useGifs();

    


    
    function onClickHandler(){
        fetchData();
    }
    
    return (
        <div>
            <div className="RandomGifBox">
                <div>
                    <h2>
                        A Random Gif
                    </h2>
                </div>
                <div className="ApiFetch">

                    { loading?<><Spinner/>  Loading... </>: <img src={gifs} alt="This is the Gifs" />}
                </div>

                <button onClick={onClickHandler}>Generate</button>

            </div>
        </div>
    )
}

export default RandomGifs
