import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'components/Footers/footer';
import Latest from 'components/Product/Latest';
import Navigation_detail from 'components/Navigation/Navigation_detail';
import Category_detail from 'components/Product/Detail_category';
import { BsFilter } from 'react-icons/bs';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';

function detail(props) {
  return (
    <>
      <Navigation_detail />

      <section className="s-main">
        <div className="s-main_detail__content">
          <Container>
            {/* content */}
            <Row>
              {/* ads left */}
              <Col md="2" className="d-none d-md-block">
                <div className="ads">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/detail_ads.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1000}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>

              {/* category */}
              <Col md="2" className="d-none d-md-block">
                <div className="category_nav">
                  <div className="category_nav--collapse">
                    <div className="all_category">
                      <BsFilter />
                      ALL CATEGORIES
                    </div>
                    <div>Electronics</div>
                    <div>Electronics</div>
                    <div>Electronics</div>
                    <div>Electronics</div>
                    <div>Electronics</div>
                    <div>Electronics</div>
                  </div>
                  <div className="category_nav--filter">
                    <div>Expanded Filters</div>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Recommended</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Recommended</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Recommended</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Recommended</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Recommended</Label>
                    </FormGroup>
                  </div>
                </div>
                <div className="category_ads">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/detail_ads_3.png"
                        alt="7Hit Logo"
                        width={200}
                        height={500}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>

              {/* content */}
              <Col md="6">
                {/* top */}
                <section className="s-category_detail">
                  <Container>
                    <div className="s-category_detail__content">
                      <Row className="row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        <Category_detail />
                      </Row>
                    </div>
                  </Container>
                </section>

                {/* latest */}
                <section className="s-latest">
                  <div className="s-latest__content">
                    <Container>
                      <div className="s-latest__content__body">
                        <Row className="row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                          <Latest />
                        </Row>
                      </div>
                    </Container>
                  </div>
                  <div className="s-latest__footer">
                    <a className="btn btn_load "> Load more</a>
                  </div>
                </section>
              </Col>

              {/* ads right */}
              <Col md="2" className="d-none d-md-block">
                <div className="ads">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/detail_ads.png"
                        alt="7Hit Logo"
                        width={200}
                        height={1000}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>

            {/* ads footer */}
            <Row className="mt-5 justify-content-center">
              <Col md="8">
                <div className="">
                  <Link href="/home">
                    <a>
                      <Image
                        src="/home/detail_ads_2.png"
                        alt="7Hit Logo"
                        width={1500}
                        height={200}
                        layout="responsive"
                        priority="true"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="s-footer">
        <Container>
          <Row>
            <div className="s-footer__content">
              <h4 className="fw-bold my-4">Do you have anything to sell?</h4>
              <h5 className="my-4">
                Sell your products and services online FOR FREE. It is easier
                than you think!
              </h5>
              <div className="btn btn-create my-4">Start Now</div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default detail;
