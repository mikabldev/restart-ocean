import React, { useState } from 'react';
import styles from './CardsQS.module.css';

const CardsQS = () => {
    const [flipped, setFlipped] = useState([false, false]);

    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.cols}>

                {/* Primer card (Misión) */}
                <div
                    className={`${styles.col} ${flipped[0] ? styles.hover : ''}`}
                    onClick={() => handleFlip(0)}
                >
                    <div className={styles.container}>
                        <div
                            className={styles.front}
                            style={{ backgroundImage: `url(/img/mision.jpg)` }}
                        >
                            <div className={styles.inner}>
                                <span>Misión</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>Nuestra misión es clara: crear un espacio único donde cada iniciativa, proyecto y esfuerzo dedicado a la protección y cuidado del océano en Chile encuentre su lugar. Vivimos en un país bendecido con vastas costas y una rica biodiversidad marina.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo card (Visión) */}
                <div
                    className={`${styles.col} ${flipped[1] ? styles.hover : ''}`}
                    onClick={() => handleFlip(1)}
                >
                    <div className={styles.container}>
                        <div
                            className={styles.front}
                            style={{ backgroundImage: `url(/img/vision.jpg)` }}
                        >
                            <div className={styles.inner}>
                                <span>Visión</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>En Restart Ocean creemos que juntos podemos marcar la diferencia. Aquí, tanto empresas como individuos pueden compartir sus proyectos, intercambiar ideas y forjar alianzas que impulsen un cambio real y duradero.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tercer card (Propósito) */}
                <div
                    className={`${styles.col} ${flipped[1] ? styles.hover : ''}`}
                    onClick={() => handleFlip(1)}
                >
                    <div className={styles.container}>
                        <div
                            className={styles.front}
                            style={{ backgroundImage: `url(/img/proposito.jpg)` }}
                        >
                            <div className={styles.inner}>
                                <span>Propósito</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>Nuestra plataforma está diseñada para inspirar, conectar y movilizar a quienes aman y valoran el océano, promoviendo acciones concretas que aseguren un futuro sostenible para nuestras aguas y las generaciones futuras.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsQS;