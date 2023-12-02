import React from 'react';
import Swal from "sweetalert2";


const AddBlog = () => {

    const handleBlogData = (event) => {
      event.preventDefault();

      const form = event.target;
      const Title = form.title.value;
      const img = form.img.value;
      const Body = form.Body.value;
      const category1 = form.category1.value;
       const category2 = form.category2.value;

      const BlogData = { Title, img, category1, Body, category2 };
      console.log(BlogData);
    
    

    
        fetch("http://localhost:5000/Blog", {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(BlogData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: "Blog Added Successfully!!!",
                icon: "success",
              });
            }
            form.reset();
          });
        
    
    
    

    };




    return (
      <>
        <div className="mt-12 ml-52">
          <form onSubmit={handleBlogData}>
            <div class="flex justify-center items-center w-screen h-screen bg-white">
              <div class="container mx-auto my-4 px-4 lg:px-20">
                <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                  <div class="flex">
                    <h1 class="font-bold uppercase text-3xl">Add Blog</h1>
                  </div>
                  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                      name="Title"
                      class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Title*"
                    />
                    <input
                      name="Type"
                      class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Type"
                    />
                    <input
                      name="category1"
                      class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Category 1"
                    />
                    <input
                      name="category2"
                      class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Category 2"
                      
                    />
                    <input
                      name='img'
                      class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Image link"
                      
                    />
                  </div>
                  <div class="my-4">
                    <textarea
                      name='Body'
                      placeholder="Body"
                      class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                  </div>
                  <div class="my-2 w-1/2 lg:w-1/4">
                    <button
                      class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        
      </>
    );
};

export default AddBlog;