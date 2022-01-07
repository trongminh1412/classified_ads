import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row, Card, CardBody, Button } from 'reactstrap';
import Navigation_country from 'components/Navigation/Navigation_country';

export default function Home() {
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
                  <div className="card-image">
                    <Image
                      src="/country/VN.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">Viet Nam</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/BR.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">Brazil</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/IN.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">India</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/MC.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">Indonesia</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/US.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">USA</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/RO.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">Romania</div>
                  </div>
                  <div className="card-image">
                    <Image
                      src="/country/ZA.png"
                      alt="7Hit Logo"
                      width={90}
                      height={60}
                      priority
                    />
                    <div className="image__title">South Africa</div>
                  </div>
                </div>
              </div>

              <div className="s-country__footer text-light text-center p-5">
                <div className="footer--title pb-4">
                  <h4>More communities</h4>
                </div>
                <div className="footer--body ">
                  <div className="footer--body_content ">
                    <div className="content_top d-flex justify-content-evenly align-items-center flex-wrap text-center">
                      <div>Argentina</div>
                      <div>Bosnia and Herzegovina</div>
                      <div>Bulgaria </div>
                      <div>Colombia </div>
                      <div>Ecuador</div>
                      <div>Kazakhstan</div>
                      <div>Peru</div>
                      <div>Poland</div>
                    </div>
                    <div className="content_bottom d-flex justify-content-center align-items-center flex-wrap text-center pt-4">
                      <div className="mx-5">Ukraine</div>
                      <div className="mx-5">Uzbekistan</div>
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
