import { useNavigate } from "react-router-dom"


function About() {
    const navigate=useNavigate();

    function onClickGoTo(){
        navigate('/support');
    }
    function onClickGoBack(){
        navigate(-1);
    }

  return (
    <div>
      This is about page
      <br />
      <button onClick={onClickGoTo}>Go to Support  </button>
      <br />
      <button onClick={onClickGoBack}>Go Back</button>

    </div>
  )
}

export default About
