import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">
      <a>Crypto Tracker</a>
    </Link>
    <style jsx>{`
        nav {
            padding: 10px;
            background-color: #ECECEC;
            font-family: Arial;
            font-size: 14px;
        }

        a, a:visited {
            color: #676767;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: #000;
        }
    `}</style>
  </nav>
);

export default Navbar;