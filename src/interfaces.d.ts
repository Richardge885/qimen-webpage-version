export interface PanJuInformation {
    allTimeInformation: FullTimeInformation;
    zhiFu: string;
    zhiShi: string;
    xunShou: string;
    huanJu: JiuGongXinXi;
    panJuResult: JiuGongXinXi;
}

export interface FullTimeInformation {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
    nianzhu: string;
    yuezhu: string;
    rizhu: string;
    shizhu: string;
    jieqi: string;
    dun: string;
    jushu: string;
}

export interface JiuGongXinXi {
    kanGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    kunGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    zhenGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    xunGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    zhongGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    qianGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    duiGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    genGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
    liGong: {
        cangTianPanJia: boolean;
        cangDiPanJia: boolean;
        tianPanGanZhangSheng: string;
        diPanGanZhangSheng: string;
        baGua: string;
        gongWangShuai: string;
        maXing: boolean;
        gongKong: boolean;
        tianPanYiKong: boolean;
        diPanYiKong: boolean;
        tianPanShen: string;
        diPanShen: string;
        xing: string;
        men: string;
        tianPanGan: string;
        diPanGan: string;
        anGan: string;
        anZhi: string;
        zhengGe: string[];
        fuGe: {
            ganGong: string;
            menGong: string;
            xingGong: string;
        };
        symboleInfo: {
            xing: string;
            men: string;
            shen: string;
            tianPanGan: string;
            diPanGan: string;
            gong: string;
        };
        shenSha: string[];
    };
}

export interface TianPanInformation {
    tianPanShen: string;
    xing: string;
    tianPanGan: string;
    tianPanYiKong: boolean;
}
