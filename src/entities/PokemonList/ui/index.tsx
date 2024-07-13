'use client';

import { useGetAllPokemonQuery } from '../api/pokemonApi';
import styles from './PokemonList.module.css';

export const PokemonList = () => {
  const { data, isLoading } = useGetAllPokemonQuery();

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{isLoading ? 'Грузим' : 'Список покемонов'}</h2>
      {data?.results.map((item) => (
        <p key={item.name} className={styles.item}>
          {item.name}
        </p>
      ))}
    </div>
  );
};
