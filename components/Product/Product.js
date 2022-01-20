import Image from 'next/image';
import Link from 'next/link';
import { BsClock } from 'react-icons/bs';
import { AiOutlineFolder } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { CgChevronDoubleRight } from 'react-icons/cg';
import { VscBookmark } from 'react-icons/vsc';
import { Col, Card, CardBody } from 'reactstrap';

const imageLatest = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function Product(props) {
  return (
    <>
      <div className="card__item">
        <Card>
          <Link href="/listingDetail" passHref>
            <a>
              <Image
                loader={imageLatest}
                src={props.src}
                alt="collection kids"
                layout="responsive"
                width={154}
                height={154}
                priority="true"
              />
            </a>
          </Link>
          <div className="card__item--sub-img">
            <Image
              src="/home/popular/sub_img.svg"
              alt="collection kids"
              layout="intrinsic"
              width={12}
              height={12}
              priority="true"
            />
            <span className="ps-1">5</span>
          </div>
          <CardBody className="text-start px-2">
            <h6 className="fs-14 fw-bold py-1text-reset">
              <Link href="/listingDetail">
                <a className="text-reset">{props.title}</a>
              </Link>
            </h6>
            <div className="fs-10 py-1">
              <BsClock /> {props.time}
            </div>
            <div className="fs-10 py-1 d-flex">
              <AiOutlineFolder />
              <div className="ps-1">
                {props.type}
                <span className="text-warning">
                  <CgChevronDoubleRight /> {props.category}
                </span>
              </div>
            </div>
            <div className="fs-10 py-1">
              <GoLocation /> {props.location}
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 text_price">
              <h6 className="mb-0">{props.price}</h6>
              <div className="bookmark">
                <VscBookmark />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Product;
