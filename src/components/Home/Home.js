import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form, Figure } from 'react-bootstrap';
import logo from "../../assets/Group152.svg";
import doctor from "../../assets/doctor_two_color.svg";
import playMobile from "../../assets/playMobile.png";
import fastSearch from "../../assets/icons/fast-search.svg";
import efficient from "../../assets/icons/efficent.svg";
import easy from "../../assets/icons/easy.svg";
import search from "../../assets/icons/search.svg";
import drugStore from "../../assets/drugStore.png";
import store from "../../assets/store.png";
import visitOnline from "../../assets/visitOnline.png";
import nobatDehi from "../../assets/nobatDehi.png";
import damanitoApp from "../../assets/DarmanitoApp.png";
import downloadBlueButton from "../../assets/downloadBlueButton.png";
import bazzarBlueButton from "../../assets/bazzarBlueButton.png";
import sibAppBlueButton from "../../assets/sibAppBlueButton.png";
import healthDoctor from "../../assets/healthDoctor.png";
import callCenter from "../../assets/callCenter.png";
import bazzarBlackButton from "../../assets/bazzarBlackButton.png";
import sibAppBlackButton from "../../assets/sibAppBlackButton.png";

const Home = () => (
        <Container className="home">
            <Row className="nav">
                <Col md={2} className="logo">
                    <Image src={logo} alt="Logo" />
                </Col>
                <Col md={8} className="links">
                    <Nav className="justify-content-center" activeKey="/home" >
                        <Nav.Item>
                            <Nav.Link href="/home">صفحه اصلی</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">درباره ما</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">تماس باما</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">عضویت داروخانه ها</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={2} className="button">
                    <Button variant="primary">دانلود درمانیتو</Button>
                </Col>
            </Row>

            <Row className="second" >
                <Col sm={6} className="right">
                    <Row className="title">
                        <h4>اپلیکیشن درمانیتو</h4>
                    </Row>
                    <Row>
                        <p>درمانیتو سامانه هوشمند درمان و سلامت</p>
                    </Row>
                    <Row>
                        <Button className="button">دانلود درمانیتو</Button>
                        <Button className="button">عضویت داروخانه ها</Button>
                    </Row>
                </Col>
                <Col sm={6} className="left">
                    <Image src={doctor}/>
                    <svg xmlns= "http://www.w3.org/2000/svg" width= "700" className="bg"
                    height= "618.916" viewBox= "0 0 943.749 618.916" > 
                        <path id= "Path_15701"
                        data-name= "Path 15701" d=
                        "M-154.953,356.268c61.376-70.487,182.582,20.7,358.2-19.207,152.109-34.582,160.86-126.439,282.392-121.884,88.789,3.31,185.541,54.578,238.714,143.895C783,457.551,761.68,557.81,755.7,582.139c-26.713,109.124-106,166.687-133.968,186.348-115.24,80.953-244.555,66.767-306.592,59.992C82.1,802.957-167.386,636.583-178.495,455.7-179.971,432.021-182.658,388.1-154.953,356.268Z"
                        transform= "translate(179.337 -215.014)" fill= "#e6f3ff" opacity= "0.41" /> 
                    </svg>
                </Col>
            </Row>

            <Row className="third" >
                <Col sm={6} >
                    <Image className="right" src={playMobile}/>
                </Col>
                <Col sm={6} className="left">
                    <Row className="title">
                        <h4>درباره درمانیتو</h4>
                    </Row>
                    <Row>
                        <p>درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است.</p>
                    </Row>
                    <Row className="footer">
                        <Figure>
                            <Figure.Image src={fastSearch} />
                            <Figure.Caption>جستجو سریع </Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image src={efficient} />
                            <Figure.Caption>به صرفه</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image src={easy} />
                            <Figure.Caption>راحت</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image src={search} />
                            <Figure.Caption>جستجو سریع</Figure.Caption>
                        </Figure>
                    </Row>
                </Col>
            </Row>

            <Row className="fourth">
                <Container >
                    <Row>
                        <Col sm={12}  >
                            <h4 className="up">امکانات درمانیتو</h4>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={6} >
                            <Image className="image" src={drugStore} />
                            <Image className="image" src={store} />
                            <Image className="image" src={visitOnline} />
                            <Image className="image" src={nobatDehi} />
                        </Col>
                        <Col sm={6} className="down__left" >
                            <h5>داروخانه آنلاین</h5>
                            <p>در سرویس داروخانه شما میتوانید نسخه دارویی ی ا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.</p>
                            <div className="steps">
                                <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                <p className="step">قدم اول</p>
                                <p className="step__description">وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید.</p>
                                <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                <p className="step">قدم دوم</p>
                                <p className="step__description">بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید.</p>
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                <p className="step">قدم سوم</p>
                                <p className="step__description">اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>

            <Row className="fifth" >
                <Col sm={6} className="right" >
                    <h4>دانلود اپلیکیشن درمانیتو</h4>
                    <p>برای دریافت لینک دانلود شماره موبایل خود را وارد کنید</p>
                    <Form>
                        <Form.Group controlId="number">
                            <Form.Control className="input" type="number" placeholder="شماره همراه را وارد کنید 09000000000" />
                        </Form.Group>
                        <Button className="submit" variant="primary" type="submit">
                            بفرست
                        </Button>
                    </Form>
                    <div className="store">
                        <Image className="store__icon" src={downloadBlueButton}/>
                        <Image className="store__icon" src={bazzarBlueButton}/>
                        <Image className="store__icon" src={sibAppBlueButton}/>
                    </div>
                </Col>
                <Col sm={6} className="left" >
                    <Image className="left__image"  src={damanitoApp}/>
                </Col>
            </Row>

            <Row className="sixth" >
                <Col sm={6} className="right">
                    <h4 className="title">عضویت داروخانه یا مراکز درمانی</h4>
                    <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</p>
                    <Form>
                        <Form.Group controlId="number">
                            <Form.Control className="input" type="number" placeholder="شماره همراه را وارد کنید 09000000000" />
                        </Form.Group>
                        <Button className="button" variant="primary" type="submit">
                            ثبت نام سریع
                        </Button>
                    </Form>
                </Col>
                <Col sm={6} className="left">
                    <Image src={healthDoctor} />
                </Col>
            </Row>

            <Row className="seventh" >
                <Col sm={6} className="right" >
                    <h5>پشتبانی درمانیتو</h5>
                    <p>پاسخگویی روزهای کاری از 9 صبح تا 9 شب</p>
                </Col>
                <Col sm={6} className="left" >
                    <Image src={callCenter} />
                </Col>
            </Row>

            <Row className="footer" >
                <Col sm={4} >
                    <Image src={logo}/>
                    <h5>سوپر اپلیکیشن حوزه درمان و سلامت</h5>
                    <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
                    <i href="#" className="fa fa-linkedin"></i>
                    <i href="#" className="fa fa-twitter"></i>
                    <i href="#" className="fa fa-instagram"></i>
                </Col>
                <Col sm={2} >
                    <h5>خدمات درمانیتو</h5>
                    <p>داروخانه آنلاین</p>
                    <p>فروشگاه آنلاین</p>
                    <p>ویزیت آنلاین</p>
                    <p>پرونده پزشکی</p>
                </Col>
                <Col sm={2}>
                    <h5>صفحات درمانیتو</h5>
                    <p>تماس باما</p>
                    <p>درباره ما</p>
                    <p>سوالات متداول</p>
                    <p>قوانین و شرایط</p>
                </Col>
                <Col sm={4} >
                    <h5>دانلود درمانیتو</h5>
                    <Image className="store" src={bazzarBlackButton}/>
                    <Image className="store" src={sibAppBlackButton}/>
                </Col>
            </Row>
    </Container>
    );

export default Home;