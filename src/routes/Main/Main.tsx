import React, { useEffect } from 'react';
import './Main.css';
import Hakkaisan from '../../Component/images/Hakkaisan.png';
import VisualCup1text from '../../Component/images/visual_cup1_text.png';
import Fukuchiyo from '../../Component/images/Fukuchiyo.png';
import VisualCup2text from '../../Component/images/visual_cup2_text.png';
import Cup from '../../Component/images/cup.png';
import VisualTitle from '../../Component/images/visual_title.png';
import { fadeInElements } from '../../Component/fadeEls';

const Main: React.FC = () => {
  useEffect(() => {
    fadeInElements('.visual .fade-in');
  }, []);

  return (
    <section className="visual">
      <div className="inner">
        <div className="title fade-in">
          <img src={VisualTitle} alt="123" />
        </div>
        <div className="fade-in">
          <img src={Hakkaisan} alt="Cup1" className="cup1 image" />
        </div>
        <div className="fade-in">
          <img src={Fukuchiyo} alt="Cup2" className="cup2 image" />
        </div>
        <div className="fade-in">
          <img src={Cup} alt="Spoon" className="spoon" />
        </div>
      </div>
    </section>
  );
};

export default Main;
