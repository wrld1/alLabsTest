import { useEffect, useState } from "react";

export const Description = ({ description }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  let descriptionResponibilities = String(description).slice(
    0,
    description.indexOf("Responsopilities:")
  );

  let descriptionNoEnd = String(description).slice(
    description.indexOf("Responsopilities:") + "Responsopilities:".length,
    description.indexOf("Compensation & Benefits:")
  );

  let descriptionBenefits = String(description).slice(
    description.indexOf("Compensation & Benefits:")
  );

  let descriptionReplace = descriptionBenefits
    .replace("Compensation & Benefits:", "")
    .replace(/\n|\r/g, "");
  let descriptionArr = descriptionReplace.split(".");
  let descriptionEnd = (
    <div>
      <h3>Compensation & Benefits:</h3>
      <p> Our physicians enjoy a wide range of benefits, including:</p>
      <ul>
        {descriptionArr.map((item, i) => {
          if (item) {
            return <li key={i}>{item}</li>;
          }
        })}
      </ul>
    </div>
  );

  return (
    <>
      {domLoaded && (
        <div>
          {descriptionResponibilities}
          <h3>Responsopilities:</h3>
          {descriptionNoEnd}
          {descriptionEnd}
        </div>
      )}
    </>
  );
};
