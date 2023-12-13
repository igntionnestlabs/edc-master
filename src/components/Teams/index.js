import React from 'react';
import Card from '../Teams/Card';
import data from '../../json/teams.json';

const Teams = () => {
  // Group the data into rows with four items each
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    rows.push(data.slice(i, i + 4));
  }

  return (
    <section className="bg-[#f0f4f8] py-16">
        <div className='flex flex-col  mx-20'>
                <div className=" flex items-center gap-x-3 mb-2">
                    <h1 className="uppercase text-[#5c8eb0] text-sm font-medium">Team</h1>
                    <div className="border-red-400 border-b-[1px] w-40"></div>
                </div>

                <h1 className='uppercase text-3xl text-[#263d4d] font-bold mb-14'>Meet our Team</h1>

            </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
          {row.map((person) => (
            <Card key={person.id} data={person} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Teams;
