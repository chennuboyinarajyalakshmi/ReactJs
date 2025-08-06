import { useLocation } from "react-router-dom"
import useFetch from "../../custom-hooks/use-fetch"
import UseWindowResize from "../../custom-hooks/use-window-resize"

function RecipeList(){
    //to get currennt path/location details like pathname,search,etc..-- use loaction hook
    const location=useLocation()
    console.log(location)

    // here we are using our custom hook i.e usewindowresize to resize  the window  recipes page
    const currentWindowSize=UseWindowResize()


    // here we are using our custom hook i.e use-fecth to fetch the recipe data from recipe url
    const {data,loading,error}=useFetch('https://dummyjson.com/recipes')
    console.log(data,loading,error)
     if(loading){
         return <h1>Please Wait...Recipes are fetching</h1>
     }
               
    return (
        <div>
            <h1>Recipe list </h1>
            <h3>current window width is{currentWindowSize.width} and height is {currentWindowSize.height}</h3>
            <ul>
                {
                    data && data?.recipes?.length >0 
                    ?data.recipes.map((recipeItem)=><div>  <img src={recipeItem?.image} width="500" height="300"  />
                                                           <label>{recipeItem?.name}</label>
                                                    </div>
                                    ) 
                    :null
                }
            </ul>  
        </div>
    )
}

export default RecipeList