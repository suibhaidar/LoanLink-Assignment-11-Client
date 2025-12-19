import { FaUserCog } from 'react-icons/fa'
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import MenuItem from './MenuItem'
import { TbDatabaseDollar } from 'react-icons/tb';

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={LiaFileInvoiceDollarSolid} label='Loan Applications' address='loan-applications' />
      <MenuItem icon={TbDatabaseDollar} label='All Loans' address='all-loan' />
    </>
  )
}

export default AdminMenu
