
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <h2 className='text-black ml-10 font-bold text-2xl'>Laborda</h2>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className='flex flex-row gap-5 mr-10'>
            <Navbar.Link href="#">Productos</Navbar.Link>
            <Navbar.Link href="#">Nosotros</Navbar.Link>
            <Navbar.Link href="#">Contacto</Navbar.Link>
        </div>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Header;
