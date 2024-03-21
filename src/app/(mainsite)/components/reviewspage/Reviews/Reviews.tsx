"use client"
import Link from "next/link"
import styles from "./reviews.module.css"
import reviewData from "@/app/(mainsite)/data/reviewData"
import Review from "./Review"

export default function Reviews() {

    const reviewElems = reviewData.map((data, i)=>{
        return <Review {...data} key={i} />
    })

  return (
    <section className={styles.section}>
      <h2>Don’t just listen to us, hear it from our happy clients!</h2>
        <div className={styles.reviewsWrapper}>
            {reviewElems}
        </div>
        <div className="center">
        <Link href="/contact" className="main-link">Contact Us</Link>
        </div>

        <div style={{backgroundColor: "rgba(0,0,0,0.64)"}} className="shader"></div>
        <img src="/img/car-tire.webp" alt="image of a clean car tire" className="bg-img" />
    </section>
  )
}
