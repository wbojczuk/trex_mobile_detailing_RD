import type { Metadata } from "next"
import styles from "./contact.module.css"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import FormAndMap from "@/app/(mainsite)/components/contactpage/FormAndMap/FormAndMap"

export const metadata: Metadata = {
    title: "Contact Us | T-REX Pressure Washing and Mobile Detailing | Top Rated Mobile Detailing in Florence, AL",
    description: ""
}

export default function ContactPage(){
    return(
        <>
            <PageTitle pageTitle="Contact" />
            <div className={styles.contactWrapper}>
                <ContactInfo />
                <FormAndMap />

                <div style={{backgroundColor: "rgba(0,0,0,0.8)"}} className="shader"></div>
                <img src="/img/header-bg.png" alt="image of a black car" className="bg-img" />
            </div>
        </>
    )
}