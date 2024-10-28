import HomePageChooseMethodButton from "./HomePageChooseMethodButton";
import HomePageCurrentTimeButton from "./HomePageCurrentTimeButton";

const HomePage = () => {
    const buttonStyle = "w-[60vw] h-[3rem] bg-red text-bglight text-[2.8rem] hover:bg-bgdark hover:text-red rounded-[20px] duration-200 py-10 flex flex-col justify-center items-center";
    const inputLabel = "text-[2rem] text-text font-bold px-[1rem]";
    const numberInputStyle = " h-[4vh] text-[1.5rem] bg-bgdark rounded-[0.48rem] text-center";

    const currentTimeValuesInNumbers = getCurrentTimeInNumbers();

    return (
        <div className="flex flex-col bg-bglight h-screen justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[60vh] gap-[1rem]">
                <h1 className="font-lishu text-red text-[10rem]">鸣法</h1>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row flex-nowrap whitespace-nowrap w-[90vw] justify-center items-center">
                        <label className={inputLabel} htmlFor="year">
                            年
                            <input type="number" name="year" id="" className={numberInputStyle + ' w-[22vw]'} min={1} max={9999} value={currentTimeValuesInNumbers.year} />
                        </label>
                        <label className={inputLabel} htmlFor="month">
                            月
                            <input type="number" name="month" id="" className={numberInputStyle + ' w-[15vw]'} min={1} max={12} value={currentTimeValuesInNumbers.month} />
                        </label>
                        <label className={inputLabel}>
                            日
                            <input type="number" name="day" id="" className={numberInputStyle + ' w-[15vw]'} min={1} max={31} value={currentTimeValuesInNumbers.day} />
                        </label>
                    </div>
                    <div className="flex flex-row flex-nowrap whitespace-nowrap w-[90vw] justify-center items-center">
                        <label className={inputLabel}>
                            时
                            <input type="number" name="hour" id="" className={numberInputStyle + ' w-[15vw]'} min={0} max={24} value={currentTimeValuesInNumbers.hour} />
                        </label>
                        <label className={inputLabel}>
                            分
                            <input type="number" name="minute" id="" className={numberInputStyle + ' w-[15vw]'} min={0} max={60} value={currentTimeValuesInNumbers.minutes} />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-[40vh] gap-10">
                <HomePageCurrentTimeButton style={buttonStyle} />
                <HomePageChooseMethodButton style={buttonStyle} />
            </div>
        </div>
    );
};

function getCurrentTimeInNumbers(): { year: number; month: number; day: number; hour: number; minutes: number; } {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1, // Months are zero-based, so we add 1
        day: now.getDate(),
        hour: now.getHours(),
        minutes: now.getMinutes(),
    };
}

export default HomePage;