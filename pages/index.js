import Image from 'next/image';
import Link from 'next/link';
import Navigation from 'components/Navigation/Navigation_index';
import Footer from 'components/Footers/footer';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'reactstrap';
export default function Home() {
  return (
    <>
      <Navigation fixed />

      <section className="s-banner">
        <div className="s-banner__content">
          <div className="s-banner__content--image">
            <Image
              src="/home/banner.svg"
              alt="banner"
              layout="responsive"
              width={1440}
              height={300}
            />
            <div className="s-banner__content--title text-center">
              <h1>Sell and buy near you</h1>
              <h6>Simple, fast and efficient</h6>
              <div className="input-group align-items-center input_search justify-content-center">
                <div className="position-relative">
                  <div className="input_search--sticker">
                    <Image
                      src="/home/box_search.svg"
                      alt="banner"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                  </div>
                  <Input
                    type="text"
                    className="form-control form-search-left"
                    placeholder="What?"
                    aria-label="Search"
                    aria-describedby="basic-addon"
                  />
                  <div className="border_center"></div>
                </div>
                <div className="position-relative">
                  <div className="input_search--sticker">
                    <Image
                      src="/home/sticker_search.svg"
                      alt="banner"
                      layout="intrinsic"
                      width={20}
                      height={20}
                    />
                  </div>
                  <Input
                    type="text"
                    className="form-control form-search-right"
                    placeholder="Where?"
                    aria-label="Search"
                    aria-describedby="basic-addon"
                  />
                </div>
                <Button className="input-group-text" type="submit">
                  <BiSearchAlt2 />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-popular">
        <div className="s-popular__content">
          <Container>
            <Row>
              <Col md="2" className="d-none d-md-block text-center">
                <div className="ads">
                  <Link href="/">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={100}
                        height={1500}
                        layout="intrinsic"
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md="8">
                <section className="s-category">
                  <div className="s-category__content">
                    <Container>
                      <div className="d-flex justify-content-between align-content-start">
                        {/* <Col> */}
                        <div className="s-category__content--block">
                          <Row>
                            <Col
                              lg="6"
                              md="12"
                              className="align-self-center text-md-center"
                            >
                              <div className="s-category__content--block--image">
                                <Image
                                  src="/home/s-category.png"
                                  alt=""
                                  layout="intrinsic"
                                  width={75}
                                  height={75}
                                />
                              </div>
                            </Col>
                            <Col
                              lg="6"
                              md="12"
                              className="text-md-center text-lg-start align-self-center ps-lg-0"
                            >
                              <div className="s-category__content--block--title">
                                <h5 className="title-first">Fashion</h5>
                                <p>Shop $1</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        {/* </Col>
              <Col> */}
                        <div className="s-category__content--block">
                          <Row>
                            <Col
                              lg="6"
                              md="12"
                              className="align-self-center text-md-center"
                            >
                              <div className="s-category__content--block--image">
                                <Image
                                  src="/home/s-category.png"
                                  alt=""
                                  layout="intrinsic"
                                  width={75}
                                  height={75}
                                />
                              </div>
                            </Col>
                            <Col
                              lg="6"
                              md="12"
                              className="text-md-center text-lg-start align-self-center ps-lg-0"
                            >
                              <div className="s-category__content--block--title">
                                <h5 className="title-second">Tech</h5>
                                <p>Hot deals</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        {/* </Col>
              <Col> */}
                        <div className="s-category__content--block">
                          <Row>
                            <Col
                              lg="6"
                              md="12"
                              className="align-self-center text-md-center"
                            >
                              <div className="s-category__content--block--image">
                                <Image
                                  src="/home/s-category.png"
                                  alt=""
                                  layout="intrinsic"
                                  width={75}
                                  height={75}
                                />
                              </div>
                            </Col>
                            <Col
                              lg="6"
                              md="12"
                              className="text-md-center text-lg-start align-self-center ps-lg-0"
                            >
                              <div className="s-category__content--block--title">
                                <h5 className="title-third">Beauty</h5>
                                <p>Coupon</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        {/* </Col>
              <Col> */}
                        <div className="s-category__content--block">
                          <Row>
                            <Col
                              lg="6"
                              md="12"
                              className="align-self-center text-md-center"
                            >
                              <div className="s-category__content--block--image">
                                <Image
                                  src="/home/s-category.png"
                                  alt=""
                                  layout="intrinsic"
                                  width={75}
                                  height={75}
                                />
                              </div>
                            </Col>
                            <Col
                              lg="6"
                              md="12"
                              className="text-md-center text-lg-start align-self-center ps-lg-0"
                            >
                              <div className="s-category__content--block--title">
                                <h5 className="title-fourth">Kids</h5>
                                <p>buy 1 get 1</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        {/* </Col>
              <Col> */}
                        <div className="s-category__content--block">
                          <Row>
                            <Col
                              lg="6"
                              md="12"
                              className="align-self-center text-md-center"
                            >
                              <div className="s-category__content--block--image">
                                <Image
                                  src="/home/s-category.png"
                                  alt=""
                                  layout="intrinsic"
                                  width={75}
                                  height={75}
                                />
                              </div>
                            </Col>
                            <Col
                              lg="6"
                              md="12"
                              className="text-md-center text-lg-start align-self-center ps-lg-0"
                            >
                              <div className="s-category__content--block--title">
                                <h5 className="title-fifth">Home</h5>
                                <p>Shop $2</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        {/* </Col> */}
                      </div>
                    </Container>
                  </div>
                </section>

                <section className="s-special">
                  <div className="s-special__content">
                    <Container>
                      <div className="s-special__content--title d-flex flex-wrap align-items-center">
                        <h3 className="fw-bold">Special deals</h3>
                        <h6 className="border-bottom border-dark ms-auto">
                          See All
                        </h6>
                      </div>
                      <div className="s-special__content__body"></div>
                    </Container>
                  </div>
                </section>

                <section className="s-flash_sale">
                  <div className="s-flash_sale__content">
                    <Container>
                      <div className="s-flash_sale__content--title d-flex flex-wrap align-items-center">
                        <h3 className="fw-bold text-danger">Flash sale</h3>
                        <h6 className="border-bottom border-dark ms-auto">
                          See All
                        </h6>
                      </div>
                      <div className="s-flash_sale__content__body"></div>
                    </Container>
                  </div>
                </section>

                <section className="s-collection_kids">
                  <div className="s-collection_kids__content">
                    <Container>
                      <div className="s-collection_kids__content--title d-flex flex-wrap align-items-center">
                        <div className="d-flex align-items-center">
                          <h3 className="fw-bold pe-3">Kids</h3>
                          <h6 className="collection_kids--text">
                            <Link href="#">Collection</Link>
                          </h6>
                        </div>
                        <h6 className="float-end border-bottom border-dark ms-auto">
                          See All
                        </h6>
                      </div>
                      <div className="s-collection_kids__content--card pt-3">
                        <Row>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>

                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="2" md="3" sm="4" xs="6 py-3">
                            <Card>
                              <Image
                                src="/home/s-collection-kids.png"
                                alt="collection kids"
                                layout="intrinsic"
                                width={200}
                                height={150}
                              />
                              <CardBody>
                                <h6 className="fs-14 fw-bold">
                                  {' '}
                                  Mitao Cat Second Ge...
                                </h6>
                                <div className="justify-content-between flex-wrap fs-12 pb-2 fw-bold">
                                  <span>$15.00</span>
                                  <span className="fee-float-right ps-2">
                                    $11.00
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fs-12"></div>
                                <div></div>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                </section>

                <section className="s-collection">
                  <div className="s-collection__content">
                    <Container>
                      <div className="s-collection__content--title d-flex flex-wrap align-items-center">
                        <h3 className="fw-bold text-danger">Collections</h3>
                        <h6 className="border-bottom border-dark ms-auto">
                          All Collections
                        </h6>
                      </div>
                      <div className="s-collection__content__body"></div>
                    </Container>
                  </div>
                </section>

                <section className="s-banner_price">
                  <div className="s-banner_price__content">
                    <Container>
                      <Row>
                        <Col lg="4" md="6">
                          <div className="s-banner_price__content--banner">
                            <Image
                              src="/home/banner_price.png"
                              alt="banner price"
                              width={413}
                              height={167}
                              layout="responsive"
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6">
                          <div className="s-banner_price__content--banner">
                            <Image
                              src="/home/banner_price.png"
                              alt="banner price"
                              width={413}
                              height={167}
                              layout="responsive"
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6">
                          <div className="s-banner_price__content--banner">
                            <Image
                              src="/home/banner_price.png"
                              alt="banner price"
                              width={413}
                              height={167}
                              layout="responsive"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </section>
              </Col>
              <Col md="2" className="d-none d-md-block">
                <div className="ads">
                  <Link href="/">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={100}
                        height={1500}
                        layout="intrinsic"
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Footer />
    </>
  );
}
