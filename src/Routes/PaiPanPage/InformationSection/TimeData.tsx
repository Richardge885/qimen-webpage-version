interface Props {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
}
const TimeData = ({ year, month, date, hour, minute }: Props) => {
    return (
        <div className='text-[5vw]'>
            {year}年{month}月{date}日{hour}时{minute}分
        </div>
    );
};

export default TimeData;
