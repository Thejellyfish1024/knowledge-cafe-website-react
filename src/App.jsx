
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header/Header'

// 
// live link -> http://gullible-produce.surge.sh/
// 

function App() {
  const [readingTime , setReadingTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const handleReadingTime = (blog) =>{ 
    const newBlog = [...blogs,blog]
    setBlogs(newBlog);
  }
  const handleMarkAsRead = (time, id) =>{
    setReadingTime(readingTime + time);
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>

      <div className='flex mt-6'>
        {/* blogs container */}
        <div className='w-2/3'>
          <Blogs handleReadingTime={handleReadingTime}
          handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>

        {/* Bookmark container */}
        <div className='w-1/3'>
          <Bookmarks readingTime={readingTime}
          blogs={blogs}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
