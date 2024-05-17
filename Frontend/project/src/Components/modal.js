import React from "react";
import styles from '../Components/style.module.css';

const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }

    const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
    const title = item.volumeInfo.title || "No Title Available";
    const authors = item.volumeInfo.authors?.join(", ") || "No Authors Available";
    const publisher = item.volumeInfo.publisher || "No Publisher Available";
    const publishedDate = item.volumeInfo.publishedDate || "No Date Available";
    const description = item.volumeInfo.description || "No Description Available";
    const previewLink = item.volumeInfo.previewLink || "#";

    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.overlayInner}>
                    <button className={styles.close} onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                    <div className={styles.innerbox}>
                        {thumbnail && <img src={thumbnail} alt={title} />}
                        <div className={styles.info}>
                            <h1>{title}</h1>
                            <h3>{authors}</h3>
                            <h4>
                                {publisher} <span>{publishedDate}</span>
                            </h4>
                            <br />
                            <a href={previewLink} target="_blank" rel="noopener noreferrer">
                                <button className={styles.moreButton}>More</button>
                            </a>
                        </div>
                    </div>
                    <h4 className={styles.description}>
                        {description}
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Modal;
