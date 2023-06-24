export function Carousel(props) {
  return (
    <div class="row margin-top">
      <div class="column-one-third">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="column-three-fifths">
        <img src="imgsPokemon/007.png" alt="Squirtle" />
        <div class="dots-row">
          {props.imgArray.map((img, index) => {
            return (
              <div className="column" key={img}>
                <button class="dot-buttons" id={index}></button>
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
