import { useState } from "react"
import Header from "./Header"

 const Login = ()=>{
    const [sign  , setSign] = useState(true)
    const changestate =()=>{
        setSign(!sign)
    }
    return (
        <div>
              <Header/>
        <div className="absolute">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
{/* <div className="bg-black"> */}
        <form className="rounded-lg bg-black bg-opacity-80 w-3/12 absolute p-12 mx-auto my-36 right-0 left-0  flex-col" >
          <h1 className="text-white p-2">
            { sign ? "Sign in" : "Sign Up"}
               </h1>
               { !sign &&
            <input type="text" placeholder="Full Name " className="py-2 bg-gray-700 w-full m-2"/>
        
        }
            <input type="text" placeholder="Email address" className="py-2 bg-gray-700 w-full m-2"/>
            <input type="password" placeholder="Password"className="bg-gray-700 py-2 m-2 w-full" />
            <button type="submit" className="rounded-lg py-4 my-6 w-full bg-red-500 text-white">  { sign ? "Sign in" : "Sign Up"} </button>
          
            <p className="py-4 text-white" onClick={changestate}>
            { sign ? "New to netflix ? Sign Up Now" : "already user? Sign in now"}
                </p>
       
        </form>
        {/* </div> */}


        </div>
    )
}
export default Login