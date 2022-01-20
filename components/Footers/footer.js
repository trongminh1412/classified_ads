import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row } from 'reactstrap';

function footer(props) {
  return (
    <>
      <section className="footer-widget py-5 bg-opacity-10">
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <Link href="/home">
                  <a>
                    <Image
                      src="/home/f-logo.svg"
                      alt="banner"
                      layout="fixed"
                      width={202}
                      height={60}
                      priority="true"
                    />
                  </a>
                </Link>
              </div>
              <div className="text-center text-md-start ms-3">
                <h4 className="text-uppercase fs-14 fw-bold my-5">
                  FOLLOW US ON
                </h4>
                <div className="mb-auto mt-5">
                  <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                    <li className="pe-3">
                      <Link href="/home">
                        <a>
                          <Image
                            src="/home/f-facebook.svg"
                            alt="banner"
                            layout="intrinsic"
                            width={24}
                            height={24}
                            priority="true"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/home">
                        <a>
                          <Image
                            src="/home/f-twitter.svg"
                            alt="banner"
                            layout="intrinsic"
                            width={24}
                            height={24}
                            priority="true"
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  7HIT MARKETPLACE
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">About us</li>
                  <li className="mb-3">Term of Use</li>
                  <li className="mb-3">Privacy</li>
                  <li className="mb-3">FAQs</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  SUPPORT CENTER
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">Contact</li>
                  <li className="mb-3">Safety</li>
                  <li className="mb-3">Prohibited Items</li>
                  <li className="mb-3">DMCA</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  MY ACCOUNT
                </h4>
                <ul className="list-unstyled fs-14">
                  <li className="mb-2">
                    <Link href="/auth/login">Log In</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/auth/register">Register</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default footer;
