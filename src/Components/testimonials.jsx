import { useState } from "react";
import { tanyaInfo, jhonInfo } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./testimonials.module.css";

const imageAnimation = {
  in: {
    y: -500,
  },
  on: {
    y: 0,
  },
  out: {
    y: 500,
    transition: { duration: 0.1 },
  },
};

const textAnimation = {
    in: {
      opacity: .2,
    },
    on: {
      opacity: 1,
    },
    out: {
      opacity: .2,
      transition: { duration: 0.1 },
    },
  };

function Slider() {
  const [swicher, setSwicher] = useState(false);
  const [data, setData] = useState(tanyaInfo);

  function changeData() {
    swicher ? setData(jhonInfo) : setData(tanyaInfo);
    setSwicher(!swicher);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {data.map((e) => (
          <div key={e.name} className={styles.cont}>
            <div
              className={styles.infoCont}
            >
              <motion.p
              initial="in"
              animate="on"
              exit="out"
              variants={textAnimation} className={styles.info}>{e.content}</motion.p>
              <span className={styles.userInfo}>
                <p className={styles.name}>{e.name}</p>
                <p className={styles.position}>{e.job}</p>
              </span>
            </div>
            <div className={styles.contImage}>
              <div className={styles.imageCont}>
              <motion.img
                initial="in"
                animate="on"
                exit="out"
                variants={imageAnimation}
                className={styles.image}
                src={e.image}
                alt={e.name}
              />
              </div>
              <div className={styles.swicher}>
                <FontAwesomeIcon className={styles.icon} onClick={changeData} icon={faAngleLeft} />
                <FontAwesomeIcon className={styles.icon} onClick={changeData} icon={faAngleRight} />
              </div>
            </div>
          </div>
        ))}
      </AnimatePresence>
    </>
  );
}

export default Slider;
