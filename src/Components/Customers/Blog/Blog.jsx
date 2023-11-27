import React from 'react';

const Blog = () => {
    return (
      <div className="mt-12 ml-72 grid grid-cols-2 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1700770361/cld-sample-4.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Healthy Food
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              tenetur.
            </p>

            <div className="card-actions justify-end">
              <div className="badge badge-outline">Health</div>
              <div className="badge badge-outline">Weight Loss </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] w-full"
              src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1700770358/samples/dessert-on-a-plate.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Healthy
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              eveniet!
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Health</div>
              <div className="badge badge-outline">Weight Gain </div>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              className="h-[300px] w-full"
              src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1700944780/fit-vs-fat_e9o6rv.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Gain
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              eveniet!
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Health</div>
              <div className="badge badge-outline">Weight Gain </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-3">
          <figure>
            <img
              className="h-[300px] w-full"
              src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1700770353/samples/breakfast.jpg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Gain
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              eveniet!
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Health</div>
              <div className="badge badge-outline">Weight Gain </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;