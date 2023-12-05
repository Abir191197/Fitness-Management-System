import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    
     useEffect(() => {
       fetch(`http://localhost:5000/Blog`)
         .then((res) => res.json())
         .then((data) => setBlogs(data));
       
      
     }, []);

    return (
      <div>
        <div className="mt-12 ml-72 grid grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <SingleBlog blog={blog} key={blog._id} ></SingleBlog>
          ))}
        </div>

       
      </div>
    );
};

export default Blog;