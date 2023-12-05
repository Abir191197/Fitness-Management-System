import React, { useEffect, useState } from 'react';
import DeleteSingle from './DeleteSingle';
import Swal from "sweetalert2";

const DeleteBlog = () => {


  





  
 const [blogs, setBlogs] = useState([]);
 useEffect(() => {
   fetch(`http://localhost:5000/Blog`)
     .then((res) => res.json())
     .then((data) => setBlogs(data));
 }, []);
  
  
  

  const HandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Blog/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = blogs.filter(blog => blog.id === data._id);
              setBlogs(remaining);
            }
          });
      }
    });
  };









  
  

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
               <DeleteSingle
                 key={blog._id}
                 blog={blog}
                 HandleDelete={HandleDelete}></DeleteSingle>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 );

    
};

export default DeleteBlog;