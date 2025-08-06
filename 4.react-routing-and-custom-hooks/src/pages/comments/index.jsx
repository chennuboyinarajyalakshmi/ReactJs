import useFetch from "../../custom-hooks/use-fetch"

function CommentsList(){
    // here we are using our custom hook i.e use-fecth to fetch the commentsdata from recipes url
    const {data,loading,error}=useFetch('https://dummyjson.com/comments')
    console.log(data,loading,error)
     if(loading){
         return <h1>Please Wait...Comments are fetching</h1>
     }

    return (
        <div>
            <h1>Commentslist </h1>
             <ul>
                {
                    data && data?.comments?.length >0 
                    ?  data?.comments.map((commentItem)=>(
                        <div>
                            <label>{commentItem.body}</label>
                            <p>{commentItem?.likes}</p>
                        </div>
                        ))
                     :null
                }
                </ul>
        </div>
        
    )
}

export default CommentsList