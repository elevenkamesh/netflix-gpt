import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Header from './Header';
import Browser from './Browser';
import Login from './login';

 const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
path :'/' ,
element : <Login  />
    } , 
    {
        path : '/brower' , 
        element : <Browser />
    }


])

    return(
        <div>
          
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
