import React from 'react';
import Link from 'next/link';
import Footer from 'components/Footers/footer';
import Navigation_detail from 'components/Navigation/Navigation_detail';
import { MdOutlineCheck } from 'react-icons/md';
import { Container, Row, Col, Form } from 'reactstrap';
import FormCreate from 'components/Form/formCreate';
import UploadFile from 'components/Form/uploadFile';

function createListing(props) {
  return (
    <>
      <Navigation_detail />

      <div className="s-create">
        <div className="s-create__content">
          <Container>
            <Row>
              <Col md="9">
                <div className="s-create__content--form">
                  <div>
                    <ol className="step">
                      <li className="current">
                        <a href="#">Listing Details</a>
                      </li>
                      <li>
                        <a href="#">Photos</a>
                      </li>
                      <li>
                        <a href="#">Payment</a>
                      </li>
                      <li>
                        <Link href="/formSuccess">
                          <a href="/formSuccess">Finish</a>
                        </Link>
                      </li>
                    </ol>
                  </div>
                  <div className="form-field">{/* <FormCreate /> */}</div>
                  <div className="form-upload">
                    <UploadFile />
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="s-create__content--use">
                  <div className="use__title text-center mb-3 mx-3">
                    <h4 className="fw-bold">Create New Listing</h4>
                  </div>
                  <div className="use__content text-center mb-4 mx-2">
                    <h6>
                      Do you have something to sell, to rent, any service to
                      offer or a job offer? Post it at LaraClassifier, its free,
                      for local business and very easy to use!
                    </h6>
                  </div>
                  <div className="use__footer mx-3">
                    <div className="use__footer--title text-center align-items-center align-self-center">
                      <h6 className="fs-14 mb-0 text-light">
                        How to sell quickly?
                      </h6>
                    </div>
                    <div className="use__footer--content p-2">
                      <div className="fs-14 py-1 d-flex">
                        <i>
                          <MdOutlineCheck />
                        </i>
                        <h6 className="ms-1">
                          Use a brief title and description of the item
                        </h6>
                      </div>
                      <div className="fs-14 py-1 d-flex">
                        <i>
                          <MdOutlineCheck />
                        </i>
                        <h6 className="ms-1">
                          Make sure you post in the correct category
                        </h6>
                      </div>
                      <div className="fs-14 py-1 d-flex">
                        <i>
                          <MdOutlineCheck />
                        </i>
                        <h6 className="ms-1">
                          Add nice photos to your listing
                        </h6>
                      </div>
                      <div className="fs-14 py-1 d-flex">
                        <i>
                          <MdOutlineCheck />
                        </i>
                        <h6 className="ms-1">Put a reasonable price</h6>
                      </div>
                      <div className="fs-14 py-1 d-flex">
                        <i>
                          <MdOutlineCheck />
                        </i>
                        <h6 className="ms-1">Check the item before publish</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default createListing;
