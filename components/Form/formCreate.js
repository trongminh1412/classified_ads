import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

const KEY_CAPTCHA = '6LfiT9kZAAAAAKb-tU3-ZLQzu3NInie34QiFflcv';
const DELAY = 1500;

import { Container, Row, Col, Form } from 'reactstrap';

function formCreate(props) {
  return (
    <>
      <div className="form_title">
        <h4 className="fw-bold">Create New Listing</h4>
      </div>
      <div className="form_content">
        <Container className="p-0">
          <Form className="form-default">
            <div className="form-group">
              <label>Category *</label>
              <select name="categories_id" className="custom-select">
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
              <div className="d-flex">
                <div className="form-check me-5">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Private individual</label>
                </div>
                <div className="form-check ms-5">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Professional</label>
                </div>
              </div>
              <span className="fs-14 custom-span">
                This will be displayed on the listing details page to inform
                other users.
              </span>
            </div>

            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
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
                <div className="input-group-append">
                  <span className="input-group-text custom-button button-left">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Listing title"
                />
                <div className="input-group-append">
                  <span className="input-group-text custom-button button-right">
                    <input type="checkbox" className="me-1" />
                    Negotiable
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>City *</label>
              <select name="categories_id" className="custom-select">
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
                className="form-control"
                placeholder="Listing title"
              />
              <span className="fs-14 custom-span">
                Enter the tags separated by commas or press the Enter ( ) button
                on your keyboard after each tag. The number of tags cannot
                exceed 15. And each tag can only be 2 to 30 characters long.
              </span>
            </div>

            <hr />

            <div className="form_title">
              <h6 className="fw-bold">Seller information</h6>
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
              <input type="text" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
              <label>Price</label>
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text custom-button button-left">
                    <Link href="/createListing">
                      <a>
                        <Image
                          src="/country/US.png"
                          alt="banner"
                          layout="intrinsic"
                          width={20}
                          height={17}
                        />
                      </a>
                    </Link>
                  </span>
                </div>
                <input
                  type="text"
                  value=""
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Listing title"
                />

                <div className="input-group-append">
                  <span className="input-group-text custom-button button-right">
                    <input type="checkbox" className="me-1" />
                    Hide
                  </span>
                </div>
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
                <span>I have read and agree to the Terms & Conditions</span>
              </div>
              <div className="form-control-checkbox my-2">
                <input type="checkbox" className="me-1" />
                <span>I accept to receive marketing emails</span>
              </div>
            </div>

            {/* submit messenger */}
            <div className="form-group text-end pt-4">
              <button className="btn btn-create px-5 py-3">Next</button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default formCreate;
