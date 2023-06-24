import { useState, useEffect } from 'react';

export function Carousel({ images }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, images.length]);

  function chevron(e) {
    if (e.target.className === 'fa-solid fa-chevron-left') {
      setActive((active - 1 + images.length) % images.length);
    } else {
      setActive((active + 1) % images.length);
    }
  }

  function DotButton({ images, onSelect, isActive }) {
    return (
      <div className="dots-row">
        {images.map((img, index) => {
          return (
            <div className="column" key={img}>
              <button
                className={
                  images.indexOf(img) === isActive
                    ? 'dot-buttons black'
                    : 'dot-buttons'
                }
                id={index}
                onClick={(e) => onSelect(e.target.id)}></button>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="row margin-top">
      <div className="column-one-third">
        <i className="fa-solid fa-chevron-left" onClick={chevron} />
      </div>
      <div className="column-one-third">
        <img src={images[active]} alt="pokemon"></img>
        <DotButton
          images={images}
          onSelect={(e) => setActive(e)}
          isActive={active}
        />
      </div>
      <div className="column-one-third">
        <i className="fa-solid fa-chevron-right" onClick={chevron} />
      </div>
    </div>
  );
}
