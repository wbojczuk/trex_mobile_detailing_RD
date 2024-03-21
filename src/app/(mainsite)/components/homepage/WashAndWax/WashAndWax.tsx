import styles from './washandwax.module.css';

export default function WashAndWax(){
return (
 <div className={styles.washAndWax}>

    <div className={styles.waxWrapper}>
        <div className={styles.content}>
            <h3><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z"/></svg><span>&nbsp;Special Offers</span></h3>

            <h2>Wash And Wax Wednesday!</h2>

            <h4>Every Wednesday!</h4>
        </div>
        <div className={styles.content}>
            <div className={styles.discount}>
                <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27M5.33 4.06L4.06 5.33L7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22l1.27-1.27z"/></svg>
                </div>
                <span>Cars $40</span>
            </div>
            <div className={styles.discount}>
                <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27M5.33 4.06L4.06 5.33L7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22l1.27-1.27z"/></svg>
                </div>
                <span>Trucks/SUV $60</span>
            </div>
            <div className={styles.discount}>
                <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27M5.33 4.06L4.06 5.33L7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22l1.27-1.27z"/></svg>
                </div>
                <span>Large Trucks/SUV $80</span>
            </div>
        </div>
    </div>

    <img src="/img/header-bg.webp" aria-hidden className="bg-img" />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,.5)"}}></div>
 </div>
)};