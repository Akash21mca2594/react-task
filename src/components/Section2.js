import React from 'react'
import pic from "../assests/section2.jpg"
import "../styles/Section2.css"

function Section2() {
    return (
        <section className='section2 container-fluid'>
            <div className="container">
            <div className='row'>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-start mt-5'>
                    <h2 className='fw-bold fs-3'>We Are Consulting For Your<br />Business fianances</h2>
                    <p className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis! Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis! Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis! Lorem ipsum dolor sit amet.
                    </p>
                    <button className='btn btn-info px-4 py-2 text-white'>Know more</button>
                </div>

                <div className='col-md-6 mt-5'>
                    <img src={pic} className='w-100 h-100' alt=''/>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Section2
