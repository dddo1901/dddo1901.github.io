import { Container } from "react-bootstrap";
import Company from "./img-aboutus/Comapny.png";
import CEO from "./img-aboutus/Fouder.png";
import Vision from "./img-aboutus/vision.png";
import Product from "./img-aboutus/product.webp";
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
            <h1>Who we are</h1>
          </div>
          <div className="aboutus-company" data-aos="fade-up">
            <p className="aboutus-company-infor">
            Gracious Garments is a clothing company that offers high-quality, stylish, and affordable 
            apparel for men, women, and children. We are based in Ho Chi Minh City, Vietnam, and we ship our products worldwide. 
            Our mission is to provide our customers with a gracious and satisfying shopping experience, from browsing our online 
            catalog to receiving their orders at their doorstep. We believe that everyone deserves to look and feel good, no matter their budget, 
            size, or taste. That’s why we offer a wide range of clothing options, from casual to formal, from classic to trendy, from basic to bold. 
            Whether you need a new outfit for work, a special occasion, or just for fun, we have something for you at Gracious Garments. We also care about 
            the environment and the people who make our clothes. We use eco-friendly materials and practices, and we ensure fair wages and working conditions 
            for our suppliers and employees. We are proud to be a socially responsible and ethical business, and we hope to inspire others to do the same. 
            </p>
            <div className="aboutus-img-company" data-aos="zoom-in">
              <img className="img-company" src="https://media1.tenor.com/images/e1ae7aea13cc1f830ac75f5f9f10dd05/tenor.gif?itemid=11805584" alt="company" />
            </div>
          </div>
          <div className="aboutus-fouder" data-aos="fade-up">
            <div className="aboutus-img-ceo" data-aos="fade-right">
              <img className="img-ceo" src="https://media1.tenor.com/images/21e789fe02beae4e0efea6240530eace/tenor.gif?itemid=12376995" alt="ceo" />
            </div>
            <p className="aboutus-ceo-infor">
              Founder GraciousGrament was founded by Mr. John Smith, a visionary
              entrepreneur with a passion for innovation and a deep
              understanding of the importance of air circulation. With years of
              experience in the fan industry, Mr. Smith recognized the need for
              reliable and efficient fans that cater to a wide range of customer
              preferences. Through his leadership and dedication, we has
              grown into a reputable brand known for its exceptional products
              and customer-centric approach.
            </p>
          </div>
          <div className="aboutus-product-featured" data-aos="fade-up">
            <p className="aboutus-product-infor">
              Good Products At GraciousGrament, we take great pride in offering a
              diverse range of top-notch fans. Our table fans are designed with
              portability in mind, providing a convenient cooling solution for
              any room or workspace. The exhaust fans we offer are known for
              their powerful performance and effective ventilation, ensuring
              fresh and clean air in any environment. For those seeking elegance
              and superior airflow, our ceiling fans are crafted with precision
              and style. With us, you can trust that you're getting
              high-quality cloths that are built to last.
            </p>
            <div className="aboutus-img-product" data-aos="fade-left">
              <img className="img-product" src="https://media.tenor.com/images/c7992c0af505207ac7e7c0ff0598a8e6/tenor.gif" alt="product" />
            </div>
          </div>
          <div className="aboutus-vision" data-aos="fade-up">
            <div className="aboutus-img-vision" data-aos="fade-right">
              <img className="img-vision" src="https://th.bing.com/th/id/R.ba9e547625ef6e9058585b008d94d82d?rik=nnN1wIvh4SOMbQ&pid=ImgRaw&r=0" alt="vision" />
            </div>
            <p className="aboutus-vision-infor">
              Vision of the Company Our vision at  is to become the go-to
              brand for all fan-related needs, providing exceptional products
              and unparalleled customer service. We strive to continuously
              innovate and improve our offerings, staying ahead of the curve in
              terms of technology and design. Our aim is to create a comfortable
              and refreshing environment for our customers, enhancing their
              overall well-being and satisfaction. We are committed to
              delivering excellence and ensuring that GraciousGrament remains synonymous
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
      </div>
    </motion.div>
  );
}

export default AboutUs;
