import React from 'react'
import prf from '../prf.png'

 const Profil = () => {
  return (
    <>
             <form className=' container p-4' method='POST'>
                <h1 className='text-center fw-bold text-white'>Profil</h1>
                <div className='prf'>
                     <img src={prf} alt="prf" />
                </div>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5">Username</label>
                    <input type="text" className="form-control p-3" readOnly />
                </div>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5 ">Email</label>
                    <input type="email" className="form-control p-3"  readOnly/>
                </div>            
                <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="btn btn-warning btn-lg fw-bold ">Logout</button>
                </div>
            </form>
            </>
  )
}

export default Profil