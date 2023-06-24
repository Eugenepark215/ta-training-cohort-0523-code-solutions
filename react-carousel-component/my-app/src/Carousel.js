import { useState } from 'react';

export function Carousel(props) {
  const [active, setActive] = useState(0);

  function handleActive(e) {
    setActive(parseInt(e.target.id));
  }

  function chevron(e) {
    if (e.target.className === 'fa-solid fa-chevron-left') {
      if (active === 0) {
        setActive(props.imgArray.length - 1);
      } else {
        setActive(active - 1);
      }
    } else {
      if (active === props.imgArray.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }
  }

  return (
    <div class="row margin-top">
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-left" onClick={chevron} />
      </div>
      <div class="column-three-fifths">
        <img src="imgsPokemon/007.png" alt="Squirtle" />
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
