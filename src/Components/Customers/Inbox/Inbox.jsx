import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlog';
import SingleInbox from './SingleInbox';

const Inbox = () => {

const [AlldataNutri, setAlldataNutri] = useState([]);

    

    
    useEffect(() => {
    
        fetch(`http://localhost:5000/Guideline_from_Nutritionist?email=ardhrubo908@gmail.com`)
      
    .then((res) => res.json())
    .then((data) => setAlldataNutri(data));
    }, []);
    



    return (
      <div>
        <div className="ml-72 mt-20 w-80 ">
          {AlldataNutri.map((data) => (
            <SingleInbox key={data._id} data={data}></SingleInbox>
          ))}
        </div>
      </div>
    );
};

export default Inbox;