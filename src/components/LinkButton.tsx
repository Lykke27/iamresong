interface propsType {
    link: string;
    description: string;
}

const LinkButton = (props: propsType) => {
    return (
        <a
            rel="noreferrer noopener"
            href={props.link}
            target="_blank"
            className="py-3 max-w-xs sm:max-w-md w-full justify-center mt-5 last:mr-0 font-semibold text-white inline-flex items-center rounded cursor-pointer transition ease-in-out duration-300 bg-cyan-500 hover:bg-cyan-600 shadow-md"
        >
            {props.description}
        </a>
    );
};

export default LinkButton;
