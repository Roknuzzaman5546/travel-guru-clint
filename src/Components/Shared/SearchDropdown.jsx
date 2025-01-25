// import React, { useState } from "react";

// const SearchDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const countries = [
//     "Afghanistan",
//     "Albania",
//     "Algeria",
//     "Andorra",
//     "Angola",
//     "Argentina",
//     "Armenia",
//     "Australia",
//     "Austria",
//     "Azerbaijan",
//     "Bahamas",
//     "Bahrain",
//     "Bangladesh",
//     "Barbados",
//     "Belarus",
//     "Cabo Verde",
//     "Cambodia",
//     "Cameroon",
//     "Chad",
//     "Chile",
//     "China",
//     "Colombia",
//     "India",
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const filteredCountries = countries.filter((country) =>
//     country.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative inline-block w-64">
//       <button
//         onClick={toggleDropdown}
//         className="flex justify-between items-center w-full p-2 bg-green-500 text-white border-none rounded cursor-pointer"
//       >
//         Select Country
//         <span className="ml-2">&#9662;</span>
//       </button>

//       {isOpen && (
//         <div
//           id="dropdownItems"
//           className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded max-h-64 overflow-y-auto z-10"
//         >
//           <input
//             type="text"
//             id="dropdownSearch"
//             placeholder="Search..."
//             className="w-full p-2 border-b border-gray-300 outline-none"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           {filteredCountries.length > 0 ? (
//             filteredCountries.map((country, index) => (
//               <div
//                 key={index}
//                 className="p-2 cursor-pointer hover:bg-gray-200"
//               >
//                 {country}
//               </div>
//             ))
//           ) : (
//             <div className="p-2 text-gray-500">No results found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDropdown;

import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
