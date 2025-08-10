import { useDispatch, useSelector } from "react-redux"
import { handleAddToDo, handleEditedBlog, handleInputChange, setCurrentEditBlogId } from "../../store/slice/blogslice"

function AddNewBlog(){

    // const state=useSelector((state)=>state)  
    // here stte mesn we have two counter an dblog so just detsructure the blog state only
    const {blog}=useSelector((state)=>state)
    const dispatch=useDispatch()
    const {currentEditBlogId }=blog
    console.log(blog) //counter,blog states


    function onChangeInput(event){
       dispatch(handleInputChange({
        [event.target.name]: event.target.value
      }))
    }

    function handleToDoSubmit(event){
        event.preventDefault();
        dispatch(handleAddToDo())
        if(currentEditBlogId !==null){ dispatch(handleEditedBlog())  }
        else{ dispatch(handleAddToDo()) }

        dispatch(setCurrentEditBlogId(null))
        dispatch(handleInputChange({
            title:'',
            description:''
        }))

    }

    return(
    <>
    <form onSubmit={handleToDoSubmit}> 
        <div>
            <label>Title</label>
            <input 
                type="text"
                name="title"
                placeholder="Enter Blog Title here"
                id="title"
                onChange={onChangeInput}
                value={blog?.formData?.title} ></input>
        </div>
        <div>
            <label>Description</label>
            <input 
                type="text"
                name="title"
                placeholder="Enter  blog description here"
                id="title"
                onChange={onChangeInput}
                value={blog?.formData?.description}  ></input>
        </div>
        <button type="submit">
           {
            blog?.currentEditedBlogId ? " Edit curent  blog"  : "Add new blog"
           }
        </button>
    </form>
    </>
    )
}

export default AddNewBlog