import type { Metadata } from "next"
import styles from "./about.module.css"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"

export const metadata: Metadata = {
    title: "About Us | T-REX Pressure Washing and Mobile Detailing | Top Rated Mobile Detailing in Florence, AL",
    description: ""
}

export default function AboutPage(){
    return(
        <>
            <PageTitle pageTitle="About" />
            <AboutUs />
            <StatsRibbon />
        </>
    )
}