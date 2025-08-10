import './App.css'
import AddNewBlog from './blog-app/components/add-new-blog'
import BlogList from './blog-app/components/blog-list'
import CounterButton from './counter-example/counter-button'
import CounterValue from './counter-example/counter-value'

function App() {
  return (
    <>
      <div>
        <h1>Redux Took Kit</h1>
        <h2>My Blog App</h2>
        <BlogList />
        <AddNewBlog />
        {/* 
        <CounterButton />
        <CounterValue/>
        */}
      </div>
    </>
  )
}

export default App
