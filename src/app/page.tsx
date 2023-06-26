import Image from 'next/image';
import resongPic from '../../public/assets/resong.jpeg';
import TelegramLogo from '../../public/assets/tg-icon.png';
import LinkedInLogo from '../../public/assets/ln-icon.png';
import GitHubLogo from '../../public/assets/github-icon.png';
import TableauLogo from '../../public/assets/tb-icon.png';
import SocialBadge from '@/components/SocialBadge';

export default function Home() {
    return (
        <main className="container max-w-screen-lg mx-auto flex min-h-screen flex-col items-center p-24 font-sans">
            <div className="flex flex-row w-full shadow-md rounded-lg">
                <Image src={resongPic} className="rounded-s-lg flex-none w-48 relative" alt="Picture of the author" />
                <div className="flex-auto p-4 border rounded-e-lg">
                    <div className="flex-column w-full">
                        <h1 className="text-lg font-semibold text-slate-900">Hello, I am Kseniia</h1>
                        <div className="text-sm font-medium text-slate-500 mt-2">Data Analyst SQL/Python</div>
                        <div className="text-sm italic font-medium text-slate-500 mt-2">
                            I love my cat called Korzhik and to work hard
                        </div>
                    </div>
                    <div className="flex-column w-full mt-5">
                        <div className="text-md font-medium text-slate-900">My Contacts</div>
                        <div className="flex space-x-2 mt-1">
                            <SocialBadge
                                social="telegram"
                                asset={TelegramLogo}
                                description="@resong"
                                link="https://t.me/resong"
                            />
                            <SocialBadge
                                social="linkedin"
                                asset={LinkedInLogo}
                                description="Ksenia Zaytseva"
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
                    </div>
                </div>
            </div>
        </main>
    );
}
