import { Counter } from '@/entities/Counter';
import { PokemonList } from '@/entities/PokemonList';

export const DrawerPage = () => {
  return (
    <>
      <Counter propsVale={444} />
      <h1>Drawer</h1>
      <PokemonList />
    </>
  );
};
