import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Company from "./img-aboutus/Comapny.png";
import CEO from "./img-aboutus/Fouder.png";
import Vision from "./img-aboutus/vision.png";
import Product from "./img-aboutus/product.png";
import "./AboutUs.scss";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <motion.div
      className="aboutus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid="lg">
        <div className="aboutus-content">
          <div className="aboutus-title" data-aos="fade-right">
            <h1>FANoFAN - Your Choice For Your Home</h1>
          </div>
          <div className="aboutus-company" data-aos="fade-up">
            <p className="aboutus-company-infor">
              FANoFAN is a leading company in the fan industry, specializing in
              the production and distribution of high-quality fans. With a wide
              range of options, FANoFAN offers customers the perfect cooling
              solutions for their homes, offices, and other spaces. Whether
              you're looking for a compact table fan, a powerful exhaust fan, or
              an elegant ceiling fan, FANoFAN has got you covered. Our fans are
              designed to provide optimal airflow, durability, and energy
              efficiency, ensuring the utmost comfort and satisfaction for our
              valued customers.
            </p>
            <div className="aboutus-img-company" data-aos="zoom-in">
              <img className="img-company" src={Company} alt="company" />
            </div>
          </div>
          <div className="aboutus-fouder" data-aos="fade-up">
            <div className="aboutus-img-ceo" data-aos="fade-right">
              <img className="img-ceo" src={CEO} alt="ceo" />
            </div>
            <p className="aboutus-ceo-infor">
              Founder FANoFAN was founded by Mr. John Smith, a visionary
              entrepreneur with a passion for innovation and a deep
              understanding of the importance of air circulation. With years of
              experience in the fan industry, Mr. Smith recognized the need for
              reliable and efficient fans that cater to a wide range of customer
              preferences. Through his leadership and dedication, FANoFAN has
              grown into a reputable brand known for its exceptional products
              and customer-centric approach.
            </p>
          </div>
          <div className="aboutus-product-featured" data-aos="fade-up">
            <p className="aboutus-product-infor">
              Good Products At FANoFAN, we take great pride in offering a
              diverse range of top-notch fans. Our table fans are designed with
              portability in mind, providing a convenient cooling solution for
              any room or workspace. The exhaust fans we offer are known for
              their powerful performance and effective ventilation, ensuring
              fresh and clean air in any environment. For those seeking elegance
              and superior airflow, our ceiling fans are crafted with precision
              and style. With FANoFAN, you can trust that you're getting
              high-quality fans that are built to last.
            </p>
            <div className="aboutus-img-product" data-aos="fade-left">
              <img className="img-product" src={Product} alt="product" />
            </div>
          </div>
          <div className="aboutus-vision" data-aos="fade-up">
            <div className="aboutus-img-vision" data-aos="fade-right">
              <img className="img-vision" src={Vision} alt="vision" />
            </div>
            <p className="aboutus-vision-infor">
              Vision of the Company Our vision at FANoFAN is to become the go-to
              brand for all fan-related needs, providing exceptional products
              and unparalleled customer service. We strive to continuously
              innovate and improve our offerings, staying ahead of the curve in
              terms of technology and design. Our aim is to create a comfortable
              and refreshing environment for our customers, enhancing their
              overall well-being and satisfaction. We are committed to
              delivering excellence and ensuring that FANoFAN remains synonymous
              with quality and reliability.
            </p>
          </div>
          <div className="aboutus-contact" data-aos="fade-up">
            Contact Information For more information about our products and
            services, or to place an order, please reach out to us at the
            following contact details:
            <ul>
              <li>Address: 590 Cach mang thang Tam, Quan 3, TPHCM</li>
              <li>Phone: +1-123-456-7890</li>
              <li>Social Media: Find us on Facebook, Instagram, and Twitter</li>
              <li>
                Customer Service: Our dedicated customer service team is
                available to assist you with any inquiries or concerns you may
                have. You can reach them by phone or email, and they will be
                more than happy to help. We hope this information about FANoFAN
                fulfills your request. Feel free to let us know if there's
                anything else we can assist you with.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default AboutUs;
