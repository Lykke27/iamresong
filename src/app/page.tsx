import Image from 'next/image';
import resongPic from '../../public/assets/resong.jpeg';
import TelegramLogo from '../../public/assets/tg-icon.png';
import LinkedInLogo from '../../public/assets/ln-icon.png';
import GitHubLogo from '../../public/assets/github-icon.png';
import TableauLogo from '../../public/assets/tb-icon.png';
import TelIcon from '../../public/assets/tel-icon.png';
import MailIcon from '../../public/assets/mail-icon.png';
import SocialBadge from '@/components/SocialBadge';

export default function Home() {
    return (
        <main className="container max-w-screen-lg mx-auto flex flex-col items-center p-5 sm:p-15 sm:mt-10 font-sans">
            <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-none shadow-md  rounded-lg ">
                <Image
                    src={resongPic}
                    className="rounded-t-lg sm:rounded-s-lg sm:rounded-e-none flex-none sm:w-64 sm:h-64 relative aspect-square md:mb-0"
                    alt="Picture of the author"
                />
                <div className="flex flex-col justify-between p-4 border rounded-b-lg rounded-t-none sm:rounded-s-none sm:h-64 sm:rounded-e-lg bg-slate-50">
                    <div className="flex-column w-full">
                        <h1 className="text-lg font-semibold text-slate-900">Hello, I am Kseniia</h1>
                        <div className="text-sm font-medium text-slate-500 mt-1">Data Analyst SQL/Python</div>
                        <div className="text-sm italic font-medium text-slate-500 mt-1">
                            I love my cat called Korzhik and to work hard
                        </div>
                    </div>
                    <div className="flex-column w-full mt-3">
                        <div className="text-md font-medium text-slate-900">My Contacts</div>
                        <div className="flex-column">
                            <div className="flex flex-row items-center mt-1">
                                <Image src={TelIcon} className="w-5 h-5 fill-current mr-1" alt="Phone icon" />
                                <a
                                    href="tel:+381629378979"
                                    className="text-sm font-medium text-slate-500 hover:text-slate-600 transition ease-in-out duration-300"
                                >
                                    +381629378979
                                </a>
                            </div>
                            <div className="flex flex-row items-center mt-1">
                                <Image src={MailIcon} className="w-5 h-5 fill-current mr-1" alt="Email" />
                                <a
                                    href="mailto:resong@icloud.com"
                                    className="text-sm font-medium text-slate-500 hover:text-slate-600 transition ease-in-out duration-300"
                                >
                                    resong@icloud.com
                                </a>
                            </div>
                        </div>
                        <div className="flex space-x-2 mt-2 flex-wrap">
                            <SocialBadge
                                social="telegram"
                                asset={TelegramLogo}
                                description="@resong"
                                link="https://t.me/resong"
                            />
                            <SocialBadge
                                social="linkedin"
                                asset={LinkedInLogo}
                                description="Kseniia Zaitseva"
                                link="https://www.linkedin.com/in/ksenia-zaytseva/"
                            />
                            <SocialBadge
                                social="github"
                                asset={GitHubLogo}
                                description="iamresong"
                                link={'https://github.com/iamresong'}
                            />
                            <SocialBadge
                                social="tableau"
                                asset={TableauLogo}
                                description="resong"
                                link="https://public.tableau.com/app/profile/resong"
                            />
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
