interface Props {
    style: string;
}
const HomePageCurrentTimeButton = ({ style }: Props) => {
    return (
        <button className={style}>
            正时
        </button>
    );
};

export default HomePageCurrentTimeButton;