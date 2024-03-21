import React from 'react';

import styles from './FadeFunc.module.scss'


const  FadeInSection = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);


    const classes = isVisible ? styles.isVisible : '';
    
    return (
      <div
        className={`${styles.fadeInSection} ${classes}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection;