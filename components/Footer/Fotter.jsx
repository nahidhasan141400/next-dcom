const Fotter = () => {
  return (
    <>
      <div className="footer p-10 text-black">
        <div>
          <span className="footer-title">INFORMATION</span>
          <a className="link link-hover">Seller Policy</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">Support Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </div>
        <div>
          <span className="footer-title">USEFULL LINKS</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Slim silks. design and develop by <a href="https://dewanict.com/" className="text-blue-600 hover:text-blue-800"> dewan ICT </a></p>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
