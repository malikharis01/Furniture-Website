import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SupportSection from '@/components/SupportSection'
import InspirationSection from '@/components/InspirationSection'
import BeautifySection from '@/components/BeautifySection'
import RangeSection from '@/components/RangeSection'
import MailingSection from '@/components/MailingSection'
import Footer from '@/components/Footer'
 
export default function Home() {
  return (
    <main className=''>

      <Header></Header>

      <HeroSection></HeroSection>

      <SupportSection></SupportSection>

      <InspirationSection></InspirationSection>

      <BeautifySection></BeautifySection>

      <RangeSection></RangeSection>

      <MailingSection></MailingSection>

      <Footer></Footer>

    </main>
  )
}
