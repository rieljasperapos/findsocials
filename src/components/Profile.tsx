import profilePic from '../assets/profilepic.png'
import instagram from '../assets/social_instagram.png'
import facebook from '../assets/social_facebook.png'
import github from '../assets/social_github.png'
import linkedin from '../assets/social_linkedin.png'
import wave from '../assets/wave 1.svg'
import './profile.css'

const Profile = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center'>
                <div className='flex-grow flex flex-col justify-center items-center mt-28 w-full'>
                    <img src={profilePic} alt="myPic" />
                    <h1 className='mt-8 font-medium text-2xl'>@rieljasper</h1>
                    <hr className='w-64 mt-8'></hr>
                    <div className='mt-6'>
                        <Socials icon={instagram} text='Instagram' link='https://www.instagram.com/rieljasper/'/>
                        <Socials icon={facebook} text='Facebook' link='https://www.facebook.com/rieljasper.apos/'/>
                        <Socials icon={github} text='Github' link='https://github.com/rieljasperapos'/>
                        <Socials icon={linkedin} text='LinkedIn' link='https://www.linkedin.com/in/riel-jasper-apos-4202a124a/'/>
                    </div>
                    <footer className='mt-auto w-full'>
                        <img src={wave}></img>
                    </footer>
                </div>
        </div>
        </>
    )
}

const Socials = ({
    icon,
    text,
    link,
} : {
    icon: string;
    text: string;
    link: string;
}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='group flex p-2 mt-24 hover:cursor-pointer hover:scale-105 hover:transition-transform duration-300 ease-in rounded-lg'>
            <img src={icon} className='transition-transform duration-300 group-hover:animate-spin w-6 h-6'></img>
            <p className='ml-4 text-sm'>{text}</p>
        </a>
    )
}

export default Profile;