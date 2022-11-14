import Link from "next/link";
import { Bookmark } from "../public/assets/BookmarkIcon";
import { GeolocationIcon } from "../public/assets/Geolocation Icon";
import { PostTime } from "./PostTime";
import { ShareIcon } from "../public/assets/ShareIcon";
import { Description } from "./Description";

const JobPage = ({ job }) => {
  // const { title, description } = job || {};

  const {
    title,
    salary,
    description,
    employment_type,
    benefits,
    pictures,
    name,
    address,
    email,
    phone,
    location,
  } = job;

  const jobSalary = salary.replaceAll("k", " 000").replace("-", "—");

  let latitude = Number(location.lat);
  let longitude = Number(location.long);

  if (!job) {
    return (
      <>
        <h2>No job is found</h2>
      </>
    );
  }

  const Picture = ({ picture, id }) => {
    return (
      <div
        className="w-[200px] h-[115px] bg-[#D8D8D8] rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${picture}?random=${id}?${new Date().getTime()})` }}
      ></div>
    );
  };

  return (
    <div className="absolute h-[1700px] pb-[137px] top-[56px] w-full xs:absolute xs:left-0 xs:top-0 xs:h-auto xs:w-[414px] xs:pb-[37px]">
      <div className="ml-[9px] h-auto overflow-y-hidden xs:h-auto xs:ml-0 ">
        <main className="job-page__main-block w-[774px] h-auto pl-[19px] xs:w-[384px] xs:ml-[15px] xs:mt-[24px] xs:pl-0">
          <header className="h-11 flex flex-row justify-between mb-[49px] border-b-[1px] border-[#3a45621f] xs:flex-col xs:gap-[28px] xs:mb-[12px] xs:w-auto">
            <h1 className="text-[#3A4562] font-bold text-xlL">Job Details</h1>
            <div className="flex flex-row items-center p-0 gap-6 h-8">
              <div className="flex flex-row items-center p-0 gap-2 w-[149px] h-8 xs:gap-[12px]">
                <div className="w-8 h-8 rounded-lg relative">
                  <div className="flex items-center">
                    <Bookmark />
                  </div>
                </div>
                <div className="w-[109px] h-6 ">
                  <h4 className="font-normal text-baseL tracking-tighter text-[#3A4562] roboto xs:text-smL">
                    Save to my list
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 gap-2  w-[84px] h-8 xs:gap-[12px]">
                <div className="w-8 h-8 rounded-lg relative flex flex-row flex-start gap-[10px]">
                  <div className="flex items-center">
                    <ShareIcon />
                  </div>
                </div>
                <div className="w-[44px] h-6 ">
                  <h4 className="font-normal text-baseL tracking-tighter text-[#3A4562] roboto xs:text-smL">
                    Share
                  </h4>
                </div>
              </div>
            </div>
          </header>
          <button className="button--apply flex flex-row items-start py-[18px] px-[30px] gap-[10px] bg-[#384564] rounded-lg xs:hidden">
            <p className="w-[67px] h-4 font-semibold text-xs text-center uppercase text-white">
              Apply now
            </p>
          </button>
          <div className="mt-[32px] xs:mt-[79px]">
            <div className="flex justify-between ">
              <div>
                <div className="job-page__name h-30 w-[501px] xs:w-[363px] xs:mb-[10px]">
                  <h2 className="font-bold text-lgL tracking-tight text-[#3A4562]">{title}</h2>
                </div>
                <p className="w-[179px] h-[25px] roboto font-light text-baseL flex items-end tracking-normal text-[#38415D] opacity-40  mt-[7px] xs:text-sm proxima xs:inline-flex ">
                  <PostTime job={job} />
                </p>
              </div>
              <div className="xs:-ml-[130px] xs:static xs:inline-flex xs:flex-col-reverse xs:w-[165px] xs:mt-[5px]">
                <div className="w-[161px] h-[25px]">
                  <h3 className="font-bold text-lg tracking-tight text-[#3A4562]">€{jobSalary}</h3>
                </div>
                <div className="h-6">
                  <p className="font-normal text-baseL tracking-tighter text-[#3A4562]">
                    Brutto, per year
                  </p>
                </div>
              </div>
            </div>
            <div className="roboto font-normal text-baseL tracking-tight text-[#3A4562] mt-[7px] description proxima">
              <Description description={description} />
            </div>
          </div>
          <button className="button--apply flex flex-row items-start py-[18px] px-[30px] gap-[10px] bg-[#384564] rounded-lg mt-[30px] xs:mt-[25px] xs:mx-auto">
            <p className="w-[67px] h-4 font-semibold text-xs text-center uppercase text-white">
              Apply now
            </p>
          </button>
          <div className="xs:flex xs:flex-col-reverse">
            <div className="h-[249px] mt-[86px] xs:mt-[64px] xs:w-auto">
              <div className="border-b-[1px] border-[#3a45621f]">
                <h3 className="font-bold text-xlL tracking-wide text-[#3A4562] mb-[9px]">
                  Additional info
                </h3>
              </div>
              <div className="mt-[15px]">
                <div className="h-6">
                  <h4 className="roboto font-normal text-baseL tracking-tight text-[#3A4562] proxima">
                    Employment type
                  </h4>
                </div>
                <div className="gap-2 flex flex-row mt-[10px]">
                  {employment_type?.length &&
                    employment_type.map((type, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-center items-center w-[222px] h-[49px] employment-type__background xs:w-[122px]"
                        >
                          <p className="h-4 font-bold text-xsL text-center tracking-tight text-[#55699E]">
                            {type}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="mt-[23px]">
                <div className="h-6">
                  <h4 className="roboto font-normal text-baseL tracking-tight text-[#3A4562] proxima">
                    Benefits
                  </h4>
                </div>
                <div className="gap-2 flex flex-row mt-[10px]">
                  {benefits?.length &&
                    benefits.map((benefit, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-center items-center w-[220px] h-[50px] benefits__background xs:w-auto xs:py-4 xs:px-2"
                        >
                          <p className="h-4 font-bold text-xsL text-center tracking-tight text-[#988B49]">
                            {benefit}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="mt-[87px] xs:overflow-auto xs:mt-[135px]">
              <h3 className="font-bold text-xlL tracking-wide text-[#3A4562] border-b-[1px] border-[#3a45621f] pb-[9px]">
                Attached images
              </h3>
              <div className="xs:flex xs:overflow-auto">
                <div className="gap-[10px] flex flex-row mt-[22px] xs:gap-[10px] xs:flex xs:flex-row xs:mt-[22px]">
                  {pictures?.length &&
                    pictures.map((picture, i) => {
                      return <Picture picture={picture} id={i} key={i} />;
                    })}
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <button className="w-[213px] h-[50px] bg-[#38456425] rounded-lg flex mt-[98px] py-4 pl-[23px] pr-[26px] items-center justify-center -ml-[93px] xs:hidden">
              <i className="button__arrow--left z-10"></i>
              <p className="h-4 font-semibold text-xs text-center uppercase text-[#3A4562] z-10 ml-[17px]">
                Return to job board
              </p>
            </button>
          </Link>
        </main>
        <aside className="xs:w-[383px] xs:h-[502px] xs:ml-[15px] mt-[63px]">
          <h3 className="hidden xs:block font-bold text-xlL tracking-wide text-[#3A4562] mb-8 pb-[10px] border-b-[1px] border-[#3a45621f]">
            Contacts
          </h3>
          <div className="contacts__card absolute w-[402px] h-[420px] left-[1184px] top-0 rounded-lg overflow-hidden xs:static xs:w-[372px]">
            <div className="absolute w-[402px] h-[420px] left-0 top-0 bg-[#2A3047] flex flex-col justify-between xs:static xs:w-[372px] ">
              <div>
                <div className="flex mb-2 xs:mb-4">
                  <h2 className="ml-[62px] mt-[31px] font-bold text-lg tracking-tight text-[#E7EAF0] z-10 xs:text-smL">
                    Department name <br />
                    {name}
                  </h2>
                </div>
                <div className="flex flex-row justify-start gap-2 mb-2 ">
                  <div className="opacity-50 z-10 mt-[3px] ml-[62px]">
                    <GeolocationIcon />
                  </div>
                  <p className="h-6 roboto font-normal text-baseL tracking-tight text-[#E8EBF3] z-10 xs:text-smL proxima">
                    {address}
                  </p>
                </div>
                <div className="flex">
                  <p className="ml-[62px] roboto font-normal text-baseL tracking-tight text-[#E8EBF3] z-10 proxima xs:text-smL">
                    {phone} <br />
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mb-0 rounded-b-lg z-10">
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=5&scale=2&size=402x218&maptype=roadmap&markers=color:blue%7Clabel:%7C${latitude},${longitude}&key=AIzaSyDcXMmXYyr_kUhF_AWnkMfy9jAQTTHOodM&map_id=9fe85451278a70a1`}
                    alt="We on the map"
                  />
                </div>
                <div className="absolute w-[273px] h-[273px] -left-[70px] -top-[10px] right-[80%] rounded-full bg-[#202336] z-0 xs:hidden">
                  {/* <div className="absolute h-[273px] w-[273px] left-0 right-[43.01%]  rounded-full bg-[#202336]"></div> */}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobPage;
