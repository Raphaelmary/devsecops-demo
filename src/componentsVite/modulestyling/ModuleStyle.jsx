import React from 'react';
import styles from './Mod.module.css';

const ModuleStyle = () => {
    return(
        <>
            <h1>Modules - CSS Styling</h1>
            <p>This is a demonstration of styling with modules css. This enables the creation of ...</p>
            <h3 className={styles.success}>Success!</h3>
            <h3 className={styles.error}>error!</h3>
        </>
    )
};

export default ModuleStyle;