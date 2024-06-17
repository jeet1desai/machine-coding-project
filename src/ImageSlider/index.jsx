import React, { useEffect, useState } from "react";

const data = [
  "https://images.pexels.com/photos/22757188/pexels-photo-22757188/free-photo-of-a-black-and-white-photo-of-a-woman-and-man.jpeg",
  "https://images.pexels.com/photos/16848828/pexels-photo-16848828/free-photo-of-facade-of-luxemburg-palace.jpeg",
  "https://images.pexels.com/photos/22937025/pexels-photo-22937025/free-photo-of-a-black-and-white-photo-of-a-kangaroo-sitting-on-a-rock.jpeg",
  "https://images.pexels.com/photos/20412076/pexels-photo-20412076/free-photo-of-woman-in-check-sweater-holding-flower.jpeg",
  "https://images.pexels.com/photos/22743820/pexels-photo-22743820/free-photo-of-a-black-and-white-photo-of-a-spiral.jpeg",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((act) => (act + 1) % data.length);
  };
  const handlePrev = () => {
    if (active > 0) {
      setActive((act) => act - 1);
    }
  };

  useEffect(() => {
    const i = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="image-slider">
      <button onClick={() => handlePrev()}>◀️</button>
      <img src={data[active]} alt={`slide ${active + 1}`}></img>
      <button onClick={() => handleNext()}>▶️</button>
    </div>
  );
};

export default ImageSlider;
