
import useMediaQuery from "../../hooks/useMediaQuery";

const Construction = ({page}) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              src="/src/assets/img/astronauta-programador.gif"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="/src/assets/img/astronauta-programador.gif"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <div        
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start flex flex-col">
            {page} {""}
            <span>
            In Construction
            </span>
                    
          </p>
        </div>      

        <div
          className="flex mt-5 justify-center md:justify-start"
          
        >
          
        </div>
      </div>
    </section>
  );
};

export default Construction
