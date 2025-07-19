import React, { useState, useEffect } from 'react';
import styles from './Components.module.css';

export default function TextArea({
    value,
    onChange,
    placeholder = "Type something...",
    setError = () => { },
}) {
    const [localError, setLocalError] = useState("");

    useEffect(() => {
        setError(localError);
    }, [localError, setError]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const words = inputValue.trim().split(/\s+/);

        if (inputValue.trim() === "" || words.length <= 300) {
            setLocalError("");
            onChange(inputValue);
        } else {
            setLocalError("You cannot enter more than 300 words.");

        }
    };

    console.log("vvalue", value.length)

    return (
        <div className={styles.textAreaWrapper}>
            <textarea
                className={styles.textArea}
                placeholder={placeholder}
                value={value}
                maxLength={4000}
                onChange={handleChange}
                autoFocus
            />
            {localError && <p className={styles.errorText}>{localError}</p>}
        </div>
    );
}
