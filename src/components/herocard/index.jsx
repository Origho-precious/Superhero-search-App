import React from 'react';
import { Link } from 'react-router-dom';
import styles from  './herocard.module.css';

const HeroCard = ({ data: { name, image, id } }) => {
    return (
      <div className={styles.HeroCard}>
        <div className="card">
          <img src={image.url} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/heroes/${id}`}>View more</Link>
          </div>
        </div>
      </div>
    );
}

export default HeroCard;