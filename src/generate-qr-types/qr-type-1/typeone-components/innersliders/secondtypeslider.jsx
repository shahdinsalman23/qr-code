import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import mobinnerimg from "../../../../img/mob_inner_img.png";
import typeproduct from "../../../../img/type_product_svg.svg";
import typeshop from "../../../../img/type_shop.svg";
import typesoftware from "../../../../img/type_software.svg";
import typerestaurent from "../../../../img/type_restaurent.svg";
import typengo from "../../../../img/type_ongs.svg";
import typefinance from "../../../../img/type_finance.svg";
import pdfinnerimg from "../../../../img/mockup_pdf_preview.webp"
import vCardinnerimg from "../../../../img/mockup_vcard-plus_preview.webp"
import imagesinnerimg from "../../../../img/mockup_images_preview.webp"
import textInnerimg from "../../../../img/text_mockeup.png"
import videoInnerimg from "../../../../img/mockup_video_preview.webp"
import producrleftside from "../../../../img/products-slider-leftside.webp"

const Secondtypeslider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                effect="fade"
                fadeEffect={{ crossFade: true }}
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <div className="upparsmall_card_slider">

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeproduct} alt="" />
                            </div>
                            <p>Website</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typeshop} alt="" />
                            </div>
                            <p>PDF</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typesoftware} alt="" />
                            </div>
                            <p>vCard Plus</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typerestaurent} alt="" />
                            </div>
                            <p>Images</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typengo} alt="" />
                            </div>
                            <p>Text</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="list_icon_imgtxt">
                            <div className="list_icon_img">
                                <img src={typefinance} alt="" />
                            </div>
                            <p>Video</p>
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #EE5558 0%, rgba(238, 85, 88, 0.00) 100%)",
                                }}
                            >
                                <div className="slider_fadeleft">
                                    <img src={producrleftside} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Products</h3>
                                <p>Allow your customers to access your online store quickly and securely.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(236, 125, 67) 0%, rgba(236, 125, 67, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={pdfinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Shops</h3>
                                <p>With the dynamic URL QR, gain customers by sharing the direct link to your online clothing store.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(255, 107, 108) 0%, rgba(255, 107, 108, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={vCardinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Software</h3>
                                <p>Share the download link of your application or game, whether the trial or demo version, to attract customers in your advertising campaign.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(253, 188, 203) 0%, rgba(253, 188, 203, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={imagesinnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Restaurants</h3>
                                <p>Share the online menu of your restaurant or delivery using a QR code, so that your customers can place their order quickly.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#" className="create_more_info">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(201, 80, 83) 0%, rgba(201, 80, 83, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={textInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>NGOs</h3>
                                <p>Through a dynamic URL QR, it allows citizens to access institutional or donation pages.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col lg={6} className="p-0">
                            <div
                                className="slider_mob_mainbox"
                                style={{
                                    background:
                                        "linear-gradient(rgb(208, 81, 208) 0%, rgba(208, 81, 208, 0) 100%)",
                                }}
                            >
                                <div className="slider_mob_bg_box">
                                    <img src={videoInnerimg} alt="QR Code Example" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="slider_mob_textbox websiteqr_txt">
                                <h3>Finance and Insurance</h3>
                                <p>With a dynamic URL QR, create direct access to your clients' online accounts.</p>
                                <div className="create_btns">
                                    <a href="#">Create QR Code</a>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Secondtypeslider