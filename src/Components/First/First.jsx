// import React from 'react'
// import logo from '../../assets/avataaars (1).svg'
// export default function First() {
//   return (
//     <>
     
//       <div className="bg-[#1ABC9C] py-20 min-h-screen flex flex-col justify-center items-center">
        
        
//         <div className="flex flex-col items-center max-w-lg mx-auto">
          
      
//           <img src={logo} alt="Logo" className="w-70 h-60 mb-6 mt-5 pt-5" />
          
   
//           <h1 className="text-white text-4xl md:text-5xl text-center font-bold mb-4 uppercase">
//             Start Framework
//           </h1>
         
//           <div className="flex items-center justify-center my-4">
       
//             <div className="w-20 h-1 bg-white mx-3 rounded"></div>
            
          
//             <span className="text-white text-3xl mx-3">
//               &#9733; 
//             </span>
            
    
//             <div className="w-20 h-1 bg-white mx-3 rounded"></div>
//           </div>
         
          
 
//           <p className="text-white text-lg sm:text-xl text-center">
//             Graphic Artist - Web Designer - Illustrator
//           </p>
          
//         </div>
//       </div>
//     </>
//   )
// }

import React from 'react'
import logo from '../../assets/avataaars (1).svg'

export default function First() {
  return (
    <>
      <div className="bg-[#1ABC9C] w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center text-center px-4 max-w-lg">
          
          <img
            src={logo}
            alt="Logo"
            className="w-60 h-60 mb-6 mt-5 pt-5 object-contain"
          />
          
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 uppercase">
            Start Framework
          </h1>
          
          <div className="flex items-center justify-center my-4">
            <div className="w-20 h-1 bg-white mx-3 rounded"></div>
            <span className="text-white text-3xl">&#9733;</span>
            <div className="w-20 h-1 bg-white mx-3 rounded"></div>
          </div>
          
          <p className="text-white text-lg sm:text-xl">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  )
}
