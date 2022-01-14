import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row, Card, CardBody, Button } from 'reactstrap';
import Navigation_country from 'components/Navigation/Navigation_country';

export const data = {
  src: [
    '/country/VN.png',
    '/country/BR.png',
    '/country/IN.png',
    '/country/MC.png',
    '/country/US.png',
    '/country/RO.png',
    '/country/ZA.png',
  ],
  title: [
    'Viet Nam',
    'Brazil',
    'India',
    'Indonesia',
    'USA',
    'Romania',
    'South Africa',
  ],
};

const imageCountry = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function Home() {
  return (
    <>
      <Navigation_country fixed />

      <section className="s-country">
        <div className="s-country__content pb-2">
          <Container>
            <Row>
              <div className="s-country__content--title text-light text-center p-4">
                <h1>Sell and buy near you</h1>
              </div>

              <div className="s-country__content--body text-light pt-5">
                <div className="content--title text-center pb-4">
                  <h4>Find your community below </h4>
                </div>

                <div className="content--body__card d-flex justify-content-evenly align-items-center text-center">
                  {data.src.map((src, index) => (
                    <div className="card-image" key={index}>
                      <Link href="/home">
                        <a>
                          <Image
                            loader={imageCountry}
                            src={src}
                            alt="7Hit Logo"
                            width={90}
                            height={60}
                          />
                        </a>
                      </Link>
                      <div className="image__title">{data.title[index]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="s-country__footer text-light text-center p-5">
                <div className="footer--title pb-4">
                  <h4>More communities</h4>
                </div>
                <div className="footer--body ">
                  <div className="footer--body_content ">
                    <div className="content_top d-flex justify-content-evenly align-items-center flex-wrap text-center">
                      <div>
                        <Link href="/home">Argentina</Link>
                      </div>
                      <div>
                        <Link href="/home">Bosnia and Herzegovina</Link>
                      </div>
                      <div>
                        <Link href="/home">Bulgaria</Link>
                      </div>
                      <div>
                        <Link href="/home">Colombia</Link>
                      </div>
                      <div>
                        <Link href="/home">Ecuador</Link>
                      </div>
                      <div>
                        <Link href="/home">Kazakhstan</Link>
                      </div>
                      <div>
                        <Link href="/home">Peru</Link>
                      </div>
                      <div>
                        <Link href="/home">Poland</Link>
                      </div>
                    </div>
                    <div className="content_bottom d-flex justify-content-center align-items-center flex-wrap text-center pt-4">
                      <div className="mx-5">
                        <Link href="/home">Ukraine</Link>
                      </div>
                      <div className="mx-5">
                        <Link href="/home">Uzbekistan</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Home;
