import { useState, useEffect } from 'react';

export function Carousel({ images }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, images.length]);

  function Chevron({ images, direction, onSelect }) {
    return (
      <div className="column-one-third">
        {direction === 'left' ? (
          <i className="fa-solid fa-chevron-left" onClick={onSelect} />
        ) : (
          <i className="fa-solid fa-chevron-right" onClick={onSelect} />
        )}
      </div>
    );
  }

  function ActiveImage({ images, isActive }) {
    return <img src={images[isActive]} alt="" />;
  }

  function DotButton({ onSelect, isActive }) {
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
      <Chevron
        direction="left"
        onSelect={() => setActive((active - 1 + images.length) % images.length)}
      />
      <div className="column-one-third">
        <ActiveImage images={images} isActive={active} />
        <DotButton
          images={images}
          onSelect={(e) => setActive(e)}
          isActive={active}
        />
      </div>
      <Chevron
        direction="right"
        onSelect={() => setActive((active + 1) % images.length)}
      />
    </div>
  );
}
