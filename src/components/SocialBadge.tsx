import Image, { StaticImageData } from 'next/image';

interface propsType {
    asset: StaticImageData;
    description: string;
    social: 'telegram' | 'tableau' | 'github' | 'linkedin';
    link: string;
}

const SocialBadge = (props: propsType) => {
    const colorStyle = {
        telegram: 'bg-telegram-default hover:bg-telegram-hover',
        linkedin: 'bg-linkedin-default hover:bg-linkedin-hover',
        github: 'bg-github-default hover:bg-github-hover',
        tableau: 'bg-tableau-default hover:bg-tableau-hover',
    };
    return (
        <a
            className={`px-4 py-2 last:mr-0 font-semibold text-white shadow-sm inline-flex items-center rounded ${
                colorStyle[props.social]
            } cursor-pointer transition ease-in-out duration-300`}
            href={props.link}
            target="_blank"
        >
            <Image src={props.asset} className="w-5 h-5 fill-current" loading="lazy" alt={props.social} />
            <span className="ml-2 hidden lg:block">{props.description}</span>
        </a>
    );
};

export default SocialBadge;
