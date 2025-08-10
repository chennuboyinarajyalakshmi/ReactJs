import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    formData:{
        title:"",
        description:""
    },
    blogList:[],
    currentEditBlogId : null
}

export const blogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{
        handleInputChange: (state,action)=>{
            console.log(state)// form data
            console.log(action) //title and descriptions
            console.log(action.payload) //title and descriptions input

            let cpyFormData={...state.formData};
            cpyFormData={
                ...cpyFormData,
                ...action.payload    // input we are giving
            }
            state.formData=cpyFormData;
        },
        handleAddToDo:(state,action)=>{
            console.log(action)
            console.log("Handle Add todo  Blog is called")
            state.blogList.push({
                id:nanoid(),
                ...state.formData,
            });

            state.formData={
                title:"",
                description:""
            }

        localStorage.setItem('blogList',JSON.stringify(state.blogList))

        },
        setBlogListInitialLoad:(state,action)=>{
            state.blogList=action.payload.blogList

        },

        handleDeleteBlog:(state,action)=>{
            console.log(action)
            console.log(action.payload)
            const {payload} =action;
            const {currentBlogId}=payload
            let cpyBlogList=[...state.blogList]

            cpyBlogList.filter(singleBlogItem=>singleBlogItem.id !== currentBlogId)

            state.blogList=cpyBlogList
            localStorage.setItem('blogList',JSON.stringify(cpyBlogList))

        },
       setCurrentEditBlogId:(state,action)=>{
            console.log(action)
            console.log(action.payload)
            const {payload} =action;
            const {currentBlogId}=payload

            state.currentEditBlogId=currentBlogId;
        },
        handleEditedBlog:(state,action)=>{            
            
            console.log("Handle Edited Blog is called")
            let cpyBlogList={...state.blogList}
            const findIndexOfCurrentblogItem=cpyBlogList.findIndex((singleBlogItem)=>singleBlogItem.id===currentEditBlogId)

            if(findIndexOfCurrentblogItem){
               
                console.log(findIndexOfCurrentblogItem)
                cpyBlogList[findIndexOfCurrentblogItem]={
                  ...cpyBlogList[findIndexOfCurrentblogItem],
                  ...state.formData
                }

                state.blogList=cpyBlogList;
                localStorage.setItem('blogList',JSON.stringify(cpyBlogList))
    
            }
        }

    }
})

export const {handleInputChange,handleAddToDo,setBlogListInitialLoad,handleDeleteBlog,setCurrentEditBlogId,handleEditedBlog}=blogSlice.actions
export default blogSlice.reducer