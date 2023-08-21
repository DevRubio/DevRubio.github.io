import Card from "../../Components/Card";
import LineGradient from "../../Components/LineGradient";
const Projects = () => {
    const proyect = [
        {
            Animate: "animate-fade-left",
            Title: "Closing Template",
            Description:"Advanced AI application to enhance incident management messages. Real-time suggestions improve clarity, professionalism, and adherence to internal standards. Customizable and adaptable, it ensures efficient, consistent, and clear communication for effective incident resolution.",
            Deploy: "https://closing-template.vercel.app/",
            Repo: "",  
        },{
            Animate:"animate-fade-left animate-delay-500",
            Title:"Chat Bot Ai",
            Description: "The Chat Bot AI utilizes natural language processing to engage in meaningful conversations. With its advanced algorithms, it can understand and respond to user inputs, making interactions more seamless and efficient.",
            Deploy: "",
            Repo: "https://github.com/DevRubio/chat-bot-ai.git"
        },{
            Animate:"animate-fade-left animate-delay-1000",
            Title:"Google Translate Clone",
            Description: "The Google Translate Clone employs OpenAI's API to replicate language translation functionalities. This integration enables users to input text in one language and receive accurate translations, showcasing the potential of AI-powered language tools.",
            Deploy: "",
            Repo: "https://github.com/DevRubio/google-translate-clone.git"
        },{
            Animate:"animate-fade-left animate-delay-[1500ms]",
            Title:"App ToDos",
            Description: "The App-ToDos simplifies task management. With its user-friendly interface and intuitive features, it empowers users to efficiently organize their tasks, and track progress, ultimately enhancing productivity and time management.",
            Deploy: "https://devrubio.github.io/App-ToDos/",
            Repo: "https://github.com/DevRubio/App-ToDos.git"
        }
    ]
  return (
    <section className="pt-40 pb-20">
        {/*Heading */}
        <div className="md:w-2/4 mx-auto text-center animate-fade-down mb-10">            
            <div>
                <p className="font-playfair font-semibold text-2xl mb-5">
                    PROJECTS
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3"/>
                </div>                
            </div>
        </div>
        {/*Projects */}
        <div className="flex justify-center">
            <div className="sm:grid sm:grid-cols-3 gap-4">                
                {proyect.map(item =>(
                    <Card
                        key={item.Title}
                        Animate={item.Animate}
                        Title={item.Title}
                        Description={item.Description}
                        Deploy={item.Deploy}
                        Repo={item.Repo}
                    />
                ))}
            {/* <Card
                Animate="animate-fade-left"
                Title = "Closing Template"
                Description = ""
                Repo
                Deploy
            /> 
                <Card
                Animate="animate-fade-left animate-delay-500"
                Title = "Closing Template"
                Description = ""
                Repo
                Deploy
            />  
            <Card
                Animate="animate-fade-left animate-delay-1000"
                Title = "Closing Template"
                Description = ""
                Repo
                Deploy
            /> */}    
            </div>
            
        </div>
                              
              
    </section>
  );
};
export { Projects };
