import Image from 'next/image';
import Link from 'next/link';
import Navigation from 'components/Navigation/Navigation_index';
import Popular from 'components/carousel/popular';
import Footer from 'components/Footers/footer';
import Latest from 'components/Home_product/Latest';
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

      <section className="s-main">
        <div className="s-main__content">
          <Container style={{ 'max-width': '1500px' }}>
            <Row>
              <Col md="2" className="d-none d-md-block">
                <div className="ads pt-5">
                  <Link href="/">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1500}
                        layout="responsive"
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md="8">
                {/* popular */}
                <section className="s-popular">
                  <div className="s-popular__content">
                    <Container>
                      <div className="s-popular__content--title d-flex flex-wrap align-items-center">
                        <h4>
                          <span className="fw-bold">Popular</span> Listings
                        </h4>
                        <h6 className="border-bottom border-dark ms-auto">
                          View more
                        </h6>
                      </div>
                      <div className="s-popular__content__body">
                        <Popular />
                      </div>
                    </Container>
                  </div>
                </section>

                {/* category */}
                <section className="s-category">
                  <Container>
                    <div className="s-category__content">
                      <div className="s-category__content--title d-flex flex-wrap align-items-center">
                        <h4>
                          Browse by
                          <span className="fw-bold"> Category</span>
                        </h4>
                        <h6 className="border-bottom border-dark ms-auto">
                          View more
                        </h6>
                      </div>
                      <div className="s-category__content__body">
                        <Row>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/automobile.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Automobiles</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/mobile.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Phones & Tablets</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/electronics.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Electronics</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/furniture.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Furniture & Appliances</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/real.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Real estate</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/animals.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Animals & Pets</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/fashion.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Fashion</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/beauty.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Beauty & Well being</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/job.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Jobs</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/services.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Services</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/real.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Learning</h6>
                            </div>
                          </Col>
                          <Col xl="2" lg="3" md="4" sm="6" className="pt-4">
                            <div className="product">
                              <div className="product_spin">
                                <Image
                                  src="/home/category/event.svg"
                                  alt="7Hit Logo"
                                  width={60}
                                  height={60}
                                  layout="intrinsic"
                                  priority
                                />
                              </div>
                              <h6>Local Events</h6>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Container>
                </section>

                {/* latest */}
                <section className="s-latest">
                  <div className="s-latest__content">
                    <Container>
                      <div className="s-latest__content--title d-flex flex-wrap align-items-center">
                        <h4>
                          <span className="fw-bold">Latest</span> Listings
                        </h4>
                        <h6 className="border-bottom border-dark ms-auto">
                          View more
                        </h6>
                      </div>
                      <div className="s-latest__content__body">
                        <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                          <Col className="py-2">
                            <Latest />
                          </Col>
                        </Row>
                      </div>
                    </Container>
                  </div>
                  <div className="s-latest__footer">
                    <a className="btn btn_load "> Load more</a>
                  </div>
                </section>
              </Col>
              <Col md="2" className="d-none d-md-block">
                <div className="ads pt-5">
                  <Link href="/">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1500}
                        layout="responsive"
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className="pt-5">
              <div className="ads">
                <Link href="/">
                  <a>
                    <Image
                      src="/home/event-bottom.png"
                      alt="7Hit Logo"
                      width={1500}
                      height={200}
                      layout="responsive"
                      priority
                    />
                  </a>
                </Link>
              </div>
            </Row>
          </Container>
        </div>
      </section>

      <Footer />
    </>
  );
}
