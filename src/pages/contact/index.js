import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import styles from "../../Styles/pages/contact/Contact.module.css";

const Index = () => {
  const [contactDetail, setContactDetail] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const [message, setMessage] = useState("");

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleContactUs = async () => {
    setShowError(false);
    setError("");
    setMessage("");

    if (
      contactDetail.name.length <= 0 ||
      contactDetail.email.length <= 0 ||
      contactDetail.description.length <= 0
    ) {
      setError("All fields are required!");
      setShowError(true);
    } else {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...contactDetail }),
        }
      );

      const json = await response.json();

      if (response.ok) {
        setMessage(json.message);
        setContactDetail({ name: "", email: "", description: "" });
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left_side}>
              <div className={`${styles.address} ${styles.details}`}>
                <i className="bx bxs-location-plus"></i>
                <div className={styles.topic}>Address</div>
                <div className={styles.text_one}>PES MCOE</div>
                <div className={styles.text_two}>
                  1186/A, Off J.M. Road, Shivajinagar, Pune, Maharashtra Pin-
                  411005.
                </div>
              </div>
              <div className={`${styles.phone} ${styles.details}`}>
                <i className="bx bxl-instagram-alt"></i>
                <div className={styles.topic}>Instagram</div>
                <div className={styles.text_one}>gdscpesmcoe</div>
              </div>
              <div className={`${styles.email} ${styles.details}`}>
                <i className="bx bxs-envelope"></i>
                <div className={styles.topic}>Email</div>
                <div className={styles.text_one}>gdscpesmcoe@gmail.com</div>
              </div>
            </div>
            <div className={styles.right_side}>
              <div className={styles.topic_text}>Send us a message</div>
              <h1>
                <span style={{ color: "#2681f4" }}>Co</span>
                <span style={{ color: "#019b4d" }}>nta</span>
                <span style={{ color: "#f7b401" }}>ct</span>
                <span style={{ color: "#f62b24" }}> Us</span>
              </h1>

              <form></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
