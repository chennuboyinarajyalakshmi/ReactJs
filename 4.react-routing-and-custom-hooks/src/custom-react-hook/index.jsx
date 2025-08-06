import { useRoutes } from 'react-router-dom'
import CommentsList from "../pages/comments"
import RecipeList from "../pages/recipes"
import RecipeDetails from "../pages/recipe-details"
import NotFoundPage from "../pages/not-found"
import LayOut from "../components/layout"
import ReactHookForm from "../pages/react-hook-form"

function CustomRoutesHook() {
  const element = useRoutes([
    {
      path: '/home',
      element: <LayOut />,
      children: [
        { path: 'recipe-list', element: <RecipeList /> },
        { path: 'comments', element: <CommentsList /> },
        { path: 'recipe-list/:id', element: <RecipeDetails /> },
        { path: 'react-hook-form', element: <ReactHookForm /> }
      ]
    },
    { path: '/react-hook-form', element: <ReactHookForm /> },
    { path: '*', element: <NotFoundPage /> }
  ])

  return element
}

export default CustomRoutesHook
