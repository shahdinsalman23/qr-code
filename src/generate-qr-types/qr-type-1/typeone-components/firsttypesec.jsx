import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import pgmobinner from "../../../img/mob_inner_img.png"


const Firsttypesec = () => {
  return (
    <>
        <section className="type_first_sec">
            <Container>
                <Row>
                    <Col lg={6}>
                    <div className="typepg_breadscrum">
                        <a href="#">Homepage</a>
                        <span><IoChevronForwardSharp /></span>
                        <a href="#">Types of QR code</a>
                        <span><IoChevronForwardSharp /></span>
                        <a href="#">Website</a>
                    </div>
                        <div className="type_first_sec_txt">
                            <h6>Create a QR code for Website</h6>
                            <h2>Share a <span>Website</span> with your customers with a simple scan</h2>
                            <p>And allow them to easily access the landing page of your choice. You can edit your URL as many times as you need, even after printing your QR code.</p>
                            <a href="#">Create QR code <FaArrowRight /></a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="website_qrcode_mob">
                            <img src={pgmobinner} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Firsttypesec