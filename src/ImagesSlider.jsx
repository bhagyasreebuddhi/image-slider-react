import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goTOSlideIcon = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };
  return (
    <div className="sliderWrapper">
      <div className="previous" onClick={goToPrevious}>
        ❰
      </div>
      <div className="next" onClick={goToNext}>
        ❱
      </div>
      <div
        className="imageSlider"
        style={{
          backgroundImage: `url(${images[currentIndex].url})`
        }}
      ></div>
      <div className="iconWrapper">
        {images.map((image, imageIndex) => {
          return (
            <div
              key={imageIndex}
              className="icon"
              onClick={() => {
                goTOSlideIcon(imageIndex);
              }}
            >
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
