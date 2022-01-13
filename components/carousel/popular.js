import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardBody } from 'reactstrap';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src="/home/nextArrow.svg"
        alt="next"
        layout="fixed"
        width={60}
        height={60}
        priority="true"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src="/home/prevArrow.svg"
        alt="prev"
        layout="fixed"
        width={60}
        height={60}
        priority="true"
      />
    </div>
  );
}

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

const imagePopular = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function popular(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((id, index) => (
          <div className="card__item" key={index}>
            <Card>
              <div>
                <Image
                  loader={imagePopular}
                  src={id}
                  alt="collection kids"
                  layout="responsive"
                  width={154}
                  height={154}
                  priority="true"
                />
              </div>
              <div className="card__item--sub-img">
                <Link href="/">
                  <a>
                    <Image
                      src="/home/popular/sub_img.svg"
                      alt="collection kids"
                      layout="intrinsic"
                      width={12}
                      height={12}
                      priority="true"
                    />
                  </a>
                </Link>
                <span className="ps-1">5</span>
              </div>
              <CardBody className="text-center">
                <h6 className="fs-14 fw-bold"> Parrot Anafi</h6>
                <h6 className="fs-14 fw-bold text-warning">$18</h6>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default popular;
