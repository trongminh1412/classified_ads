import Image from 'next/image';
import Link from 'next/link';
import { BsClock } from 'react-icons/bs';
import { AiOutlineFolder } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { CgChevronDoubleRight } from 'react-icons/cg';
import { VscBookmark } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'reactstrap';

function latest() {
  return (
    <>
      <div className="card__item">
        <Card>
          <Image
            src="/home/popular/1.svg"
            alt="collection kids"
            layout="responsive"
            width={154}
            height={154}
            priority
          />
          <div className="card__item--sub-img">
            <Link href="/">
              <a>
                <Image
                  src="/home/popular/sub_img.svg"
                  alt="collection kids"
                  layout="intrinsic"
                  width={12}
                  height={12}
                />
              </a>
            </Link>
            <span className="ps-1">5</span>
          </div>
          <CardBody className="text-start px-2">
            <h6 className="fs-14 fw-bold py-1">Iphone 12 white color</h6>
            <div className="fs-10 py-1">
              <BsClock /> 13h hours ago
            </div>
            <div className="fs-10 py-1 d-flex">
              <AiOutlineFolder />
              <div className="ps-1">
                Phone & Tablets
                <span className="text-warning">
                  <CgChevronDoubleRight /> Mobile phones
                </span>
              </div>
            </div>
            <div className="fs-10 py-1">
              <GoLocation /> Ellsworth
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 text_price">
              <h6 className="mb-0">$49,192</h6>
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

export default latest;
