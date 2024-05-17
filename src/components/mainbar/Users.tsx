import Table from "../Table";

import users from "../../assets/users.svg";
import usersLoans from "../../assets/users-loans.svg";
import activeUsers from "../../assets/active-users.svg";
import activeSavings from "../../assets/active-users.svg";
import data from "../../data.json";

const loans = data.filter((each) => each.status == "Active");
const cardDetails = [
  { icon: users, name: "users", number: data.length, color: " #DF18FF" },
  { icon: activeUsers, name: "Active Users", number: 100, color: "#5718FF" },
  {
    icon: usersLoans,
    name: "Users with Loans",
    number: loans.length,
    color: "#F55F44",
  },
  {
    icon: activeSavings,
    name: "Users with Savings",
    number: data.length - loans.length,
    color: "#FF3366",
  },
];
const Users = () => {
  return (
    <main className="users">
      <div className="users__heading">Users</div>

      <div className="users__cards">
        {cardDetails.map((each) => (
          <div className="users__cards__card" key={each.color}>
            <img src={each.icon} alt="" className="users__cards__card__img" />

            <p className="users__cards__card__text">{each.name}</p>
            <p className="users__cards__card__number"> {each.number}</p>
          </div>
        ))}
      </div>

      <div>
        <Table />
      </div>
    </main>
  );
};

export default Users;
