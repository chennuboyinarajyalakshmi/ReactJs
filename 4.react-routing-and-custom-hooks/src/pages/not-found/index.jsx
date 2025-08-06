import { Link } from "react-router-dom"

 function NotFoundPage() {
  return (
    <div>
      <h3>This page Doesn't Exist</h3>
      <Link to="/home/recipe-list">Go to Recipe List Page</Link>

    </div>
  )
}
export default NotFoundPage
