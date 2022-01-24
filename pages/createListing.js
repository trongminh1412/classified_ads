import React from 'react';
import Footer from 'components/Footers/footer';
import Navigation_detail from 'components/Navigation/Navigation_detail';
import { MdOutlineCheck } from 'react-icons/md';

import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

const KEY_CAPTCHA = '6LfiT9kZAAAAAKb-tU3-ZLQzu3NInie34QiFflcv';
const DELAY = 1500;

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Form,
  CardSubtitle,
} from 'reactstrap';

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
                        <a href="#">Finish</a>
                      </li>
                    </ol>
                  </div>
                  <div className="form_title">
                    <h4 className="fw-bold">Create New Listing</h4>
                  </div>
                  <div className="form_content">
                    <Container className="p-0">
                      <Form className="form-default">
                        <div className="form-group">
                          <label>Category *</label>
                          <select
                            name="categories_id"
                            className="custom-select"
                          >
                            <option value="">Select One</option>
                            <option value="4">Beauty</option>
                            <option value="3">Electronics</option>
                            <option value="1">Fashion</option>
                            <option value="5">Health</option>
                            <option value="12">Home Improvement</option>
                            <option value="9">Other</option>
                            <option value="15">Outdoor Equipment</option>
                            <option value="14">Sports</option>
                            <option value="2">Technology</option>
                            <option value="7">Toys</option>
                            <option value="13">Vehicle</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Type *</label>
                          <input type="radio" />
                          <input type="radio" />
                          <span className="fs-14 custom-span">
                            This will be displayed on the listing details page
                            to inform other users.
                          </span>
                        </div>

                        <div className="form-group">
                          <label>Title *</label>
                          <input
                            type="text"
                            value=""
                            name="title"
                            id="title"
                            className="form-control"
                            placeholder="Listing title"
                          />
                          <span className="fs-14 custom-span">
                            A greate title needs at least 60 characters.
                          </span>
                        </div>

                        <div className="form-group">
                          <label>Description *</label>
                          <Image
                            src="/product_detail/cke.png"
                            alt="next"
                            layout="intrinsic"
                            width={874}
                            height={358}
                            priority="true"
                          />
                          <span className="fs-14 custom-span">
                            Describe what makes your listing unique...
                          </span>
                        </div>

                        <div className="form-group">
                          <label>Price</label>
                          <div className="input-group">
                            <button className="fs-14 custom-button">$</button>
                            <input
                              type="text"
                              value=""
                              name="title"
                              id="title"
                              className="form-control"
                              placeholder="Listing title"
                            />
                            <button className="fs-14 custom-button">
                              Negotiable
                            </button>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>City *</label>
                          <select
                            name="categories_id"
                            className="custom-select"
                          >
                            <option value="">Select One</option>
                            <option value="4">Beauty</option>
                            <option value="3">Electronics</option>
                            <option value="1">Fashion</option>
                            <option value="5">Health</option>
                            <option value="12">Home Improvement</option>
                            <option value="9">Other</option>
                            <option value="15">Outdoor Equipment</option>
                            <option value="14">Sports</option>
                            <option value="2">Technology</option>
                            <option value="7">Toys</option>
                            <option value="13">Vehicle</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Tags</label>
                          <input
                            type="text"
                            value=""
                            name="title"
                            id="title"
                            className="form-control"
                            placeholder="Listing title"
                          />
                          <span className="fs-14 custom-span">
                            Enter the tags separated by commas or press the
                            Enter ( ) button on your keyboard after each tag.
                            The number of tags cannot exceed 15. And each tag
                            can only be 2 to 30 characters long.
                          </span>
                        </div>

                        <hr />

                        <div className="form_title">
                          <h6 className="fw-bold my-5">Seller information</h6>
                        </div>

                        <div className="form-group">
                          <label>Your name *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                          />
                        </div>

                        <div className="form-group">
                          <label>Email *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>

                        <div className="form-group">
                          <label>Price</label>
                          <div className="input-group">
                            <button className="fs-14 custom-button">$</button>
                            <input
                              type="text"
                              value=""
                              name="title"
                              id="title"
                              className="form-control"
                              placeholder="Listing title"
                            />
                            <button className="fs-14 custom-button">
                              Hide
                            </button>
                          </div>
                        </div>

                        {/* captcha */}
                        <div className="form-group">
                          <ReCAPTCHA
                            style={{ display: 'inline-block' }}
                            theme="light"
                            sitekey={KEY_CAPTCHA}
                          />
                          <div className="form-control-checkbox my-2">
                            <input type="checkbox" className="me-1" />
                            <span>
                              I have read and agree to the Terms & Conditions
                            </span>
                          </div>
                          <div className="form-control-checkbox my-2">
                            <input type="checkbox" className="me-1" />
                            <span>I accept to receive marketing emails</span>
                          </div>
                        </div>

                        {/* submit messenger */}
                        <div className="form-group text-end border-top pt-4">
                          <button className="btn btn-create px-5 py-3">
                            Next
                          </button>
                        </div>
                      </Form>
                    </Container>
                  </div>
                </div>
                <hr />
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
