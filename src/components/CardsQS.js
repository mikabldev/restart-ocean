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
                                <p>INDIA</p>
                                <span>Taj Mahal</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>Taj Mahal is a beautiful and most attractive historical place in India</p>
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
                            style={{ backgroundImage: 'url(https://cdn.skyrisecities.com/sites/default/files/images/articles/2019/01/35507/35507-119797.jpg)' }}
                        >
                            <div className={styles.inner}>
                                <p>DUBAI</p>
                                <span>Burj Khalifa</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>The Burj Khalifa is the tallest building in the world and a global icon.</p>
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
                            style={{ backgroundImage: 'url(https://cdn.skyrisecities.com/sites/default/files/images/articles/2019/01/35507/35507-119797.jpg)' }}
                        >
                            <div className={styles.inner}>
                                <p>DUBAI</p>
                                <span>Burj Khalifa</span>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <p>The Burj Khalifa is the tallest building in the world and a global icon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsQS;