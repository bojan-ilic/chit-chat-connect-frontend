const TitleHeader = ({ title }) => {
    return (
        <div className="text-primary border-primary flex h-[90px] items-center justify-center rounded-lg border font-bold ">
            <h2 className="text-[24px] uppercase">{title}</h2>
        </div>
    );
};

export default TitleHeader;
