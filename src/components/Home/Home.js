import React from 'react';
import { Container, Col, Row, Button, Nav, Image, Form } from 'react-bootstrap';
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

const Home = () => {
    return(
        <Container  style={{maxWidth: "100%"}}>

            <Row>
                <Col md={2} style={{ textAlign:"right"}}>
                    <Image src={logo} alt="Logo" />
                </Col>
                <Col md={8} style={{ textAlign:"center" }}>
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
                <Col md={2} style={{ alignContent:"center", alignItems:"center", display:"flex"}}>
                    <Button variant="primary">دانلود درمانیتو</Button>
                </Col>
            </Row>

            <Row style={{ marginTop:"10px"}}>
                <Col sm={6} style={{backgroundColor: "yellow"}}>
                    <Row>
                        <h4>اپلیکیشن درمانیتو</h4>
                    </Row>
                    <Row>
                        <p>درمانیتو سامانه هوشمند درمان و سلامت</p>
                    </Row>
                    <Row>
                        <Button>دانلود درمانیتو</Button>
                        <Button>عضویت داروخانه ها</Button>
                    </Row>
                </Col>
                <Col sm={6} style={{backgroundColor: "aqua"}}>
                    <Image src={doctor}/>
                </Col>
            </Row>

            <Row style={{ marginTop:"10px"}}>
                <Col sm={6} style={{backgroundColor: "aqua"}}>
                    <Image src={playMobile}/>
                </Col>
                <Col sm={6} style={{backgroundColor: "yellow", textAlign:"right"}}>
                    <Row>
                        <h4>درباره درمانیتو</h4>
                    </Row>
                    <Row>
                        <p>.درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده است</p>
                    </Row>
                    <Row>
                        <Col><Image src={fastSearch}/></Col>
                        <Col><Image src={efficient}/></Col>
                        <Col><Image src={easy}/></Col>
                        <Col><Image src={search}/></Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ marginTop:"10px"}}>
                <Container style={{maxWidth: "100%"}}>
                    <Row>
                        <Col sm={12} style={{backgroundColor: "lightGreen", display:"block", textAlign:"right"}}>
                        <h4>امکانات درمانیتو</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} style={{backgroundColor: "yellow"}}>
                            <Image src={drugStore} />
                            <Image src={store} />
                            <Image src={visitOnline} />
                            <Image src={nobatDehi} />
                        </Col>
                        <Col sm={6} style={{backgroundColor: "aqua", textAlign:"right"}}>
                            <h5>داروخانه آنلاین</h5>
                            <p>در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید </p>
                            <div>
                                <p>قدم اول</p>
                                <p>وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید</p>
                                <p>قدم دوم</p>
                                <p>بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید</p>
                                <p>قدم سوم</p>
                                <p>اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>

            <Row style={{ marginTop:"10px", backgroundColor: "lightBlue"}}>
                <Col sm={6} style={{backgroundColor: "aqua", textAlign:"right"}}>
                    <h4>دانلود اپلیکیشن درمانیتو</h4>
                    <p>برای دریافت لینک دانلود شماره موبایل خود را وارد کنید</p>
                    <Form>
                        <Form.Group controlId="number">
                            <Form.Control type="number" placeholder="شماره همراه را وارد کنید 09000000000" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            بفرست
                        </Button>
                    </Form>
                    <Image src={downloadBlueButton}/>
                    <Image src={bazzarBlueButton}/>
                    <Image src={sibAppBlueButton}/>
                </Col>
                <Col sm={6} style={{backgroundColor: "yellow", textAlign:"center"}}>
                    <Image src={damanitoApp}/>
                </Col>
            </Row>

            <Row style={{ marginTop:"10px", textAlign:"right"}}>
                <Col sm={6} style={{backgroundColor: "yellow"}}>
                    <h4>عضویت داروخانه یا مراکز درمانی</h4>
                    <p>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</p>
                    <Form>
                        <Form.Group controlId="number">
                            <Form.Control type="number" placeholder="شماره همراه را وارد کنید 09000000000" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ثبت نام سریع
                        </Button>
                    </Form>
                </Col>
                <Col sm={6} style={{backgroundColor: "aqua"}}>
                    <Image src={healthDoctor} />
                </Col>
            </Row>
            <Row style={{ marginTop:"10px"}}>
                <Col sm={6} style={{backgroundColor: "aqua", textAlign:"right"}}>
                    <h5>پشتبانی درمانیتو</h5>
                    <p>پاسخگویی روزهای کاری از 9 صبح تا 9 شب</p>
                </Col>
                <Col sm={6} style={{backgroundColor: "yellow"}}>
                    <Image src={callCenter} />
                </Col>
            </Row>
            <Row style={{ marginTop:"10px"}}>
                <Col sm={4} style={{backgroundColor: "salmon", textAlign:"right"}}>
                    <Image src={logo}/>
                    <h5>سوپر اپلیکیشن حوزه درمان و سلامت</h5>
                    <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
                    <i href="#" className="fa fa-linkedin"></i>
                    <i href="#" className="fa fa-twitter"></i>
                    <i href="#" className="fa fa-instagram"></i>
                </Col>
                <Col sm={2} style={{backgroundColor: "lightGreen", textAlign:"right"}}>
                    <h5>خدمات درمانیتو</h5>
                    <p>داروخانه آنلاین</p>
                    <p>فروشگاه آنلاین</p>
                    <p>ویزیت آنلاین</p>
                    <p>پرونده پزشکی</p>
                </Col>
                <Col sm={2} style={{backgroundColor: "lightBlue", textAlign:"right"}}>
                    <h5>صفحات درمانیتو</h5>
                    <p>تماس باما</p>
                    <p>درباره ما</p>
                    <p>سوالات متداول</p>
                    <p>قوانین و شرایط</p>
                </Col>
                <Col sm={4} style={{backgroundColor: "wheat", textAlign:"right"}}>
                    <h5>دانلود درمانیتو</h5>
                    <Image src={bazzarBlackButton}/>
                    <Image src={sibAppBlackButton}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;