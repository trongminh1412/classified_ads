import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'components/Footers/footer';
import Latest from 'components/Product/Latest';
import Navigation_detail from 'components/Navigation/Navigation_detail';
import Category from 'components/Product/Category';
import { BsFilter } from 'react-icons/bs';
import Accordion from 'components/Accordion/Accordion';
import Sort from 'components/Dropdown/Sort';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';

function Detail(props) {
  const innerRef = React.useRef(null);
  return (
    <>
      <Navigation_detail />

      <section className="s-main d-flex justify-content-center">
        {/* ads left */}
        <div className="d-none d-lg-block">
          <div className="ads">
            <Link href="/home">
              <a>
                <Image
                  src="/home/detail_ads.png"
                  alt="7Hit Logo"
                  width={120}
                  height={1000}
                  layout="intrinsic"
                  priority="true"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="s-main_detail__content">
          <Container className="fluid">
            {/* content */}
            <Row>
              {/* category */}
              <Col md="4" lg="3" className="d-none d-md-block category_nav">
                <div className="mb-3">
                  <div className="category_nav--collapse mb-3">
                    <div className="all_category">
                      <BsFilter />
                      ALL CATEGORIES
                    </div>
                    <div className="all_category-content">
                      <Accordion
                        title="Electronics"
                        content="
                              <div> Cell Phone Accessories</div>
                              <div> Cell Phone Gatgets</div>
                              <div> Applications</div>
                              <div> Smart Watches</div>
                              "
                      />
                      <Accordion
                        title="Business & Industrial"
                        content="
                              <div> Business & Industrial</div>
                              "
                      />
                      <Accordion
                        title="Computers"
                        content="
                              <div> Computers</div>
                              "
                      />
                      <Accordion
                        title="Consumer Electroinics"
                        content="
                              <div> Consumer Electroinics</div>
                              "
                      />
                      <Accordion
                        title="Home & Garden"
                        content="
                              <div> Home & Garden</div>
                              "
                      />
                      <Accordion
                        title="Collectibles"
                        content="
                              <div> Collectibles</div>
                              "
                      />
                    </div>
                  </div>
                  <div className="category_nav--filter">
                    <div className="fw-bold pb-3">Expanded Filters</div>
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
              <Col md="8" lg="9">
                {/* top */}
                <div className="s-category">
                  <div className="s-category__content">
                    <div className="s-category__content__body">
                      <Row className="row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 pt-4">
                        <Category />
                      </Row>
                    </div>
                  </div>
                </div>

                {/* latest */}

                <div className="s-latest">
                  <div className="s-latest__content">
                    <div className="s-latest__content__body">
                      <Tabs>
                        <TabList>
                          <Tab>All listing</Tab>
                          <Tab>Latest listing</Tab>
                          <div className="filter">
                            <Sort />
                          </div>
                        </TabList>

                        <TabPanel>
                          <Row className="row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2">
                            <Latest />
                          </Row>
                        </TabPanel>
                        <TabPanel>
                          <h2>latest listing</h2>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                  <div className="s-latest__footer">
                    <a className="btn btn_load "> Load more</a>
                  </div>
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

        {/* ads right */}
        <div className="d-none d-lg-block">
          <div className="ads">
            <Link href="/home">
              <a>
                <Image
                  src="/home/detail_ads.png"
                  alt="7Hit Logo"
                  width={120}
                  height={1000}
                  layout="intrinsic"
                  priority="true"
                />
              </a>
            </Link>
          </div>
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

export default Detail;
