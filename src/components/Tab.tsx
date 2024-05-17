type User =
  | {
      id: string | number;
      index: number;
      organization: string;
      username: string;
      email: string;
      phoneNo: string;
      date: string;
      status: string;
      balance: string;
      picture: string;
      age: number;
      gender: string;
      company: string;
      address: string;
      about: string;
      greeting: string;
      favoriteFruit: string;
    }
  | never
  | undefined;
export function PersonalDetails({ user }: { user: User }) {
  return (
    <>
      {/* start*/}
      <div className="personal-info">
        <p className="personal-info__heading">Personal Information</p>

        <div className="personal-info__grid">
          <div>
            <p className="personal-info__grid__heading">FULL NAME</p>
            <p className="personal-info__grid__info">{user?.username}</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">PHONE NUMBER</p>
            <p className="personal-info__grid__info">{user?.phoneNo}</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">Email Address</p>
            <p className="personal-info__grid__info">{user?.email}</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">BVN</p>
            <p className="personal-info__grid__info">07060780922</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Gender</p>
            <p className="personal-info__grid__info">Female {user?.gender}</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Marital status</p>
            <p className="personal-info__grid__info">Single</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Children</p>
            <p className="personal-info__grid__info">None</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Type of residence</p>
            <p className="personal-info__grid__info">Parent’s Apartment</p>
          </div>
        </div>
      </div>

      {/* end */}

      {/* start*/}
      <div className="personal-info">
        <p className="personal-info__heading">Education and Employment</p>

        <div className="personal-info__grid">
          <div>
            <p className="personal-info__grid__heading">level of education</p>
            <p className="personal-info__grid__info">B.Sc</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">employment status</p>
            <p className="personal-info__grid__info">Employed</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">sector of employment</p>
            <p className="personal-info__grid__info">FinTech</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">
              Duration of employment
            </p>
            <p className="personal-info__grid__info">2 years</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">office email</p>
            <p className="personal-info__grid__info">grace@lendsqr.com</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Monthly income </p>
            <p className="personal-info__grid__info">
              ₦200,000.00- ₦400,000.00
            </p>
          </div>

          <div>
            <p className="personal-info__grid__heading">loan repayment</p>
            <p className="personal-info__grid__info">40,000</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Type of residence</p>
            <p className="personal-info__grid__info">Parent’s Apartment</p>
          </div>
        </div>
      </div>

      {/* end */}

      {/* start*/}
      <div className="personal-info">
        <p className="personal-info__heading">Socials</p>

        <div className="personal-info__grid">
          <div>
            <p className="personal-info__grid__heading">Twitter</p>
            <p className="personal-info__grid__info">@grace_effiom</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">Facebook</p>
            <p className="personal-info__grid__info">Grace Effiom</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">Instagram</p>
            <p className="personal-info__grid__info">@grace_effiom</p>
          </div>
        </div>
      </div>

      {/* end */}

      {/* start*/}
      <div className="personal-info">
        <p className="personal-info__heading">Guarantor</p>

        <div className="personal-info__grid">
          <div>
            <p className="personal-info__grid__heading">full Name</p>
            <p className="personal-info__grid__info">Debby Ogana</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">Phone Number</p>
            <p className="personal-info__grid__info">07060780922</p>
          </div>
          <div>
            <p className="personal-info__grid__heading">Email Address</p>
            <p className="personal-info__grid__info">debby@gmail.com</p>
          </div>

          <div>
            <p className="personal-info__grid__heading">Relationship</p>
            <p className="personal-info__grid__info">Sister</p>
          </div>
        </div>
      </div>

      {/* end */}
    </>
  );
}
