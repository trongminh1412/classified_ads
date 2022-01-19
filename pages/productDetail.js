import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'components/Footers/footer';
import Navigation_detail from 'components/Navigation/Navigation_detail';
import { Container, Row, Col, FormGroup, Input, Label } from 'reactstrap';
import Latest from 'components/Product/Latest';
import Product_detail from 'components/Product_detail/Product_detail';

function Detail(props) {
  return (
    <>
      <Navigation_detail />

      <div className="s-main">
        {/* product detail */}
        <div className="s-product">
          <Product_detail />
        </div>

        {/* similar */}
        <div className="s-latest">
          <div className="s-latest__content">
            <Container>
              <div className="s-latest__content--title d-flex flex-wrap align-items-center">
                <h4 className="fw-bold">Similar listing</h4>
                <h6 className="border-bottom border-dark ms-auto">View more</h6>
              </div>
              <div className="s-latest__content__body">
                <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                  <Latest />
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Detail;
