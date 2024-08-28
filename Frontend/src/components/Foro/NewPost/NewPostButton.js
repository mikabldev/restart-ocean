import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from './NewPostButton.module.css';

function NewPostButton() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 1000));
        }

        if (isLoading) {
            simulateNetworkRequest()
                .then(() => {
                    setLoading(false);
                    navigate('/nuevo-post');
                });
        }
    }, [isLoading, navigate]);

    const darClick = () => setLoading(true);

    return (
        <Button
            className={styles.npostBtn}
            disabled={isLoading}
            onClick={!isLoading ? darClick : null}
        >
            {isLoading ? 'Cargando…' : 'Nuevo Post'}
        </Button>
    );
}

export default NewPostButton;