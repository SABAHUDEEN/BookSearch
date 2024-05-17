import { useState } from 'react';
import styles from '../Components/style.module.css';
import Modal from './modal';

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {book.map((item) => {
                const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                const title = item.volumeInfo.title;

                if (thumbnail && amount && title) {
                    return (
                        <div
                            className={styles.card}
                            onClick={() => {
                                setShow(true);
                                setItem(item);
                            }}
                            key={item.id} // Unique key for each item
                        >
                            <img src={thumbnail} alt={title} />
                            <div className={styles.bottom}>
                                <h3 className={styles.title}>{title}</h3>
                                <p className={styles.amount}>&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            {show && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    );
};

export default Card;
