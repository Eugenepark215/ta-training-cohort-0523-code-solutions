import { useState, useEffect } from 'react';

export function Carousel(props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % props.imgArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, props.imgArray.length]);

  function handleActive(e) {
    setActive(parseInt(e.target.id));
  }

  function chevron(e) {
    if (e.target.className === 'fa-solid fa-chevron-left') {
      setActive((active - 1 + props.imgArray.length) % props.imgArray.length);
    } else {
      setActive((active + 1) % props.imgArray.length);
    }
  }

  return (
    <div class="row margin-top">
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-left" onClick={chevron} />
      </div>
      <div class="column-one-third">
        <img src={props.imgArray[active]} alt="pokemon"></img>
        <div class="dots-row">
          {props.imgArray.map((img, index) => {
            const colorIndex =
              props.imgArray.indexOf(img) === active
                ? 'dot-buttons black'
                : 'dot-buttons';
            return (
              <div className="column" key={img}>
                <button
                  className={`${colorIndex}`}
                  id={index}
                  onClick={handleActive}></button>
              </div>
            );
          })}
        </div>
      </div>
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-right" onClick={chevron} />
      </div>
    </div>
  );
}
