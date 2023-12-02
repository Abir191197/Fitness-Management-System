import React, { useEffect, useState } from 'react';
import DeleteSingle from './DeleteSingle';



const DeleteBlog = () => {


  











  
 const [blogs, setBlogs] = useState([]);
 useEffect(() => {
   fetch(`http://localhost:5000/Blog`)
     .then((res) => res.json())
     .then((data) => setBlogs(data));
 }, []);

 return (
   <div>
     <div className="mt-12 ml-80">
       <div className="overflow-x-auto">
         <table className="table table-zebra">
           {/* head */}
           <thead>
             <tr>
               <th>Number</th>
               <th>Title</th>
               <th>category</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {blogs.map((blog) => (
               <DeleteSingle key={blog._id} blog={blog}></DeleteSingle>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 );

    
};

export default DeleteBlog;