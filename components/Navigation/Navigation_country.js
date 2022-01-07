import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';
import { userService } from 'services';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavItem,
  Button,
  Input,
} from 'reactstrap';

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

  // login
  // const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  //authorized
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ['/auth/login', '/auth/register'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }
  if (!user) {
  }
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
                      priority
                    />
                  </a>
                </Link>
              </div>

              <div className="d-flex align-items-center text-light">
                <div id="users" className="user_icon">
                  <RiUserLine className="fs-4" />
                </div>
                <div className="user_info ms-2 align-self-center">
                  {user ? (
                    <h6 className="m-0" onClick={logout}>
                      {' '}
                      Hi {userService.userValue?.username}!
                    </h6>
                  ) : (
                    <h6 className="m-0">
                      <Link href="/auth/login"> Log in</Link>
                    </h6>
                  )}
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
export default Navigation_country;
