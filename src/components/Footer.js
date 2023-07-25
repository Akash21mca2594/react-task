import React from 'react'
import footerImg from "../assests/footer.jpeg"

function Footer() {
    return (
        <footer className='footer py-5' style={{ background: `url(${footerImg}) no-repeat center`, backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6">
                        <h2 className='text-white fs-3 fw-bold'>Subscribe to our Newsletter <br />
                            For More Update</h2>
                        <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum praesentium dolorum, eos sed ipsa commodi corrupti culpa deleniti facere cumque?
                        </p>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <form className='w-100'>
                            <div class="mb-3">
                                <input type="email"
                                    className="form-control bg-transparent text-white"
                                    placeholder='Enter your Email'
                                    id="email"
                                />
                            </div>

                            <button type="submit" className="btn btn-info text-white">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer