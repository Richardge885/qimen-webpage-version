import HomePageChooseMethodButton from "./HomePageChooseMethodButton";
import HomePageCurrentTimeButton from "./HomePageCurrentTimeButton";

const HomePage = () => {
    const buttonStyle = "w-[60vw] h-[10vh] bg-red text-bglight text-8xl hover:bg-bgdark hover:text-red rounded-[20px] duration-200 py-10 flex flex-col justify-center items-center";
    const inputLabel = "text-[3rem] text-text font-bold px-[1rem]";
    const numberInputStyle = "w-[8rem] h-[4rem] text-[3rem] bg-bgdark rounded-[0.48rem]";

    return (
        <div className="flex flex-col bg-bglight h-screen justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[60vh] gap-[18vh]">
                <h1 className="text-red text-[10rem]">鸣法</h1>
                <div className="flex flex-col justify-center items-center gap-10">
                    <div>
                        <label className={inputLabel}>
                            年
                            <input type="number" name="year" id="" className={numberInputStyle} min={1} max={9999} />
                        </label>
                        <label className={inputLabel}>
                            月
                            <input type="number" name="month" id="" className={numberInputStyle} min={1} max={12} />
                        </label>
                        <label className={inputLabel}>
                            日
                            <input type="number" name="day" id="" className={numberInputStyle} min={1} max={31} />
                        </label>
                    </div>
                    <div>
                        <label className={inputLabel}>
                            时
                            <input type="number" name="hour" id="" className={numberInputStyle} min={0} max={24} />
                        </label>
                        <label className={inputLabel}>
                            分
                            <input type="number" name="minute" id="" className={numberInputStyle} min={0} max={60} />
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

export default HomePage;