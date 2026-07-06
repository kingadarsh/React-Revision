import './Cards.css';
import Card from "./Card";

function Cards({courses, category}){
    // const allCourses=[];
    console.log("From csrds.jsx")
    console.log(category)

    const getCourses=()=>{
        if(category==='All'){
            return Object.values(courses).flat();
        }
        else{
            return courses[category];
        }
        
    }



    
    return (
        <>
            <div className="Cards-Card">
                {
                    getCourses().map((course)=>{
                        return (<Card  key={course.id} course={course}> </Card>)
                    })
                }
            </div>
        </>
    );
};

export default Cards; 