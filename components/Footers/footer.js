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
                <h4 className="text-uppercase fs-14 fw-bold mb-4">ABOUT US</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">FAQ</li>
                  <li className="mb-3">Anti - Scam</li>
                  <li className="mb-3">Terms</li>
                  <li className="mb-3">Privacy</li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-4">
                  CONTACT & SITEMAP
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">Contact Us</li>
                  <li className="mb-3">Sitemap</li>
                  <li className="mb-3">Countries</li>
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
            <Col lg="3" md="6">
              <div className="text-center text-md-start">
                <h4 className="text-uppercase fs-14 fw-bold mb-5">
                  FOLLOW US ON
                </h4>
                <div className="mb-auto mt-5">
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <Link href="/home">
                        <a>
                          <Image
                            src="/home/footer_social.svg"
                            alt="banner"
                            layout="intrinsic"
                            width={189}
                            height={28}
                            priority="true"
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default footer;
