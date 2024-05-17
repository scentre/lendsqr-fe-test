import { ReactNode, useContext } from "react";
import Modal from "react-modal";
import { DashboardContext } from "./DashboardContext";
import { IoMdClose } from "react-icons/io";
import NavIconsContainer from "./NavIconsContainer";

import { FaBriefcase } from "react-icons/fa";

import { AiOutlineAudit } from "react-icons/ai";

import { CiLogout, CiUser } from "react-icons/ci";

import { BsWindowSplit } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";

import { IoMdPeople } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import { RiShakeHandsFill } from "react-icons/ri";
import {
  FaPiggyBank,
  FaHandHoldingUsd,
  FaDatabase,
  FaFan,
} from "react-icons/fa";

import { MdOutlinePersonAddAlt1 } from "react-icons/md";

import { BsPersonLock } from "react-icons/bs";

import { MdOutlineCleanHands } from "react-icons/md";
import { FiSave } from "react-icons/fi";

import { LuFileCode2 } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { LuScroll } from "react-icons/lu";

import { TbCirclePercentage } from "react-icons/tb";

const customerProps = [
  { iconName: "Users", icon: <CiUser />, link: "/dashboard" },
  {
    iconName: "Guarantors",
    icon: <IoMdPeople />,
    link: "/dashboard/guarantors",
  },
  { iconName: "Loans", icon: <TbMoneybag />, link: "/dashboard/loans" },
  {
    iconName: "Decision Models",
    icon: <RiShakeHandsFill />,
    link: "/dashboard/decision-models",
  },
  { iconName: "Savings", icon: <FaPiggyBank />, link: "/dashboard/savings" },
  {
    iconName: "Loan Requests",
    icon: <FaHandHoldingUsd />,
    link: "/dashboard/loan-request",
  },
  {
    iconName: "Whitelist",
    icon: <MdOutlinePersonAddAlt1 />,
    link: "/dashboard/whitelist",
  },
  { iconName: "Karma", icon: <BsPersonLock />, link: "/dashboard/karma" },
];

const businessProps = [
  {
    iconName: "Organization",
    icon: <FaBriefcase />,
    link: "/dashboard/organization",
  },
  {
    iconName: "Loan Products",
    icon: <MdOutlineCleanHands />,
    link: "/dashboard/loans-products",
  },
  {
    iconName: "Savings Products",
    icon: <FiSave />,
    link: "/dashboard/savings-products",
  },
  {
    iconName: "Fees and Charges",
    icon: <FaDatabase />,
    link: "/dashboard/fees-and-charges",
  },
  {
    iconName: "Transactions",
    icon: <LuFileCode2 />,
    link: "/dashboard/transactions",
  },
  { iconName: "Services", icon: <FaFan />, link: "/dashboard/services" },
  {
    iconName: "Services Account",
    icon: <GrUserSettings />,
    link: "/dashboard/services-account",
  },
  {
    iconName: "Settlements",
    icon: <LuScroll />,
    link: "/dashboard/settlement",
  },
  { iconName: "Reports", icon: <FaChartLine />, link: "/dashboard/reports" },
];

const settingsProps = [
  {
    iconName: "Preferences",
    icon: <BsWindowSplit />,
    link: "/dashboard/preferences",
  },
  {
    iconName: "Fees and Pricing",
    icon: <TbCirclePercentage />,
    link: "/dashboard/fees-and-pricing",
  },
  {
    iconName: "Audit Logs",
    icon: <AiOutlineAudit />,
    link: "/dashboard/audit-logs",
  },
];

const logoutProps = [{ iconName: "Logout", icon: <CiLogout />, link: "/" }];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    innerWidth: "100vw",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

export function Modals({ children }: { children: ReactNode }) {
  const { modalIsOpen, setIsOpen } = useContext(DashboardContext);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <button onClick={closeModal}>
              {" "}
              <IoMdClose />{" "}
            </button>

            <div className="sidebar-items">
              <NavIconsContainer title="CUSTOMERS" icons={customerProps} />
              <NavIconsContainer title="BUSINESSES" icons={businessProps} />

              <NavIconsContainer title="SETTINGS" icons={settingsProps} />
              <NavIconsContainer title="" icons={logoutProps} />
            </div>
          </div>
        </Modal>
      </div>

      {children}
    </>
  );
}
