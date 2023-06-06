export function PokemonList(props) {
  const pokemonNames = props.array.map((element) => (
    <li key={element.number}>{element.name}</li>
  ));
  return <ul>{pokemonNames}</ul>;
}
