import React from 'react';

const SingleBlog = ({ blog }) => {

    const { Title, img, category1, category2, Body } = blog;
   
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] w-full"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {Title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{Body}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category1}</div>
              <div className="badge badge-outline">{category2} </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;