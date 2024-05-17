import { BiStar } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Tabs from "./Tabs";
import { PersonalDetails } from "./Tab";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
const UserDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const user = data.find((each) => each.id == id);

  const tabs = [
    { title: "General Details", content: <PersonalDetails user={user} /> },
    { title: "Documents", content: <p>Documents</p> },
    { title: "Bank Details", content: <p>Bank Details</p> },
    { title: "Loans", content: <p>Loans</p> },
    { title: "Savings", content: <p>Savings</p> },
    { title: "App and System", content: <p>App and System</p> },
  ];
  return (
    <div className="user-details">
      <span className="user-details__navigation" onClick={() => navigate(-1)}>
        <IoArrowBack size={"23"} /> <span> Back To Users </span>
      </span>

      <div className="user-info">
        <div className="user-info__top">
          <p className="user-info__label">User Details</p>

          <div className="user-info__buttons">
            <button className="user-info__blacklist-button">
              Blacklist User
            </button>

            <button className="user-info__activate-button">
              Activate User
            </button>
          </div>
        </div>
        <div className="user-info__container">
          <div className="user-info__container__main">
            <div className="user-info__container__profile-box">
              <div className="user-info__container__logo">
                <CiUser size={"40px"} />
              </div>
              <div className="user-info__container__details">
                <p className="user-name">{user?.username}</p>
                <p className="user-id">LSQFf587g90</p>
              </div>
            </div>
            <div className="user-info__container__tier">
              <p className="user-info__container__tier__heading">User’s Tier</p>
              <div className="user-info__container__tier__stars">
                <BiStar />
                <BiStar />
                <BiStar />
              </div>
            </div>

            <div className="user-info__container__bank-details">
              <p className="user-info__container__bank-details__amount">
                {user?.balance}
              </p>
              <p className="user-info__container__bank-details__bank-info">
                9912345678/Providus Bank
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Tabs>{tabs}</Tabs>
        </div>
      </div>

      {/* start */}
    </div>
  );
};

export default UserDetails;
