import HomePage from './Routes/HomePage';
import PaiPanPage from './Routes/PaiPanPage';
import SettingsPage from './Routes/SettingsPage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import { PanJuInformation } from './interfaces';

function App() {
    const [activePageIndex, setActivePage] = useState('home');
    const [displayHuanJu, setDisplayHuanJu] = useState(false);
    const enableHuanJu = () => {
        setDisplayHuanJu(true);
    };
    const disableHuanJu = () => {
        setDisplayHuanJu(false);
    };
    const getCurrentTimeForInputTag = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [inputTime, setInputTime] = useState(getCurrentTimeForInputTag());

    const updateActivePage = (page: string) => {
        setActivePage(page);
    };

    const [panJu, setPanJu] = useState(initializePanJu());
    const updatePanJu = (panJuInfo: PanJuInformation) => {
        setPanJu(panJuInfo);
    };

    checkAndInitializeLocalStorage();

    return (
        <div className='flex flex-col items-center justify-center bg-bglight'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            updatePanJu={updatePanJu}
                            updateActivePage={updateActivePage}
                            getCurrentTimeForInputTag={
                                getCurrentTimeForInputTag
                            }
                            setInputTime={setInputTime}
                            inputTime={inputTime}
                        />
                    }
                />
                <Route
                    path='/paipan'
                    element={
                        <PaiPanPage
                            panJuInfo={panJu}
                            displayHuanJu={displayHuanJu}
                            enableHuanJu={enableHuanJu}
                            disableHuanJu={disableHuanJu}
                        />
                    }
                />
                <Route
                    path='/settings'
                    element={<SettingsPage />}
                />
            </Routes>
            <NavigationBar
                activePage={activePageIndex}
                setActivePage={updateActivePage}
                disableHuanJu={disableHuanJu}
            />
        </div>
    );
}

function initializePanJu(): PanJuInformation {
    return {
        allTimeInformation: {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            nianzhu: '',
            yuezhu: '',
            rizhu: '',
            shizhu: '',
            jieqi: '',
            dun: '',
            jushu: '',
        },
        xunShou: '',
        zhiFu: '',
        zhiShi: '',
        huanJu: {
            kanGong: {
                baGua: '坎',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
        },
        panJuResult: {
            kanGong: {
                baGua: '坎',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            kunGong: {
                baGua: '坤',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhenGong: {
                baGua: '震',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            xunGong: {
                baGua: '巽',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            zhongGong: {
                baGua: '中',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            qianGong: {
                baGua: '乾',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            duiGong: {
                baGua: '兑',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            genGong: {
                baGua: '艮',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
            liGong: {
                baGua: '离',
                gongWangShuai: '',
                maXing: false,
                gongKong: false,
                tianPanYiKong: false,
                diPanYiKong: false,
                tianPanShen: '',
                diPanShen: '',
                xing: '',
                men: '',
                tianPanGan: '',
                diPanGan: '',
                anGan: '',
                anZhi: '',
                zhengGe: [],
                tianPanGanLiuQin: '',
                diPanGanLiuQin: '',
                tianPanGanShiShen: '',
                diPanGanShiShen: '',
                fuGe: {
                    ganGong: '',
                    menGong: '',
                    xingGong: '',
                },
                symboleInfo: {
                    xing: '',
                    men: '',
                    shen: '',
                    tianPanGan: '',
                    diPanGan: '',
                    gong: '',
                },
                shenSha: [],
                cangTianPanJia: false,
                cangDiPanJia: false,
                tianPanGanZhangSheng: '',
                diPanGanZhangSheng: '',
            },
        },
    };
}

function checkAndInitializeLocalStorage() {
    if (localStorage.getItem('qimenSettings') === null) {
        localStorage.setItem(
            'qimenSettings',
            JSON.stringify({
                wuXingColor: false,
                traditionalChar: false,
                singleChar: false,
                baoShuMethod: '时辰',
                displayLiuQin: '',
            }),
        );
    }
}

export default App;
