import React from 'react'

function Section4() {
    return (
        // section4
        <section className="section" style={{ background: '#e4fafe' }}>
            <div className='container text-center py-5'>
                <h2 className='fw-bold'> Our Services</h2>
                <div className='bg-info mx-auto my-4' style={{ width: '150px', height: '3px' }}></div>
                <p className='w-50 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta minus repellendus laudantium ducimus corrupti deleniti iste consequatur nobis magni nulla.
                </p>

                <div className="row">
                    {/* item 1 */}
                    <div className="col-lg-4 mt-5">
                        <div className="py-5 px-3 position-relative bg-white">
                            <div className='d-flex justify-content-center align-items-center rounded-circle shadow border
                        bg-white text-primary position-absolute start-50 translate-middle top-0'
                                style={{ width: '70px', height: '70px' }}>
                                <span className='fa fa-facebook text-info' style={{ fontSize: '25px' }}></span>
                            </div>

                            <h3 className='mt-3'>Financial Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa vitae iure autem magnam suscipit voluptatum laboriosam veniam. Consequuntur, aliquid hic.
                            </p>
                        </div>
                    </div>


                    {/* item 2 */}
                    <div className="col-lg-4 mt-5">
                        <div className="border border-info py-5 px-3 position-relative bg-white">
                            <div className='d-flex justify-content-center align-items-center rounded-circle shadow border
                        bg-white text-primary position-absolute start-50 translate-middle top-0'
                                style={{ width: '70px', height: '70px' }}>
                                <span className='fa fa-facebook text-info' style={{ fontSize: '25px' }}></span>
                            </div>

                            <h3 className='mt-3'>Financial Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa vitae iure autem magnam suscipit voluptatum laboriosam veniam. Consequuntur, aliquid hic.
                            </p>
                        </div>
                    </div>


                    {/* item 3 */}
                    <div className="col-lg-4 mt-5">
                        <div className="py-5 px-3 position-relative bg-white ">
                            <div className='d-flex justify-content-center align-items-center rounded-circle shadow border
                        bg-white text-primary position-absolute start-50 translate-middle top-0'
                                style={{ width: '70px', height: '70px' }}>
                                <span className='fa fa-facebook text-info' style={{ fontSize: '25px' }}></span>
                            </div>

                            <h3 className='mt-3'>Financial Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa vitae iure autem magnam suscipit voluptatum laboriosam veniam. Consequuntur, aliquid hic.
                            </p>
                        </div>
                    </div>


                </div>

                <button className="btn btn-info text-white">All Services</button>

            </div>
        </section>
    )
}

export default Section4