import { useNavigate } from "react-router-dom"


function SupportPage() {
    const navigate=useNavigate();


    function onClickGoTo(){
        navigate('/');
    }
    function onClickGoBack(){
        navigate(-1);
    }
  return (
    <div>
      This is support page

      <br />
        <button onClick={onClickGoTo}>Go to Home Page</button>
      <br />
        <button onClick={onClickGoBack}>Go Back</button>
      

    </div>
  )
}

export default SupportPage
