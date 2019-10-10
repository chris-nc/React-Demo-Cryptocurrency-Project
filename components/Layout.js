import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Navbar />
    <section className="main">
      {props.children}
      <style jsx>{`
        section {
          font-family: Arial;
          font-size: 14px;
          line-height: normal;
          color: #676767;
          padding: 20px;
          max-width: 80%;
          margin: 0 auto;
        }
      `}</style>
    </section>
  </div>
);

export default Layout;
