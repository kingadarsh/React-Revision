import './data_time.css'

function Data_time(props){

    return(
        <>
            <h2 className='DataTime'>
                <span>{props.date}</span>
                <span>{props.month}</span>
                <span>{props.year}</span>
            </h2>
        </>
    )
}

export default Data_time;