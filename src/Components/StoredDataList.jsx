import React from 'react';
import Button from './Button';
import styles from './Components.module.css';
import { FiInbox } from 'react-icons/fi';

export default function StoredDataList({ data, onClear }) {
    return (
        <div className={`${styles.storedDataList}`}>
            <div className={`${styles.storedHeader}`}>
                <h3>Stored Dialogs:</h3>
                <Button onClick={onClear} label="Clear Data" className="clearDataBtn" />
            </div>
            {data.length === 0 ? (
                <div className={`${styles.noDataContainer}`}>
                    <FiInbox className={`${styles.noDataIcon}`} />
                    <p className={`${styles.noDataText}`}>No Dialogs Stored</p>
                </div>
            ) : (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}