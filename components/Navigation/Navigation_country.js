import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Navbar } from 'reactstrap';

const Navigation_country = () => {
  //sticky navbar
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //scroll navbar
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      setSticky({});
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else if (window.scrollY < 160) {
      setSticky(false);
    }
  };
  return (
    <>
      <div
        className={`header_country shadow-sm p-2${
          sticky ? ' sticky-top ' : ''
        }`}
      >
        <div className="container">
          <Navbar light expand="lg">
            <Container className="d-flex justify-content-between align-content-center flex-wrap">
              <div className="col-auto pl-0 pr-3 d-flex d-none-pc-custom">
                <Link href="/">
                  <a>
                    <Image
                      src="/logo-ico.svg"
                      alt="7Hit Logo"
                      width={120}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navigation_country;
