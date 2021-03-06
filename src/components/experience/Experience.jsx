import "./experience.css";

export default function Experience(props) {
  const {
    companyLogo,
    companyName,
    workLocation,
    workDuration,
    website,
    Duties,
  } = props;
  return (
    <section>
      <div className="expCompany">
        <img src={companyLogo} alt="logo" className="companyLogo" />
        <a href={website}>
          <h2 className="companyName">{companyName}</h2>
        </a>
        <h6 className="workDuration">
          {workLocation} <em>{workDuration}</em>
        </h6>
      </div>
      <div className="expResContainer">
        <h2 className="resText">Responsibilities:</h2>
        <ul className="expResponsibilities">
          {Duties.map((duty, index) => {
            return (
              <li key={index} className="">
                {duty}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
