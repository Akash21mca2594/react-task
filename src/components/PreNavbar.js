import React from 'react'
const PreNavbar = () => {
    return (
        <nav className="bg-info">
            <div className="container">

                <div className="row py-2">
                    <div className="col-6">
                        <p className="text-white m-0" alt="">We are open 24/7 | mail@umail.com</p>
                    </div>

                    <div className="col-6 text-end">
                        <a href="https://facebook.com" className='text-decoration-none text-white'>
                            <span className="fa fa-twitter"></span>
                        </a>
                        <a href="https://facebook.com" className='text-decoration-none ms-2 text-white'>
                            <span className="fa fa-linkedin"></span>
                        </a>
                        <a href="https://facebook.com" className='text-decoration-none ms-2 text-white'>
                            <span className="fa fa-facebook"></span>
                        </a>
                        <a href="https://facebook.com" className='text-decoration-none ms-2 text-white'>
                            <span className="fa fa-instagram"></span>
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default PreNavbar
