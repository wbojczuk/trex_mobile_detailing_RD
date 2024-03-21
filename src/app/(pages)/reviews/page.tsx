import type { Metadata } from "next"
import Reviews from "@/app/(mainsite)/components/reviewspage/Reviews/Reviews"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"

export const metadata: Metadata = {
    title: "Our Reviews | T-REX Pressure Washing and Mobile Detailing | Top Rated Mobile Detailing in Florence, AL",
    description: ""
}

export default function ReviewPage(){
    return(
        <>
            <PageTitle pageTitle="Reviews"/>
            <Reviews />
        </>
    )
}