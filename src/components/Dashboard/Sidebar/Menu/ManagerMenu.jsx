import { MdOutlinePendingActions } from "react-icons/md";
import { FaHandHoldingDollar } from 'react-icons/fa6'
import MenuItem from './MenuItem'
import { FcApproval } from 'react-icons/fc'
import { TbSettingsDollar } from 'react-icons/tb'
const ManagerMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaHandHoldingDollar}
        label='Add Loan'
        address='add-loan'
      />
      <MenuItem icon={FcApproval} label='Approved Loan' address='approved-loans' />
      <MenuItem icon={MdOutlinePendingActions} label='Pending Loan' address='pending-loans' />
      <MenuItem
        icon={TbSettingsDollar}
        label='Manage Loans'
        address='manage-loans'
      />
    </>
  )
}

export default ManagerMenu
