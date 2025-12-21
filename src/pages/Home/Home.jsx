
import Card from "../../components/Home/Card"
import CustomerFeedback from "../../components/Home/CustomerFeedback"
import Hero from "../../components/Home/Hero"
import HowItWorks from "../../components/Home/HowItWorks"
import LoanStatistics from "../../components/Home/LoanStatistics"
import WhyChooseLoanLink from "../../components/Home/WhyChooseLoanLink"
import Container from "../../components/Shared/Container"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Card/>
      {/* More components */}
      <Container><WhyChooseLoanLink/></Container>
      <Container><HowItWorks/></Container>
      <Container><LoanStatistics/></Container>
      <Container><CustomerFeedback/></Container>
    </div>
  )
}

export default Home
