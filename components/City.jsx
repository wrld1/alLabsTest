import { useEffect, useState } from "react";

const City = (props) => {
  const lat = props.lat;
  const long = props.long;

  const [res, setRes] = useState([]);

  const GetRes = async (lat, long) => {
    const latitude = Number(lat);
    const longitude = Number(long);

    const geocodingApi = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&type=city&lang=en&limit=1&format=json&apiKey=93e4bb9dc008464eaeb0eccb249f9e25
                `;
    // const geocodingApi = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDcXMmXYyr_kUhF_AWnkMfy9jAQTTHOodM&latlng=${latitude},${longitude}&sensor=false
    // `;

    const resGeocode = await fetch(geocodingApi);
    const resDataGeogocode = await resGeocode.json();

    resDataGeogocode.results.length > 0
      ? setRes(resDataGeogocode.results[0]?.city)
      : setRes("Kyiv, Ukraine");
  };

  useEffect(() => {
    GetRes(lat, long);
  }, []);

  return (
    <p className="font-normal text-base tracking-wide text-[#878D9D]">
      {typeof res === "undefined" ? "Kyiv, Ukraine" : res}
    </p>
  );
};

export default City;
