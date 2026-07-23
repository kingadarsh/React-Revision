import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';


function ReferencingDomElement() {
    const inptRef=useRef(null);
    const navigate=useNavigate();

    


  return (
    <div>
        <center>
            <h1>Referencing Dom Element Using useRef</h1>        
            <center>--- &gt; Just click on the submit button - the focus shifts on signup  &lt; ---</center>

            <br /><br />
            <button onClick={()=>navigate(-1)} >Back</button>
            
            <br />
            <br /><br />
            Signup 
            <input ref={inptRef} id='name' type="text" />
            <input id='name' type="text" />
            <button onClick={()=>inptRef.current.focus()}>Submit</button>
            </center>
    </div>
  )
}

export default ReferencingDomElement;
