import "./Filters.css";



function Filters({filterData,category,setCategory }){

    function onClickHandler(title){
        setCategory(title )
         
    }

    return(
        <>
        <div className="filters">
            {filterData.map(item=> {
                return <button onClick={()=>onClickHandler(item.title)} key={item.id}>{item.title}</button>                            
                })}
        </div>
        </>
    )
}

export default Filters ;