import React from 'react';
import styles from './Components.module.css';

export default function Button({ label, onClick, className = 'save', icon, disabled = false }) {

  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={`${styles.button} ${disabled ? styles.disabled : ''} ${styles[className] || ''}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>

  );
}
