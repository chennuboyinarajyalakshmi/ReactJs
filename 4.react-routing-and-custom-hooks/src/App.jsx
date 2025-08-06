import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import CommentsList from './pages/comments'
import RecipeList from './pages/recipes'
import RecipeDetails from './pages/recipe-details'  
import NotFoundPage from './pages/not-found'
import LayOut from './components/layout'
import ReactHookForm from './pages/react-hook-form'
// import CustomRoutesHook from './custom-react-hook' // Optional

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <h1>React Routing and Custom Hooks</h1>

        {/* 1. Navigation using useNavigate() */}
        <button
          onClick={() => navigate("/home/recipe-list")}
          style={{ backgroundColor: 'black', color: "white", marginRight: "10px" }}
        >
          Navigate to Recipe List using Navigate Hook
        </button>

        <button
          onClick={() => navigate("/home/comments")}
          style={{ backgroundColor: 'black', color: "white", marginRight: "10px" }}
        >
          Navigate to Comments List using Navigate Hook
        </button>

        <button
          onClick={() => navigate("/home/recipe-details/7")}  // ✅ with dynamic ID
          style={{ backgroundColor: 'black', color: "white", marginRight: "10px" }}
        >
          Navigate to Recipe Details using Navigate Hook
        </button>

        <button
          onClick={() => navigate("/react-hook-form")}
          style={{ backgroundColor: 'black', color: "white", marginTop: "10px" }}
        >
          Navigate to React Hook Form using Navigate Hook
        </button>

        {/* 2. Navigation using <Link> */}
        <nav style={{ marginTop: "1rem", display: "flex", flexWrap: 'wrap', gap: "1rem" }}>
          <Link to="/home/recipe-list">Recipe List using Link</Link>
          <Link to="/home/comments">Comments List using Link</Link>
          <Link to="/home/recipe-details/7">Recipe Details using Link</Link> {/* ✅ with ID */}
          <Link to="/react-hook-form">React Hook Form</Link>
        </nav>

        {/* 3. Routes Configuration */}
        <Routes>

          {/* Nested Routing under /home (inside layout) */}
          <Route path="/home" element={<LayOut />}>
            <Route path="recipe-list" element={<RecipeList />} />
            <Route path="comments" element={<CommentsList />} />
            <Route path="recipe-details/:id" element={<RecipeDetails />} /> {/* ✅ dynamic route */}
          </Route>

          {/* Route outside layout */}
          <Route path="/react-hook-form" element={<ReactHookForm />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </div>

      {/* Optional: You can render your custom routes here if needed */}
      {/* <CustomRoutesHook /> */}
      
    </>
  )
}

export default App
