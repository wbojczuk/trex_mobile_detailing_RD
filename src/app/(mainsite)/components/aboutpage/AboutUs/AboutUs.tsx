import Link from 'next/link';
import styles from './aboutus.module.css';

export default function AboutUs(){
return (
 <div className={styles.about}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>With our commitment to delivering "A Showroom Shine Everytime," we guarantee exceptional results. From thorough exterior washing to meticulous interior cleaning, we leave no detail overlooked. Not only does a detailed car look impressive, but it also maintains its value over time. Trust T-REX to bring out the best in your vehicle, providing a shine that lasts.</p>
        <Link className='main-link' href={"/contact"}>Contact Us</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/blue-car.png" alt="image of a Blue car" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};