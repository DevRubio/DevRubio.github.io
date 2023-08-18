import { IconLinkedIn, IconGithub } from "../../assets/icons"

const SocialMediaIcons = () =>{
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/ofrubio/"
                target="_blank"
                rel="noreferrer"
            >
              <IconLinkedIn/>  
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/DevRubio"
                target="_blank"
                rel="noreferrer"
            >
                <IconGithub/>
            </a>
        </div>
    )
}

export default SocialMediaIcons