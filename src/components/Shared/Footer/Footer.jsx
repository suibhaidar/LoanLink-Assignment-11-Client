import Logo from "../Logo"

const Footer = () => {
  return (
    <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside className="">
        <Logo/>
          {/* <p className="ml-14 absolute top-9 left-1">
            Microloan Request & <br />Approval Tracker System
          </p> */}
          <p className="text-[12px] font-semibold">LoanLink is a web-based microloan request, review & <br />
           approval management system.Many small financial organizations,<br /> 
           NGOs,  and microloan providers struggle to maintain loan applications, <br />
            verification, approvals, EMI schedules, and repayments in one </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </footer>
  )
}

export default Footer
