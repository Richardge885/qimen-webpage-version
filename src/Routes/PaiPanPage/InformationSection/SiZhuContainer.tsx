interface Props {
    nianZhu: string;
    yueZhu: string;
    riZhu: string;
    shiZhu: string;
}
const index = ({ nianZhu, yueZhu, riZhu, shiZhu }: Props) => {
    const wuXingColor: boolean = JSON.parse(
        localStorage.getItem('qimenSettings')!,
    ).wuXingColor;
    const nianGanColor = getColor(nianZhu.charAt(0));
    const nianZhiColor = getColor(nianZhu.charAt(1));
    const yueGanColor = getColor(yueZhu.charAt(0));
    const yueZhiColor = getColor(yueZhu.charAt(1));
    const riGanColor = getColor(riZhu.charAt(0));
    const riZhiColor = getColor(riZhu.charAt(1));
    const shiGanColor = getColor(shiZhu.charAt(0));
    const shiZhiColor = getColor(shiZhu.charAt(1));
    return (
        <div className='flex flex-row'>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center rounded-bl-[10px] rounded-tl-[10px] border-[2px] border-r-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    年
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    <span className={wuXingColor ? nianGanColor : 'text-text'}>
                        {nianZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? nianZhiColor : 'text-text'}>
                        {nianZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center border-[2px] border-r-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    月
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    <span className={wuXingColor ? yueGanColor : 'text-text'}>
                        {yueZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? yueZhiColor : 'text-text'}>
                        {yueZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center border-[2px] border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    日
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    <span className={wuXingColor ? riGanColor : 'text-text'}>
                        {riZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? riZhiColor : 'text-text'}>
                        {riZhu.charAt(1)}
                    </span>
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center rounded-br-[10px] rounded-tr-[10px] border-[2px] border-l-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    时
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    <span className={wuXingColor ? shiGanColor : 'text-text'}>
                        {shiZhu.charAt(0)}
                    </span>
                    <br />
                    <span className={wuXingColor ? shiZhiColor : 'text-text'}>
                        {shiZhu.charAt(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

const getColor = (symbol: string) => {
    if (symbol == '甲' || symbol == '乙' || symbol == '寅' || symbol == '卯') {
        return 'text-mu';
    } else if (
        symbol == '丙' ||
        symbol == '丁' ||
        symbol == '巳' ||
        symbol == '午'
    ) {
        return 'text-huo';
    } else if (
        symbol == '壬' ||
        symbol == '癸' ||
        symbol == '亥' ||
        symbol == '子'
    ) {
        return 'text-shui';
    } else if (
        symbol == '庚' ||
        symbol == '辛' ||
        symbol == '申' ||
        symbol == '酉'
    ) {
        return 'text-jin';
    } else {
        return 'text-tu';
    }
};

export default index;
