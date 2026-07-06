import './App.css';
import globeLogo from './asset/globeIcon.png';
import ThreeDots from './asset/ThreeDots.png';
import cross from './asset/x-mark.png';
import comment from './asset/comment.png'
import likeicon from "./asset/likeIcon.png"
import reposticon from './asset/repostIcon.png';
import sendDm from './asset/sendDm.png' 
import { useState } from 'react';

function App(){
const [posts,setPosts]=useState(
    [
        {
            "postId":1,
            "postLogo":"https://shorturl.at/0m5hN",
            "userName":"Adarsh",
            "time":"12 mins ago",

            "postContent":"Purpose: Inserts new HTML inside an         existing element by changing its innerHTML. In web design, margin and padding are fundamental CSS properties used to control spacing, though they serve opposite purposes. Margin creates space outside the element's border, pushing other elements away, while padding creates space inside the element, between the content and the border",

            "postMedia":"https://shorturl.at/ZZcNI",
            "postInteraction":{
                "like":0,
                "cmt":0, 
                "repost":0, 
                "sendDm":0}
        }
    ]
)

function addMorePost(){
    let newObj= {
        ...posts[0],
        postId:posts.length+1
    } ;
    setPosts([...posts,newObj])
    console.log(posts);
}
    return (
        <>
            <button onClick={addMorePost}>Add Post</button>
            {/* <PostComponent posts={posts} /> */}

            {
            posts.map(post=>(
                <PostComponent key={post.postId} post={post}/>                
            ))
            }
            
        </>
    )
}


function PostComponent(post){   
    // {
    //     post.map(p=>console.log(p));
    // } 
    return(
    <>
        <div className='postComponent' id='postComponent'>
            <HeadOfPost />
            <ContentPart/>
            <PostFooter />
        </div>
    </>
    )
}

function HeadOfPost(){
    return(
        <>
             <div id='topOfPost' className='topOfPost'>

                <div className='LeftOfHeader'>
                    <div id='logoOfOrg'>
                        <img 
                        src="https://shorturl.at/0m5hN" 
                        width="40px"
                        height="40px"
                        alt="LogoOfOrg" />
                    </div>
                    
                    <div className='Name_Time_Globe'>
                        <div>
                            <h4 className='NameH4'>Name</h4>
                        </div>

                        <div className='Time_Globe'>
                            <div className='Time'>
                                <p>time  .</p>
                            </div>

                            <div >
                                <img id='globeLogo' src={globeLogo} height="15px"
                                width="15px" alt="" />
                            </div>

                        </div>
                    </div>

                </div>

                <div className='RightOfHeader'>
                    <div>
                        <img src={ThreeDots} alt="" width="10px"/>
                    </div>
                    <div>   
                        <img src={cross} alt="" width="10px" />
                    </div>
                </div>
            </div>
        </>
    )
}

function ContentPart(){
    return(
        <>
            <div className='ContentHere'>
                <p>Purpose: Inserts new HTML inside an existing element by changing its innerHTML. In web design, margin and padding are fundamental CSS properties used to control spacing, though they serve opposite purposes. Margin creates space outside the element's border, pushing other elements away, while padding creates space inside the element, between the content and the border</p>
            </div>

            <div className="contentPost">
                <img className='contentImg' src="https://shorturl.at/ZZcNI" alt="" />
            </div>

        </>
    )
}


function PostFooter(){

    const [interactions,setInteractions]=useState([{"postId":1, "like":0,"cmt":0, "repost":0, "sendDm":0}]);



    function IncreaseLikeCnt(postId){
        let newObject=  interactions.map(posts=>{
                if(postId===posts.postId){
                    return {
                        ...posts,
                        like:posts.like+1
                    }
                }

                return posts;
            })

            setInteractions(newObject)   
            console.log(interactions)
    }

    function IncreaseCmtCnt(postId){
        let newObject=interactions.map(posts=>{
            if(postId===posts.postId){
                return{
                    ...posts,
                    cmt:posts.cmt+1
                }
            }

            return posts;
        })
        setInteractions(newObject)
        console.log(interactions)
        
    }

    
    function IncreaseRepostCnt(postId){
        let newObject=  interactions.map(posts=>{
                if(postId===posts.postId){
                    return {
                        ...posts,
                        repost:posts.repost+1
                    }
                }

                return posts;
            })

            setInteractions(newObject)  
            console.log(interactions)         
    }
    
    function IncreaseSendDmCnt(postId){
        let newObject=  interactions.map(posts=>{
                if(postId===posts.postId){
                    return {
                        ...posts,
                        sendDm:posts.sendDm+1
                    }
                }

                return posts;
            })

            setInteractions(newObject)           
            console.log(interactions)
    }

    return (
        <>
                        <div className='footer'>
                <div className='FooterLeft'>
                    <div>
                        <button onClick={IncreaseLikeCnt}>
                            <img src={likeicon} alt="" width="15px" />
                        </button>
                    </div>
                    <div>
                        <button onClick={IncreaseCmtCnt}>
                            <img src={comment} alt="" width="15px" />
                        </button>
                    </div>
                    <div>
                        <button onClick={IncreaseRepostCnt}>
                            <img src={reposticon} alt="" width="15px"/>
                        </button>
                    </div>
                    <div>
                        <button onClick={IncreaseSendDmCnt}>
                            <img src={sendDm} alt="" width="15px"/>
                        </button>
                    </div>
                </div>
                <div className='FooterRight'>
                    
                </div>

            </div>

        </>
    )
}

export default App;