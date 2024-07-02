import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className="flex space-x-6 mt-4 mb-6 ml-7 pl-2">
          <Link to="/" className="text-gray-500 hover:text-blue-900 font-bold">My Teams</Link>
          <Link to="/MyProject" className="text-gray-500 hover:text-blue-900 font-bold">My Project</Link>
          <Link to="/Organization" className="text-gray-500 hover:text-blue-900 font-bold pb-1">Organization</Link>
          <Link to="/Hierarchy" className="text-gray-500 hover:text-blue-900 font-bold">Hierarchy</Link>
        </nav>
    </div>
  )
}

export default Navbar








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [clickedLink, setClickedLink] = useState('');

//   const handleClick = (link) => {
//     setClickedLink(link);
//   };

//   const linkClasses = (link) =>
//     `font-bold ${
//       clickedLink === link ? 'text-blue-900' : 'text-gray-500'
//     } hover:text-blue-900`;

//   return (
//     <div>
//       <nav className="flex space-x-6 mt-4 mb-6 ml-7 pl-2">
//         <Link
//           to="/"
//           className={linkClasses('/')}
//           onClick={() => handleClick('/')}
//         >
//           My Teams
//         </Link>
//         <Link
//           to="/MyProject"
//           className={linkClasses('/MyProject')}
//           onClick={() => handleClick('/MyProject')}
//         >
//           My Project
//         </Link>
//         <Link
//           to="/Organization"
//           className={linkClasses('/Organization')}
//           onClick={() => handleClick('/Organization')}
//         >
//           Organization
//         </Link>
//         <Link
//           to="/Hierarchy"
//           className={linkClasses('/Hierarchy')}
//           onClick={() => handleClick('/Hierarchy')}
//         >
//           Hierarchy
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

