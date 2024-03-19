import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Serving All</span> <br />
            <span className="underline">Of Florence,</span> <br />
            <span className="underline">Alabama!</span>
        </h2>
        <Link href={"/contact"} className="main-link">Contact Us</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104797.23783894154!2d-87.73156959356616!3d34.8332627194045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887d486648d1f009%3A0xbaafd488fecc1565!2sFlorence%2C%20AL%2C%20USA!5e0!3m2!1sen!2sza!4v1710834602960!5m2!1sen!2sza" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};