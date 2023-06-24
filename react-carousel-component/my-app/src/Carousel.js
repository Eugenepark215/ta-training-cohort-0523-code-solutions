import { useState } from 'react';
export function Carousel(props) {
  const [active, setActive] = useState(0);
  function handleIndex(e) {
    setActive(parseInt(e.target.id));
  }
  return (
    <div class="row margin-top">
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-left"></i>
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
                  onClick={handleIndex}></button>
              </div>
            );
          })}
        </div>
      </div>
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}
