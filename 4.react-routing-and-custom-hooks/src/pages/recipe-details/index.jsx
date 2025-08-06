import { useParams, useNavigate } from "react-router-dom" // ✅ Added useNavigate
import useFetch from "../../custom-hooks/use-fetch"
import './recipe-details.css'

function RecipeDetails() {
  const { id } = useParams()
  const navigate = useNavigate() // ✅ Initialize navigate

  const {
    data: recipe,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/recipes/${id}`)

  if (loading) return <h2 className="loading">Loading recipe #{id}...</h2>
  if (error) return <h2 className="error">Error: {error}</h2>

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Recipe Details</h2>
      <img src={recipe?.image} alt={recipe?.name} className="recipe-image" />

      <h3 className="recipe-name">{recipe?.name}</h3>

      <div className="recipe-info-box">
        <p><strong>Prep time:</strong> {recipe?.prepTimeMinutes} mins</p>
        <p><strong>Cook time:</strong> {recipe?.cookTimeMinutes} mins</p>
        <p><strong>Servings:</strong> {recipe?.servings}</p>
      </div>

      <div className="recipe-section">
        <h4>🥬 Ingredients:</h4>
        <ul>
          {recipe?.ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h4>📖 Instructions:</h4>
        <ol>
          {recipe?.instructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      {/* ✅ Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/home/recipe-list")}>
        ⬅ Back to Home
      </button>
    </div>
  )
}

export default RecipeDetails
