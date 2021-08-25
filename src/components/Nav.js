import React,{useState} from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";




function Nav() {
    const[show,setShow]=useState(false); 
   
  
    const [cancel,showCancel]=useState(true);

   
    return (
       
        
       <div className="bg-gray-900 max-w-8xl px-4 mx-auto sm:px-6 xl:msx-w-6xl xl:px-0 flex items-center justify-between  ">
            
            <Router>
            <div>
            <Link to="/">
            <img  className="w-20 sm:w-26  cursor-pointer"  src="https://i.ibb.co/z46bHx3/pngwing-com-removebg-preview.png" alt="sad"/>
           </Link>
            </div>
            <div className="hidden sm:flex flex-grow relative bg-gray-200 rounded-md ">
                
                   
                    
            <svg className="h-9 w-7 absolute left-0  px-1 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                    <input type="text" placeholder="Search" className="w-full p-2 ml-6 bg-transparent outline-none   "/>
                    </div>
          <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block justify-between">
              <div className="flex flex-row justify-around ">
          
           
                 
          <Link to="/project"  className="pl-4 p-1  text-md text-gray-300 font-bold sm:p-4 dark:text-gray-100 hover:bg-blue-600" >Returns<p className="text-xs">& orders</p></Link>
         
         
          <Link className="p-1 font-bold text-md text-gray-300 sm:p-4  dark:text-gray-100 hover:bg-blue-600" to="/contact">Accounts<p className="text-xs" >sign-in</p></Link>

         </div>
          </div>
          <button aria-label="Toggle Dark Mode" type="button" className="w-8 h-8  ml-1 mr-1 rounded sm:ml-4   " >
               <svg className="right-2 fill-current text-gray-200 hover:bg-transparent" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                   <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></button>
          
          
          
          <div className="sm:hidden">
          <button  type="button" onClick={() => setShow(!show) & showCancel(!cancel)} className="w-8 h-8 ml-1 mr-1 rounded ">
				<svg className="fill-current text-gray-200 h-6 w-6 items-center" aria-label="Toggle Menu" viewBox="0 0 20 20" height={300} xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                { cancel ?
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>:<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>} </svg>
			</button>
           {show ?
            <div  className="fixed w-full h-full top-30 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ">
                
                
                    
                <nav className=" fix h-full mt-8 ">
              
                    <div className=" px-12 py-4">
                 
                <Link to="/project" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer hover:text-yellow-400"> Two wheeler</Link>  </div>
                <div className="px-12 py-4">
                  
                <Link to="/contact" className=" text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 cursor-pointer">Four wheeler</Link> </div>
                
                </nav>
                
            </div>: 
            <div  className="fixed w-full h-full top-30 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 translate-x-full ">
                
                
          
           
            <nav className=" fix h-full mt-8">
           
                <div className=" px-12 py-4">
              
            <Link to="/project" className="text-2xl font-bold tracking-widest text-gray-900 cursor-pointer ">Projects</Link>  </div>
            <div className="px-12 py-4">
            <Link to="/contact" className=" text-2xl font-bold tracking-widest text-gray-900">Contact</Link></div>
          
            </nav>
            </div>}
           </div>
           </div>
           </Router>
        </div>
    )
}

export default Nav
