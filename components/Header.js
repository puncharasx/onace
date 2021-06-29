import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
        <Navbar />
        <section className="section-header">
            <div className="container  ">
                <div className="row">
                    <div className="headerinfo text-align-center text-center">
                        <h1 className="text-uppercase text-primary">onace</h1>
                        <h2 className="pb-2 text-uppercase">cryptocurrency</h2>
                        <button className="btn btn-primary headerinfo--button font">Join Now</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header
