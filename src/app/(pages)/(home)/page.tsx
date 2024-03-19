import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews"
import Detailing from "@/app/(mainsite)/components/homepage/Detailing/Detailing"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"
import WashAndWax from "@/app/(mainsite)/components/homepage/WashAndWax/WashAndWax"
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork"
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea"
import FAQ from "@/app/(mainsite)/components/homepage/FAQ/FAQ"

export default function Home() {
  return (
    <>
      <Header />
      <InlineReviews />
      <Detailing />
      <StatsRibbon />
      <WashAndWax />
      <PastWork />
      <ServiceArea />
      <FAQ />
    </>
  )
}
