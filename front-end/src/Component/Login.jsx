import { Link } from "react-router-dom";
import Register from "./Register";
 const Login = () => {
  return (
    <>
        <div className='container my-5' >
            <form className=' p-4' method='POST'>
                <h1 className='text-center fw-bold text-white'>Login</h1>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5 ">Email</label>
                    <input type="email" className="form-control p-3" />
                </div>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5" >Password</label>
                    <input type="password" className="form-control p-3" />
                </div>
              
                <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="btn btn-warning btn-lg ">Login</button>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                        <h4>Haven't Account ?    <Link  className='Register' to="/Register">Register</Link></h4>              
                 </div>
              
            </form>
        </div>
    
    </>
  )
}
export default Login
