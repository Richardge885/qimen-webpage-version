interface Props {
    modalState: boolean;
    handleCloseModal: () => void;
}
const OverLay = ({ modalState, handleCloseModal }: Props) => {
    return (
        <div
            className={
                modalState
                    ? 'absolute z-50 h-screen w-screen bg-black opacity-40'
                    : 'absolute opacity-0 transition-all duration-1000'
            }
            onClick={handleCloseModal}
        ></div>
    );
};

export default OverLay;
