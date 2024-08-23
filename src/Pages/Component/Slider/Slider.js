import React from "react";
import ImageSlider from "./ImageSlider";
import './Slider.css';

export const Slider = () => {
  const slides = [
    { url: "https://th.bing.com/th/id/R.5daca973a106fe0568f50f3b75b1fd94?rik=7cXArPLTkXACuw&riu=http%3a%2f%2fwww.rage.tn%2fFr%2fupload%2f1454498459.jpg&ehk=QFk8UhzZbEBoNd2lBMnXfh6An617RbJdQGNQAR646Wk%3d&risl=&pid=ImgRaw&r=0", title: "داء الكلب is a danger !" },
    { url: "http://www.rage.tn/Fr/upload/1453717234.jpg", title: "Protect your animals" },
    { url: "https://www.egora.fr/sites/default/files/styles/a_la_une/public/images/article_images_import/vaccin-dessin_6.jpg?itok=BbW42K4A", title: "Prevention." },
  ];
  
  const containerStyles = {
    width: "100%",
    maxWidth: "800px",
    height: "400px", 
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="banner">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Slider;
