import JobPage from "../components/JobPage";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  // const response = await fetch(`https://63643eb07b209ece0f4374a5.mockapi.io/jobs`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const job = data.find((item) => item.id === id);

  return {
    props: { job },
  };
};

const Job = ({ job }) => (
  <>
    <JobPage job={job} />
  </>
);

export default Job;
