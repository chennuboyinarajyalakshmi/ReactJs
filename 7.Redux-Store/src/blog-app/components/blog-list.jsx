import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleDeleteBlog, handleInputChange, setBlogListInitialLoad, setCurrentEditBlogId ,handleEditedBlog } from "../../store/slice/blogslice";

function BlogList() {
     
    const dispatch=useDispatch()
    const {blog}=useSelector((state)=>state)
    const {BlogList}=blog;
    console.log(BlogList)

    useEffect(()=>{
        dispatch(setBlogListInitialLoad({
          blogList: JSON.parse(localStorage.getItem('blogList')) || []
        }
        ))
        
    },[])

    function onDeleteBlog(getCurrentBlogId){
        console.log(getCurrentBlogId)
        dispatch(handleDeleteBlog({
            CurrentBlogId:getCurrentBlogId
        }))
    }

    function onEditBlog(getCurrentBlog){
        console.log(getCurrentBlog)
        dispatch(setCurrentEditBlogId({
            CurrentBlogId:getCurrentBlog?.id
        }));
        dispatch(handleInputChange({
            title: getCurrentBlog?.title,
            description: getCurrentBlog?.description
        }))
    }
    return(
        <>
        <h1>Blogs are here..</h1>
        <ul>
            {
                 BlogList?.length >0? 
                 BlogList.map((singleBlogItem=><div style={{border:'1px soild red',padding:'10px'}} key={singleBlogItem?.id}> 
                                                    <h3> {singleBlogItem?.title}</h3>
                                                    <h3> {singleBlogItem?.description}</h3>
                                                    <button onClick={()=>onEditBlog(singleBlogItem)}>Edit Blog</button>
                                                    <button onClick={()=>onDeleteBlog(singleBlogItem?.id)}>Delete Blog</button>
                                                    <hr/>
                                               </div>
                            )) 
                 : <h1>No Blogs Found</h1>
            }
        </ul>

        </>
    )
    
}
export default BlogList