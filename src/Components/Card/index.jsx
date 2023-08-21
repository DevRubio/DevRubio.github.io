import { IconDemo, IconGithub } from "../../assets/icons";

const Card = ({ Animate, Title, Description, Repo, Deploy }) => {
  return (
    <div
      className={`max-w-sm p-6 bg-gray-700 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 ${Animate}`}
    >
      <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white dark:text-white">
        {Title}
      </h5>

      <p className="mb-3 font-normal text-justify text-white dark:text-gray-400 text-sm sm:h-[140px]">
        {Description}
      </p>
      
      <div className="flex justify-between">
        {Deploy ? (
          <a
            href={Deploy}
            className="w-32 h-10 inline-flex justify-around items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 hover:animate-wiggle"
            target="_blank"
          >
            Demo
            <IconDemo />
          </a>
        ) : (
          ""
        )}

        {Repo ? (
          <a
            href={Repo}
            className="w-32  h-10 inline-flex justify-around items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 hover:animate-wiggle"
            target="_blank"
          >
            Repo
            <IconGithub size="20px" />
          </a>
        ) : (
          ""
        )}        
      </div>
    </div>
  );
};

export default Card;
