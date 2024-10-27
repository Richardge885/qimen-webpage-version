interface Props {
    style: string;
}
const HomePageChooseMethodButton = ({ style }: Props) => {
    return (
        <button className={style}>制筹</button>
    );
};

export default HomePageChooseMethodButton;