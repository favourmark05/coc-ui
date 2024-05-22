function Footer() {
  return (
    <div>
      <footer className="bg-grey flex flex-col text-sm justify-center text-center py-5 md:py-10 px-side">
        <div className="footer-logo w-64 md:w-80 mx-auto my-10">
          <img src="/assets/svg/footer-logo.svg" alt="" />
        </div>
        <p className="max-w-3xl mx-auto">
          Come as you are and join a community of christains in worship and
          service. Constant study and learning of the Bible can help you grow
          spiritually. Access the library of Church of Christ teachings,
          sermons, tracts, lessons and more!
        </p>
        <div className="address flex flex-col items-center justify-center my-5 md:my-10">
          <div className="flex items-center mb-5">
            <img className="w-10 mr-5" src="/assets/svg/tent.svg" alt="" />
            <p className="border-l-2 pl-5 border-gray-300">
              15,Alafia Street,Ajibode ,Ibadan.
            </p>
          </div>
          <p className="flex items-center font-semibold">
            Find us on google maps{" "}
            <img
              className="w-5 ml-2"
              src="/assets/svg/arrow-up-right-black.svg"
              alt=""
            />
          </p>
        </div>
        <div className="socials flex items-center justify-center my-2 md:my-8">
          <p className="uppercase font-semibold">Follow us</p>
          <div className="social-icons flex items-center ml-3">
            <img className="w-10 mr-2" src="/assets/svg/fb.svg" alt="" />
            <img className="w-10 mr-2" src="/assets/svg/ig.svg" alt="" />
            <img className="w-10 mr-2" src="/assets/svg/yt.svg" alt="" />
          </div>
        </div>
      </footer>
      <div className="copyright bg-grey flex flex-col md:flex-row text-sm items-center justify-center pt-5 pb-5 md:pb-20 border-t-2 border-gray-300 px-side">
        <p className="mb-2 md:mr-5">Church Of Christ, University Of Ibadan.</p>
        <p className="mb-2 md:mr-10">&copy; 2022. All Rights Reserved</p>
        <p className="mb-2">Built with 💓</p>
      </div>
    </div>
  );
}

export default Footer;
