import React from 'react';


const Label= ({ label }) => {
  return (
    <div>
      <p className=" transition hover:text-neutral-900 text-sm group-hover:translate-x-2 text-white/70  group-hover:text-red-500 cursor-pointer">
        {label}
      </p>
    </div>
  );
};

export default Label;