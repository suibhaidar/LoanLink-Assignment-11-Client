
import Card from "../../components/Home/Card"
import CustomerFeedback from "../../components/Home/CustomerFeedback"
import Hero from "../../components/Home/Hero"
import HowItWorks from "../../components/Home/HowItWorks"
import Loans from "../../components/Home/Loans"
import LoanStatistics from "../../components/Home/LoanStatistics"
import WhyChooseLoanLink from "../../components/Home/WhyChooseLoanLink"
import Container from "../../components/Shared/Container"


const Home = () => {
  return (
    <div className="bg-base-300">
      <Hero/>
      
      <Container><Loans/></Container>
      <Container><WhyChooseLoanLink/></Container>
      <Container><HowItWorks/></Container>
      <Container><LoanStatistics/></Container>
      <Container><CustomerFeedback/></Container>
    </div>
  )
}

export default Home
