import React from 'react';

import { RealEstate } from '../../services/manage-real-estates-service';

import styles from './styles.module.css';

interface RealEstateDetailsProps {
  item: RealEstate | null;
}

export default (props: RealEstateDetailsProps) => {
  const { item } = props;
  let content = null;
  if (item) {
    content = (
      <div>
        <p>Ulica: {item.street}</p>
        <p>Szer. Geo.: {item.lat}</p>
        <p>Dl. Geo.: {item.lng}</p>
        <p>Cena: {item.price}</p>
        <p>Typ: {item.type}</p>
        <p>Rok bud.: {item.builtAt}</p>
      </div>
    );
  }
  return (
    <div className={styles.details}>
      {content}
    </div>
  );
}
