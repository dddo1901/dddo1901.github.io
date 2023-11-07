import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import FormCheck from "react-bootstrap/FormCheck";
import "./Feedback.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function CustomService(props) {
  const { onRatingChange, onNextPage, ratings, ratingError } = props;

  function renderStarRating(ratingType, ratingValue) {
    const maxRating = 5; //
    const starIcons = [];

    for (let i = 1; i <= maxRating; i++) {
      const starColor = i <= ratingValue ? "gold" : "grey";
      starIcons.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className="star"
          style={{ color: starColor }}
          onClick={() => onRatingChange(ratingType, i)}
        />
      );
    }

    return starIcons;
  }

  return (
    <div>
      <h3>How do you describe your overall satisfaction?</h3>
      <Form.Group controlId="serviceRating">
        <Form.Label>Service provided:</Form.Label>
        <div className="star-rating">
          {renderStarRating("serviceRating", ratings.serviceRating)}
        </div>
      </Form.Group>

      <Form.Group controlId="productQualityRating">
        <Form.Label>Product's Quality:</Form.Label>
        <div className="star-rating">
          {renderStarRating(
            "productQualityRating",
            ratings.productQualityRating
          )}
        </div>
      </Form.Group>

      <Form.Group controlId="supportRating">
        <Form.Label>Support:</Form.Label>
        <div className="star-rating">
          {renderStarRating("supportRating", ratings.supportRating)}
        </div>
      </Form.Group>

      <Form.Group controlId="generalSatisfactionRating">
        <Form.Label>General satisfaction:</Form.Label>
        <div className="star-rating">
          {renderStarRating(
            "generalSatisfactionRating",
            ratings.generalSatisfactionRating
          )}
        </div>
      </Form.Group>

      {ratingError && (
        <p style={{ color: "red" }}>Please rate all categories.</p>
      )}
      <Button className="next" onClick={onNextPage}>
        Next
      </Button>
    </div>
  );
}

function Summary(props) {
  const { ratings, feedback, onPrevPage, onSubmit } = props;

  return (
    <div>
      <Container>
        <h3>Summary</h3>
        <h4>How do you describe your overall satisfaction?</h4>
        <p>Service Rating: {ratings.serviceRating}</p>
        <p>Product'Quality: {ratings.productQualityRating}</p>
        <p>Support: {ratings.supportRating}</p>
        <p>General satisfaction: {ratings.generalSatisfactionRating}</p>
        <h5>Your review and comments</h5>
        <p>Review and Comments: {feedback}</p>
        <Button className="prev" onClick={onPrevPage}>
          Prev
        </Button>{" "}
        <Button className="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Container>
    </div>
  );
}

function ProductFeedback() {
  const [page, setPage] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState({
    serviceRating: 0,
    productQualityRating: 0,
    supportRating: 0,
    generalSatisfactionRating: 0,
  });
  const [ratingError, setRatingError] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const progress = ((page - 1) / 3) * 100;

  const handleRatingChange = (ratingType, ratingValue) => {
    setRatings({
      ...ratings,
      [ratingType]: ratingValue,
    });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < 4) {
      if (page === 1) {
        if (
          ratings.serviceRating === 0 ||
          ratings.productQualityRating === 0 ||
          ratings.supportRating === 0 ||
          ratings.generalSatisfactionRating === 0
        ) {
          setRatingError(true);
          return;
        }
      } else if (page === 2) {
        if (feedback.trim() === "") {
          setRatingError(true);
          return;
        }
      } else if (page === 3) {
        if (
          firstName.trim() === "" ||
          lastName.trim() === "" ||
          email.trim() === "" ||
          phoneNumber.trim() === "" ||
          !acceptTerms
        ) {
          setRatingError(true);
          return;
        }
      }

      setRatingError(false);
      setPage(page + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleShowTermsModal = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  const handleAcceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-3 text-center">
        <ProgressBar now={progress} variant="success" />
        {page === 1 ? (
          <CustomService
            onRatingChange={handleRatingChange}
            onNextPage={handleNextPage}
            ratings={ratings}
            ratingError={ratingError}
          />
        ) : page === 2 ? (
          <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group controlId="feedback">
              <Form.Label>Your review and comments</Form.Label>
              <Form.Control
                placeholder="Write your review here.."
                as="textarea"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="page2-feedback"
              />
            </Form.Group>
            {ratingError && <p style={{ color: "red" }}>Required</p>}
            <Button className="mt-3 me-3 prev" onClick={handlePrevPage}>
              Prev
            </Button>{" "}
            <Button className="mt-3 next" onClick={handleNextPage}>
              Next
            </Button>
          </Form>
        ) : page === 3 ? (
          <Form onSubmit={handleSubmit} className="page-3">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 " controlId="lastName">
                      <Form.Label className="custom-container">
                        Last name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        disabled={submitted}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label className="custom-container">
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        disabled={submitted}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="custom-container">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={submitted}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlPhone">
                <Form.Label className="custom-container">Phone</Form.Label>
                <PhoneInput
                  international
                  defaultCountry="VN"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber(value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="acceptTerms">
                <Form.Check
                  type="checkbox"
                  label="Please accept our Terms and Conditions"
                  checked={acceptTerms}
                  onChange={handleAcceptTermsChange}
                />
                {ratingError && !acceptTerms && (
                  <p style={{ color: "red" }}>
                    Please accept the Terms and Conditions
                  </p>
                )}
              </Form.Group>
              <Button className="prev" onClick={handlePrevPage}>
                Prev
              </Button>{" "}
              <Button className="next" onClick={handleNextPage}>
                Next
              </Button>
              <Button variant="link" onClick={handleShowTermsModal}>
                View Terms and Conditions
              </Button>
            </Form>
          </Form>
        ) : page === 4 ? (
          <div className="text-center">
            {loading ? (
              <>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p>Submitting...</p>
              </>
            ) : submitted ? (
              <div className="check">
                <FormCheck
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  inline
                />
                <p>Thank you for your FeedBack!</p>
              </div>
            ) : (
              <Summary
                ratings={ratings}
                feedback={feedback}
                onPrevPage={handlePrevPage}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        ) : null}

        <Modal show={showTermsModal} onHide={handleCloseTermsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Terms and Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/* ... (terms content) */}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTermsModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default ProductFeedback;
