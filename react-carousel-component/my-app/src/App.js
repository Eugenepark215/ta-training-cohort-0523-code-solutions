import { Carousel } from './Carousel';
const imgPokemonArray = [
  'imgsPokemon/007.png',
  'imgsPokemon/158.png',
  'imgsPokemon/258.png',
  'imgsPokemon/393.png',
  'imgsPokemon/501.png',
  'imgsPokemon/656.png',
  'imgsPokemon/728.png',
  'imgsPokemon/816.png',
];
function App() {
  return (
    <div>
      <Carousel images={imgPokemonArray} />
    </div>
  );
}

export default App;
