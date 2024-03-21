import GalleryContent from "@/app/(mainsite)/components/gallerypage/GalleryContent/GalleryContent"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gallery Page | T-REX Pressure Washing and Mobile Detailing | Top Rated Mobile Detailing in Florence, AL",
    description: ""
}

export default function GalleryPage(){
    return(
        <>
            <PageTitle pageTitle="Gallery" />
            <GalleryContent />
        </>
    )
}