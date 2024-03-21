import Link from 'next/link';
import styles from './detailing.module.css';

export default function Detailing(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>Auto Detailing</h2>
        <p>Our setup is equipped with the latest tools and techniques, ensuring a thorough and professional detailing job every time. By choosing T-REX Mobile Detailing and Pressure Washing, you'll not only save time and effort but also maintain the appearance and value of your vehicles.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/black-car.webp" alt="image of a black car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};