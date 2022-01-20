import Image from 'next/image';
import Link from 'next/link';
import Navigation from 'components/Navigation/Navigation_index';
import Popular from 'components/carousel/popular';
import Footer from 'components/Footers/footer';
import Latest_listing from 'components/Product/Latest_listing';
import Category from 'components/Product/Category';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Container, Row, Col, Input, Button } from 'reactstrap';

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
              priority="true"
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
                      priority="true"
                    />
                  </div>
                  <Input
                    type="text"
                    className="form-control form-search-left"
                    placeholder="What?"
                    aria-label="Search"
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
                      priority="true"
                    />
                  </div>
                  <Input
                    type="text"
                    className="form-control form-search-right"
                    placeholder="Where?"
                    aria-label="Search"
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
          <Container>
            {/* content */}
            <Row>
              {/* ads left */}
              <Col md="2" className="d-none d-md-block">
                <div className="ads mt-5">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1500}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>

              {/* content */}
              <Col md="8">
                {/* popular */}
                <div className="s-popular">
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
                </div>

                {/* category */}
                <div className="s-category py-4">
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
                        <Row className="row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 pt-4">
                          <Category />
                        </Row>
                      </div>
                    </div>
                  </Container>
                </div>

                {/* latest */}
                <div className="s-latest">
                  <div className="s-latest__content">
                    <Container>
                      <div className="s-latest__content--title d-flex flex-wrap align-items-center">
                        <h4>
                          <span className="fw-bold">Latest</span> Listings
                        </h4>
                        <h6 className="border-bottom border-dark ms-auto">
                          <Link href="/detail">View more</Link>
                        </h6>
                      </div>
                      <div className="s-latest__content__body">
                        <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                          <Latest_listing />
                        </Row>
                      </div>
                    </Container>
                  </div>
                  <div className="s-latest__footer">
                    <a className="btn btn_load "> Load more</a>
                  </div>
                </div>
              </Col>

              {/* ads right */}
              <Col md="2" className="d-none d-md-block">
                <div className="ads mt-5">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/event.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1500}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>

            {/* ads footer */}
            <Row className="mt-5">
              <div className="ads">
                <Link href="/home">
                  <a>
                    <Image
                      src="/home/event-bottom.png"
                      alt="7Hit Logo"
                      width={1500}
                      height={200}
                      layout="responsive"
                      priority="true"
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
