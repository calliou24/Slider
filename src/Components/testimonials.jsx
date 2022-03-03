
import { useState } from 'react'
import { tanyaInfo, jhonInfo } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from "framer-motion"

import styles from './testimonials.module.css'

const animation  = {
    
    in:  {
        scale: .95

    },
    on  : {
        scale: 1

    }
}

function Slider() {
  
    const [swicher, setSwicher] = useState(false)
    const [data, setData] = useState(tanyaInfo)

    function changeData() {
        swicher ? setData(jhonInfo) : setData(tanyaInfo);
        setSwicher(!swicher)
        
    }

    return (

    <>
        <AnimatePresence exitBeforeEnter>
            {data.map( e => (
                    <motion.div 
                    initial="in"
                    animate="on"
                    exit="out"
                    variants={animation}
                    key={e.name}
                    className={styles.cont}>
                        <div className={styles.infoCont}>
                            <p className={styles.info}>{e.content}</p>
                            <span className={styles.userInfo}>
                                <p className={styles.name}>{e.name}</p>
                                <p className={styles.position}>{e.job}</p>
                            </span>
                        </div>
                        <div className={styles.imageCont}>
                            <img className={styles.image} src={e.image} alt={e.name}></img>
                        
                            <div className={styles.swicher}>
                                <FontAwesomeIcon onClick={changeData} icon={faAngleLeft}/>
                                <FontAwesomeIcon onClick={changeData} icon={faAngleRight}/>
                            </div>
                        </div>
                    </motion.div>
            ))}
        </AnimatePresence>
    </>
    )
}

export default Slider