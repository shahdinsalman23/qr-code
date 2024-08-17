import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap'
import qrcodegenerate from "../../../img/qr-code-generate.webp"
import qrpersonlize from "../../../img/qr-personalize.webp"
import qrflexibility from "../../../img/qr-flexibility.webp"
import qrupdate from "../../../img/qr-update.webp"

const Threetypesec = () => {
    return (
        <>
            <section className="three_types_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="three_types_sec_head">
                                <h4>Bring your ideas to life with the Website QR!</h4>
                                <p>Create, customize and launch the perfect advertising campaign.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrcodegenerate} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>Create</h6>
                                <h3>A fast and effective way to share any link instantly</h3>
                                <p>Websites, forms, download links, online files, social networks... any URL can be converted into a QR code.</p>
                                <a href="#">Generate QR code <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>Personalize</h6>
                                <h3>Customize your Website QR to make it easier to share</h3>
                                <p>You can shorten it and modify the text, so that it has your brand in the link, so that your customers know who it belongs to before accessing it.</p>
                                <a href="#">Generate QR code <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrpersonlize} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="create_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrflexibility} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>Flexibility</h6>
                                <h3>Customize your QR code to be more attractive</h3>
                                <p>Attract scans by customizing your QR with your own colors and logo. You can also choose the presentation and framework to improve the user experience.</p>
                                <a href="#">Generate QR code <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="personalize_type_sec">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="create_type_txt">
                                <h6>To update</h6>
                                <h3>Rest assured: you can correct errors when necessary</h3>
                                <p>If you find an error in your QR or destination URL, don't worry: the information and links can be replaced at any time, without the need to create a new QR code again.</p>
                                <a href="#">Generate QR code <FaArrowRight /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="create_type_img">
                                <img src={qrupdate} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Threetypesec