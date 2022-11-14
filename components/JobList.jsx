import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import City from "./City";
import { Bookmark } from "../public/assets/BookmarkIcon";
import { StarIcon } from "../public/assets/StarIcon";
import { PostTime } from "./PostTime";
import { GeolocationIcon } from "../public/assets/Geolocation Icon";

const JobBar = ({ job }) => {
  const { title, pictures, name, id, salary, location } = job;

  const salaryHigh = "96";
  const salaryMid = "86";

  const rating = salary.split("-").map((str) => str.slice(0, 2));

  const ratingArr = [];

  rating[1] >= salaryHigh
    ? (ratingArr.length = 5)
    : rating[1] < salaryHigh && rating[1] > salaryMid
    ? (ratingArr.length = 4)
    : (ratingArr.length = 3);

  ratingArr.fill(<StarIcon />);

  return (
    <li className="flex flex-row items-center justify-between py-6 px-4 gap-8 w-5/5 rounded-lg bg-white my-2 mx-auto w-1400 shadow flex-grow-0 xs:w-[396px] xs:mx-[9px] xs:p-[16px] xs:flex-col-reverse xs:gap-4">
      <div className="flex flex-row items-start p-0 gap-[26px] xs:gap-5">
        <div className="rounded-full relative overflow-hidden">
          <Image
            className="joblist__img xs:w-[66px] xs:h-[66px]"
            // src={`${pictures.pop()}?${new Date().getTime()}`}
            src={`https://picsum.photos/200/300?random=${id}`}
            width={85}
            height={85}
            alt="Company"
          ></Image>
        </div>
        <div className="flex flex-col items-start p-0 gap-2 h-29 opacity-0.8 w-959 xs:w-[278px] xs:h-auto xs:gap-[6px]">
          <Link href={`/${id}`}>
            <h2 className="text-[#3A4562] text-lg font-bold w-[712px] xs:w-[278px] xs:font-medium xs:text-baseL xs:tracking-tighter">
              {title}
            </h2>
          </Link>
          <h3 className="text-[#878D9D] text-base font-normal">Department name &#x2022; {name}</h3>
          <div className="h-[25px] flex flex-row gap-2">
            <GeolocationIcon />
            <City lat={location.lat} long={location.long} />
          </div>
        </div>
      </div>
      <div className="flex flex-row xs:w-full xs:justify-between xs:pl-[86px]">
        <div className="rating xs:h-auto flex justify-start items-center mr-[32px] w-[80px]">
          <div className="relative flex flex-row items-center ">
            {ratingArr?.length &&
              ratingArr.map((rating, i) => {
                return rating;
              })}
          </div>
        </div>
        <div className="flex flex-col items-end p-0 gap-4 w-138 h-29 xs:h-auto">
          <div className="bookmark w-8 h-8 rounded-lg relative xs:hidden">
            <div className="absolute inset-0">
              <div className="bookmark-icon">
                <Bookmark />
              </div>
              <div className="absolute inset-0"></div>
            </div>
          </div>

          <p className="h-[67px] font-normal text-base flex items-end text-right tracking-wide text-[#878D9D] justify-end xs:h-auto">
            <PostTime job={job} />
          </p>
        </div>
      </div>
    </li>
  );
};

const JobList = ({ jobs }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const itemsPerPage = 15;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <main>
        <ul className="pt-7 xs:pt-0">
          {currentItems?.length &&
            currentItems.map((job) => {
              return <JobBar key={job.id} job={job} />;
            })}
        </ul>
      </main>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        breakLinkClassName="button__break"
        previousLinkClassName="button__arrow--prev"
        nextLinkClassName="button__arrow--next"
        activeLinkClassName="active"
      />
    </>
  );
};
export default JobList;
