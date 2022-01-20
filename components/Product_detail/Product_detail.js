import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock } from 'react-icons/bs';
import { AiOutlineFolder, AiOutlineEye } from 'react-icons/ai';
import { RiCalendarCheckLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { MdPhoneIphone, MdOutlineEmail, MdOutlineCheck } from 'react-icons/md';
import { Row, Col, Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const data = [
  '/home/popular/1.svg',
  '/home/popular/2.svg',
  '/home/popular/1.svg',
  '/home/popular/2.svg',
  '/home/popular/1.svg',
  '/home/popular/2.svg',
  '/home/popular/1.svg',
  '/home/popular/2.svg',
];

const imageProduct = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?1w=${width}&q=${
    quality || 75
  }`;
};

function Product_detail() {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div>
          {/* <Image
            src={`${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
              quality || 75
            }`}
            alt="collection kids"
            layout="responsive"
            width={154}
            height={154}
            priority="true"
          /> */}
        </div>
      );
    },
  };

  return (
    <>
      <div className="product_detail">
        <Container>
          <div className="product_detail--router">
            <h6 className="text-warning">
              Vietnam / Phones & Tablets / Mobile Phone / Hà Nội - iphone 6
            </h6>
          </div>
          <div className="product_detail--title mt-5">
            <h1 className="fw-bold">Hà Nội - iphone 6</h1>
            <div className="d-flex">
              <div className="p-2">
                <BsClock />
                <span> Dec 23rd, 2021 at 22:11</span>
              </div>
              <div className="p-2">
                <AiOutlineFolder />
                <span> Phones & Tablets</span>
              </div>
              <div className="p-2">
                <GoLocation />
                <span> Hà Đông</span>
              </div>
              <div className="p-2">
                <AiOutlineEye />
                <span> 5.7k view</span>
              </div>
            </div>
          </div>
          <div className="product_detail--content">
            <Container>
              <Row>
                <Col md="8">
                  <div className="content_slider">
                    <Slider {...settings}>
                      {data.map((id, index) => (
                        <div className="card__item" key={index}>
                          <div>
                            <Image
                              loader={imageProduct}
                              src={id}
                              alt="collection kids"
                              layout="responsive"
                              width={154}
                              height={154}
                              priority="true"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </Col>

                <Col md="4">
                  <div className="content_info">
                    <div className="content_info--title mb-5">
                      <Row>
                        <Col sm="4">
                          <div className="info_img text-center">
                            <Image
                              src="/product_detail/user.svg"
                              alt="collection kids"
                              layout="intrinsic"
                              width={60}
                              height={60}
                              priority="true"
                            />
                          </div>
                        </Col>
                        <Col sm="8">
                          <h6>Post By</h6>
                          <h6 className="text-warning">Nguyễn Thanh Tùng</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className="content_info--location d-flex justify-content-between my-2">
                      <div className="d-flex">
                        <GoLocation />
                        <h6 className="ms-3">Location</h6>
                      </div>
                      <h6 className="fs-14 fw-bold">Hà Đông</h6>
                    </div>
                    <div className="content_info--calender d-flex justify-content-between my-2">
                      <div className="d-flex">
                        <RiCalendarCheckLine />
                        <h6 className="ms-3">Joined</h6>
                      </div>
                      <h6 className="fs-14 fw-bold">Dec 23rd, 2021 at 20:40</h6>
                    </div>
                    <div className="content_info--contact my-5">
                      <div className="btn-create mx-auto mb-2">
                        <MdPhoneIphone /> +84968638886
                      </div>
                      <div
                        className="btn-create mx-auto bg-light mb-4"
                        style={{ color: 'red' }}
                      >
                        <MdOutlineEmail /> Send a message
                      </div>
                      <div className="contact_social d-flex justify-content-center my-2">
                        <Link href="/face" passHref>
                          <Image
                            src="/product_detail/user.svg"
                            alt="collection kids"
                            layout="intrinsic"
                            width={60}
                            height={60}
                            priority="true"
                          />
                        </Link>
                        <Link href="/face" passHref>
                          <Image
                            src="/product_detail/user.svg"
                            alt="collection kids"
                            layout="intrinsic"
                            width={60}
                            height={60}
                            priority="true"
                          />
                        </Link>
                        <Link href="/face" passHref>
                          <Image
                            src="/product_detail/user.svg"
                            alt="collection kids"
                            layout="intrinsic"
                            width={60}
                            height={60}
                            priority="true"
                          />
                        </Link>
                        <Link href="/face" passHref>
                          <Image
                            src="/product_detail/user.svg"
                            alt="collection kids"
                            layout="intrinsic"
                            width={60}
                            height={60}
                            priority="true"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content_info--pay fw-bold">
                      <div className="pay_title">
                        <h6 className="fw-bold mb-0 ">Safety Tip for Buyers</h6>
                      </div>
                      <div className="fs-14 mb-2 ms-2">
                        <MdOutlineCheck /> Meet seller at a public place
                      </div>
                      <div className="fs-14 mb-2 ms-2">
                        <MdOutlineCheck /> Check the item before you buy
                      </div>
                      <div className="fs-14 mb-2 ms-2">
                        <MdOutlineCheck /> Pay only after collecting the item
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="product_detail--tab">
            <Tabs>
              <TabList>
                <Tab>Listing Details</Tab>
              </TabList>

              <TabPanel>
                <div className="tab_content p-3">
                  <div className="tab_content--title py-2 d-flex justify-content-between">
                    <div className="d-flex fs-14">
                      <GoLocation />
                      <h6 className="ms-3 me-2 fs-14">Location</h6>{' '}
                      <h6 className="fs-14 fw-bold">Hà Đông</h6>
                    </div>
                    <h6 className="fs-14">
                      Price: <span className="fw-bold"> đ4,000,000</span>
                    </h6>
                  </div>
                  <div className="tab_content--text pt-2">
                    <p className="fs-14">
                      Sint eos inventore excepturi nisi. Est doloribus
                      consequatur excepturi et et nisi. Magni quia sed voluptate
                      voluptates omnis. Id debitis dolorem debitis porro et sint
                      explicabo doloremque. Animi nisi est ipsum sit et
                      voluptas.
                    </p>
                  </div>
                  <div className="tab_content--detail py-5">
                    <h6 className="fw-bold">Additional Details</h6>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-between tab_content--detail_left">
                          <div>Mobile Model</div>
                          <div>0968638886</div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-between tab_content--detail_right">
                          <div>Mobile Brand</div>
                          <div>Apple</div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="tab_content--footer py-3 d-flex justify-content-between align-items-center">
                    <div className="tab_content--footer_left d-flex">
                      <div className="btn-create me-2">
                        <MdPhoneIphone /> +84968638886
                      </div>
                      <div
                        className="btn-create bg-light"
                        style={{ color: 'red' }}
                      >
                        <MdOutlineEmail /> Send a message
                      </div>
                    </div>
                    <div className="tab_content--footer_right d-flex">
                      <div className="mx-1">
                        <Link href="/productDetail" passHref>
                          <Image
                            src="/product_detail/email.svg"
                            alt="email"
                            width={40}
                            height={40}
                            layout="intrinsic"
                          />
                        </Link>
                      </div>
                      <div className="mx-1">
                        <Link href="/productDetail" passHref>
                          <Image
                            src="/product_detail/bookmark.svg"
                            alt="email"
                            width={40}
                            height={40}
                            layout="intrinsic"
                          />
                        </Link>
                      </div>
                      <div className="mx-1">
                        <Link href="/productDetail" passHref>
                          <Image
                            src="/product_detail/flag.svg"
                            alt="email"
                            width={40}
                            height={40}
                            layout="intrinsic"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Product_detail;