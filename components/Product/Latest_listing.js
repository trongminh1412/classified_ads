import { Col } from 'reactstrap';
import Product from './Product';

export const data = {
  src: [
    '/home/popular/1.svg',
    '/home/popular/2.svg',
    '/home/popular/1.svg',
    '/home/popular/2.svg',
    '/home/popular/1.svg',
    '/home/popular/2.svg',
    '/home/popular/1.svg',
    '/home/popular/2.svg',
    '/home/popular/1.svg',
    '/home/popular/2.svg',
    '/home/popular/1.svg',
    '/home/popular/2.svg',
  ],
  title: [
    'Iphone 12 white color',
    'Iphone 13 black color',
    'Iphone 11 yellow color',
    'Iphone 12 black color',
    'Iphone 12 white color',
    'Iphone 13 black color',
    'Iphone 11 red color',
    'Iphone 12 black color',
    'Iphone 12 white color',
    'Iphone 13 black color',
    'Iphone 11 red color',
    'Iphone 12 black color',
  ],
  time: [
    '1h hours ago',
    '2h hours ago',
    '3h hours ago',
    '4h hours ago',
    '5h hours ago',
    '1h hours ago',
    '2h hours ago',
    '3h hours ago',
    '4h hours ago',
    '5h hours ago',
    '4h hours ago',
    '5h hours ago',
  ],
  type: [
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
    'Phone & Tablets',
  ],
  category: [
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
    'Mobile phones',
  ],
  location: [
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
    'Ellsworth',
  ],
  price: [
    '$10,192',
    '$20,192',
    '$30,192',
    '$49,192',
    '$49,192',
    '$49,192',
    '$49,192',
    '$49,192',
    '$49,192',
    '$49,192',
    '$80,192',
    '$49,192',
  ],
  sort: ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0'],
};

function latest() {
  return (
    <>
      {data.src.map((src, id) => (
        <Col className="py-2" key={id}>
          <Product
            src={src}
            title={data.title[id]}
            time={data.time[id]}
            type={data.type[id]}
            category={data.category[id]}
            location={data.location[id]}
            price={data.price[id]}
          />
        </Col>
      ))}
    </>
  );
}

export default latest;
