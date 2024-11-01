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
        <div className='absolute bottom-0 flex h-[4rem] w-screen flex-row items-center justify-around bg-red sm:rounded-tl-[20px] sm:rounded-tr-[20px]'>
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
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
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
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
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
                            ? 'rounded-full border-[2px] border-solid border-bglight text-[2rem] text-bglight'
                            : 'text-[2rem] text-bglight'
                    }
                />
            </Link>
        </div>
    );
};

export default NavigationBar;
