import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';
import { userService } from 'services';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCategory, BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Language_dropdown from 'components/Dropdown/Language';
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

import Popup from 'reactjs-popup';
import Login from '../../pages/auth/login';

const Navigation_detail = () => {
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

  return (
    <>
      <div
        className={`header bg-light shadow-sm p-2 bg-body rounded${
          sticky ? ' sticky-top ' : ''
        }`}
      >
        <div className="container">
          <Navbar light expand="lg">
            <Container className="d-flex align-items-center justify-content-between align-content-center flex-wrap">
              <div className="col-auto pl-0 pr-3 d-flex navbar-brands">
                <Link href="/home" passHref>
                  <a>
                    <Image
                      src="/logo-ico.svg"
                      alt="7Hit Logo"
                      width={120}
                      height={50}
                      priority="true"
                    />
                  </a>
                </Link>
              </div>

              <div className="input-group align-items-center language_dropdown">
                <Language_dropdown />
              </div>

              <div className="input-group align-items-center input-search ">
                <Button className="input-group-text" type="submit">
                  <BiSearchAlt2 />
                </Button>
                <Input
                  type="text"
                  className="form-control form-search"
                  placeholder="Search product name"
                  aria-label="Search product name"
                  aria-describedby="basic-addon"
                />
              </div>

              <div className="btn btn-create">Create listing</div>

              <div className="category position-relative">
                <Link href="/categoryDetail" passHref>
                  <h6>
                    <MdOutlineShoppingBag className="fs-4" />
                  </h6>
                </Link>
                <span className="category_counter position-absolute">5</span>
              </div>
              <div className="d-none d-lg-none ml-3 mr-0">
                <div className="nav-search-box">
                  <a href="#" className="nav-box-link">
                    <i className="la la-search la-flip-horizontal d-inline-block nav-box-icon"></i>
                  </a>
                </div>
              </div>

              <div className="d-lg-flex">
                <div id="users">
                  <FaRegUserCircle className="fs-4" />
                </div>
                <div className="user_info ms-2 align-self-center">
                  {user ? (
                    <>
                      <h6 className="text-warning">
                        Hi {userService.userValue?.username}
                      </h6>
                      <h6>
                        <a onClick={logout} style={{ cursor: 'pointer' }}>
                          Log out
                        </a>
                      </h6>
                    </>
                  ) : (
                    <Popup
                      trigger={
                        <h6 className="m-0" style={{ cursor: 'pointer' }}>
                          {' '}
                          Log in
                        </h6>
                      }
                    >
                      <Login />
                    </Popup>
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
export default Navigation_detail;
