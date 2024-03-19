import type { Metadata } from "next"
import Reviews from "@/app/(mainsite)/components/reviewspage/Reviews/Reviews"

export const metadata: Metadata = {
    title: "Our Reviews",
    description: ""
}

export default function ReviewPage(){
    return(
        <>

            <Reviews />
        </>
    )
}