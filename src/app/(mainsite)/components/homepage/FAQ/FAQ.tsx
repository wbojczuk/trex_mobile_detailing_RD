import styles from "./faq.module.css"
import FAQItem from "./FAQItem"
import faqData from "@/app/(mainsite)/data/faqData"

export default function FAQ() {
    const faqElems = faqData.map((data, i)=>{
        return <FAQItem {...data} key={i} />
    })
  return (
    <section className={`${styles.section} center`}>
       

        <div className={styles.faqWrapper}>
        <h2 id="faqHeading" className={styles.heading}>FAQ</h2>
          {faqElems}
        </div>

        <img src="/img/car-tire.webp" alt="image of a car tire" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,0.5)"}}></div>
    </section>
  )
}
