import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleReadingTime, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs);
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id}
                     blog={blog}
                     handleReadingTime={handleReadingTime} 
                     handleMarkAsRead={handleMarkAsRead}
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;