import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  unlimitedsvg from "../../../img/unlimited_svg.svg"
import variatyqrtypes from "../../../img/variable_svg.svg"
import varietydownload from "../../../img/variety_download_svg.svg"
import unlimitedmember from "../../../img/unlimited_member.svg"
import completeanlytics from "../../../img/complete_analytics.svg"
import editingqr from "../../../img/editing_qr.svg"
import premiumsupport from "../../../img/premium_support.svg"
import cancelwhenever from "../../../img/cancel_whenever.svg"
import customdomain from "../../../img/custom_domain.svg"


const Fourtypesec = () => {
  return (
    <>
        <section className="all_plan_include_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="all_plan_head">
                            <h3>All plans include:</h3>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedsvg} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Unlimited dynamic QR</h3>
                                            <p>Create unlimited QRs and update them whenever you want in real time.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={variatyqrtypes} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Variety of QR types</h3>
                                            <p>Choose from multiple QR types, such as URL, PDF, Menu, and more.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={varietydownload} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Variety of download formats</h3>
                                            <p>Download your QR in PNG, SVG, PDF, among others.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedmember} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Unlimited Members</h3>
                                            <p>Invite the users you want to collaborate in the creation and management of your QR.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Complete QR Analytics</h3>
                                            <p>Get statistics with the number of scans, locations and user devices.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>QR editing and management</h3>
                                            <p>Customize your QRs with colors, fonts, and the logo you choose, among other options.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_box">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={unlimitedmember} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Unlimited scans</h3>
                                            <p>Your QRs can be scanned unlimitedly.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={completeanlytics} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Bulk creation and download</h3>
                                            <p>Generate multiple QRs with CSV or REST API and obtain them in a single download.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={editingqr} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Integrate Google and Facebook pixel</h3>
                                            <p>Track interaction with your QRs.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="all_plan_boxs">
                            <Row>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={premiumsupport} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Premium Support</h3>
                                            <p>Your QRs can be scanned unlimitedly.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={cancelwhenever} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Cancel whenever you want</h3>
                                            <p>Generate multiple QRs with CSV or REST API and obtain them in a single download.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="plan_box_content">
                                        <img src={customdomain} alt="" />
                                        <div className="plan_box_text">
                                            <h3>Custom Domain</h3>
                                            <p>Track interaction with your QRs.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Fourtypesec