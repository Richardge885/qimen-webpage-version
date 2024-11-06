import { GoHome } from 'react-icons/go';
import { CgHashtag } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface Props {
    activePage: string;
    setActivePage: (page: string) => void;
    disableHuanJu: () => void;
}

const NavigationBar = ({ activePage, setActivePage, disableHuanJu }: Props) => {
    return (
        <div className='fixed bottom-0 w-full flex justify-center bg-red'>
            <div className='flex items-center justify-between py-3 text-2xl m:text-3xl sm:text-5xl w-60 m:w-72 sm:w-[32rem]'>
                <Link
                    to={'/'}
                    onClick={() => {
                        setActivePage('home');
                        disableHuanJu();
                    }}
                >
                    <GoHome
                        className={
                            activePage === 'home'
                                ? 'rounded-full border-[2px] border-solid border-bglight text-bglight'
                                : 'text-bglight'
                        }
                    />
                </Link>
                <Link
                    to={'/paipan'}
                    onClick={() => {
                        setActivePage('paipan');
                        disableHuanJu();
                    }}
                >
                    <CgHashtag
                        className={
                            activePage === 'paipan'
                                ? 'rounded-full border-[2px] border-solid border-bglight text-bglight'
                                : 'text-bglight'
                        }
                    />
                </Link>
                <Link
                    to={'/settings'}
                    onClick={() => {
                        setActivePage('settings');
                        disableHuanJu();
                    }}
                >
                    <IoSettingsOutline
                        className={
                            activePage === 'settings'
                                ? 'rounded-full border-[2px] border-solid border-bglight text-bglight'
                                : 'text-bglight'
                        }
                    />
                </Link>
            </div>
        </div>
    );
};

export default NavigationBar;
