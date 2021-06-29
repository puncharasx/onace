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
                        <h2 className="pb-2">ซื้อขายคริปโตในไม่กี่นาที</h2>
                        <p className="pb-2">ร่วมเป็นส่วนหนึ่งของตลาดเเลกเปลี่ยนคริปโตที่ใหญ่ที่สุดในโลก</p>
                        <button className="btn btn-primary headerinfo--button">ลงทะเบียนตอนนี้</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header
