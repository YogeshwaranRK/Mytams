import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
function DownBar() {
    return (
        <div className="bg-gray-700 max-w-8xl px-4 mx-auto sm:px-6 xl:msx-w-6xl xl:px-0 ">
            <Router>
            <div className="hidden sm:block md:flex md:flex-row md:justify-between ">
            
          
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Four wheeler</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Two wheeler</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Accessories</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Helmets</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Car Model</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Brand</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Sensors</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Engine</Link>
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-gray-600" to="/contact">Tires</Link>
         </div>
          
          </Router>
        </div>
    )
}

export default DownBar
