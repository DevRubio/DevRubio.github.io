import useMediaQuery from '../../hooks/useMediaQuery'
import SocialMediaIcons from '../../Components/SocialMediaIcons'

const Home = () =>{
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")
    return(
        <section className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>            
            {/*Imagen Section */}
            <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
                {isAboveLarge ? (
                <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-1 before:rounded-t-[400px]
                before:w-full before:max-w-[700px] md:before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>                    
                    <img 
                        alt='photo'
                        className='hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]' 
                        src='/src/assets/img/Profile.png'/>
                </div>
                ):(
                <img
                    alt='photo'
                    className='z-10 w-full max-w-[400px] md:max-w-[600px]'
                    src='/src/assets/img/Profile.png'
                />
                )}
            </div> 
            {/*Main Text */}
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                {/*Heading */}
                <div>                    
                    <p className='text-5xl font-playfair z-10 text-center md:text-start'>
                        Oscar {""}
                        <span
                        className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                        before:absolute before:-left-[25px] before:-top-[86px] before:z-[-1]'
                        >
                        Rubio
                        </span>
                    </p>
                    <p className='mt-10 mb-4 text-sm text-center md:text-start'>
                        I am a software engineer passionate about developing innovative and effective solutions using emerging technologies. 
                        I specialize in JavaScript and its associated libraries. I have a keen interest in artificial intelligence and its potential to 
                        transform the world we live in. I enjoy experimenting with new tools and technologies to find creative ways to apply artificial 
                        intelligence to various problems.
                    </p>
                </div>
                {/*Call to Actions */}
                <div className='flex mt-5 justify-center md:justify-start'>
                    <span className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500'>
                        Contact Me
                    </span>  
                    <a 
                        className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                        href="https://web.whatsapp.com/send/?phone=5733104845200&text=Let's+Talk&type=phone_number&app_absent=0"
                        target='_blank'
                    >
                        <p className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
                            Let's Talk
                        </p>
                    </a>                  
                </div>
                {/*Icons */}
                <div className='flex mt-5 justify-center md:justify-start'>
                    <SocialMediaIcons/>
                </div>
            </div>
        </section>
    )
}
export {Home}