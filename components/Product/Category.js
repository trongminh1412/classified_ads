import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';

export const data = {
  src: [
    '/home/category/automobile.svg',
    '/home/category/mobile.svg',
    '/home/category/electronics.svg',
    '/home/category/furniture.svg',
    '/home/category/real.svg',
    '/home/category/animals.svg',
    '/home/category/fashion.svg',
    '/home/category/beauty.svg',
    '/home/category/job.svg',
    '/home/category/services.svg',
    '/home/category/real.svg',
    '/home/category/event.svg',
  ],
  title: [
    'Automobiles',
    'Phones & Tablets',
    'Electronics',
    'Furniture & Appliances',
    'Real estate',
    'Animals & Pets',
    'Fashion',
    'Beauty & Well being',
    'Jobs',
    'Services',
    'Learning',
    'Local Events',
  ],
};

const imageCategory = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function category() {
  return (
    <>
      {data.src.map((src, id) => (
        <Col key={id}>
          <div className="product">
            <div className="product_spin">
              <Image
                loader={imageCategory}
                src={src}
                alt="7Hit Logo"
                width={60}
                height={60}
                layout="intrinsic"
                priority="true"
              />
            </div>
            <h6>{data.title[id]}</h6>
          </div>
        </Col>
      ))}
    </>
  );
}

export default category;
