import Image from 'next/image';
import { Col, Card, CardBody } from 'reactstrap';

export const data = [
  '/detail_category/2.svg',
  '/detail_category/1.svg',
  '/detail_category/2.svg',
  '/detail_category/1.svg',
  '/detail_category/2.svg',
  '/detail_category/1.svg',
];

const imageDetail = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function Detail_category() {
  return (
    <>
      {data.map((id, index) => (
        <Col className="py-2" key={index}>
          <div className="card__item">
            <Card className="border-0">
              <div>
                <Image
                  loader={imageDetail}
                  src={id}
                  alt="collection kids"
                  layout="responsive"
                  width={98}
                  height={98}
                />
              </div>
              <CardBody className="text-start px-2 ">
                <h6 className="fs-14 fw-bold py-1">Promotion</h6>
              </CardBody>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
}

export default Detail_category;
