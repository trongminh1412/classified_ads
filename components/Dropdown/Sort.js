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

function Sort(props) {
  // dropdown delivery
  const [dropdownDelivery, setOpenDelivery] = React.useState(false);
  const toggleDelivery = () => setOpenDelivery(!dropdownDelivery);
  return (
    <>
      <Dropdown isOpen={dropdownDelivery} toggle={toggleDelivery}>
        <DropdownToggle caret tag="div" className="d-flex align-items-center">
          <h6 className="mb-0 me-3">Sort by</h6>
          <VscChevronDown />
        </DropdownToggle>
        <DropdownMenu className="mt-2">
          <DropdownItem>Electronics</DropdownItem>
          <DropdownItem>Business & Industrial</DropdownItem>
          <DropdownItem>Consumer Electroinics</DropdownItem>
          <DropdownItem>Home & Garden</DropdownItem>
          <DropdownItem>Collectibles</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default Sort;
