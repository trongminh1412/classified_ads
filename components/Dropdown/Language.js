import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VscChevronDown } from 'react-icons/vsc';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

function Language(props) {
  // dropdown delivery
  const [dropdownDelivery, setOpenDelivery] = React.useState(false);
  const toggleDelivery = () => setOpenDelivery(!dropdownDelivery);
  return (
    <>
      <Dropdown isOpen={dropdownDelivery} toggle={toggleDelivery}>
        <DropdownToggle caret tag="div" className="d-flex align-items-center">
          {''}
          <h6 className="mb-0 me-3">
            <Image
              src="/home/US.svg"
              alt="US"
              width={30}
              height={30}
              layout="fixed"
              priority="true"
            />
          </h6>
          <VscChevronDown />
        </DropdownToggle>
        <DropdownMenu className="mt-2">
          <DropdownItem header>English</DropdownItem>
          <DropdownItem>Việt Nam</DropdownItem>
          <DropdownItem>Ả Rập</DropdownItem>
          <DropdownItem>Hindi</DropdownItem>
          <DropdownItem>France</DropdownItem>
          <DropdownItem>Spain</DropdownItem>
          <DropdownItem>Italy</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Language;
