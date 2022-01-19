import { Col } from 'reactstrap';
import Product from './Product';

export const data = [
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
];

function latest() {
  return (
    <>
      {data.map((src, index) => (
        <Col className="py-2" key={index}>
          <Product src={src} />
        </Col>
      ))}
    </>
  );
}

export default latest;
