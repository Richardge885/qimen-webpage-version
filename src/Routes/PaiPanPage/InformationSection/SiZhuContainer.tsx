interface Props {
    nianZhu: string;
    yueZhu: string;
    riZhu: string;
    shiZhu: string;
}
const index = ({ nianZhu, yueZhu, riZhu, shiZhu }: Props) => {
    return (
        <div className='flex flex-row'>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center rounded-bl-[10px] rounded-tl-[10px] border-[2px] border-r-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    年
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    {nianZhu.charAt(0)}
                    <br />
                    {nianZhu.charAt(1)}
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center border-[2px] border-r-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    月
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    {yueZhu.charAt(0)}
                    <br />
                    {yueZhu.charAt(1)}
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center border-[2px] border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    日
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    {riZhu.charAt(0)}
                    <br />
                    {riZhu.charAt(1)}
                </div>
            </div>
            <div className='flex h-[30vw] w-[10vw] flex-col items-center rounded-br-[10px] rounded-tr-[10px] border-[2px] border-l-0 border-[#886A36]'>
                <div className='w-[10vw] text-center text-[6vw] text-text'>
                    时
                </div>
                <div className='h-[20vw] w-[10vw] border-t-[2px] border-[#886A36] text-center text-[6vw] text-text'>
                    {shiZhu.charAt(0)}
                    <br />
                    {shiZhu.charAt(1)}
                </div>
            </div>
        </div>
    );
};

export default index;
