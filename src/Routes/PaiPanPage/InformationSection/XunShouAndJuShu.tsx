interface Props {
    xunShou: string;
    dun: string;
    juShu: string;
}

const XunShouAndJuShu = ({ xunShou, dun, juShu }: Props) => {
    return (
        <div className='flex flex-row justify-between gap-4 text-[5vw]'>
            <div>
                {dun}
                {juShu}局
            </div>
            <div>旬首:{xunShou}</div>
        </div>
    );
};

export default XunShouAndJuShu;
