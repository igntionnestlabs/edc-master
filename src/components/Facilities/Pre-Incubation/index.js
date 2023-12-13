import React from 'react';
import Courses from './Fields';



const AllFields = () => {
    const data = require('../../../json/fields.json');


  return (
    <section className="bg-white py-0 md:py-16">
       <Courses data={data}/>
    </section>
  );
};

export default AllFields;
