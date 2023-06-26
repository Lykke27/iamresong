import { socialToColor } from '@/utils/functions';
import Image from 'next/image';

interface propsType {
    asset: any;
    description: string;
    social: 'telegram' | 'tableau' | 'github' | 'linkedin';
    link: string;
}

const SocialBadge = (props: propsType) => {
    return (
        <a
            className={`bg-${props.social} last:mr-0 px-4 py-2 font-semibold text-white inline-flex items-center rounded cursor-pointer`}
            href={props.link}
            target="_blank"
        >
            <Image src={props.asset} className="w-5 h-5 fill-current" loading="lazy" alt={props.social} />
            <span className="ml-2">{props.description}</span>
        </a>
    );
};

export default SocialBadge;
