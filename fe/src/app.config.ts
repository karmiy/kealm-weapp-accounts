export default defineAppConfig({
    pages: ['pages/detail/index', 'pages/account/index', 'pages/mine/index'],
    tabBar: {
        list: [
            {
                iconPath: 'images/detail-inactive.png',
                selectedIconPath: 'images/detail-active.png',
                pagePath: 'pages/detail/index',
                text: '明细',
            },
            {
                iconPath: 'images/account-inactive.png',
                selectedIconPath: 'images/account-active.png',
                pagePath: 'pages/account/index',
                text: '记账',
            },
            {
                iconPath: 'images/mine-inactive.png',
                selectedIconPath: 'images/mine-active.png',
                pagePath: 'pages/mine/index',
                text: '我的',
            },
        ],
        color: '#3232332',
        selectedColor: '#fe8ebd',
        backgroundColor: '#fff',
        borderStyle: 'black',
    },
    window: {
        backgroundTextStyle: 'light',
        // backgroundColor: '#fe8ebd',
        navigationBarBackgroundColor: '#fe8ebd',
        navigationBarTitleText: '卡比记账',
        navigationBarTextStyle: 'white',
    },
    subPackages: [
        {
            root: 'pages/login/',
            pages: ['index'],
        },
        {
            root: 'pages/edit/',
            pages: ['index'],
        },
        {
            root: 'pages/chart/',
            pages: ['index'],
        },
    ],
    // entryPagePath: 'pages/chart/index',
});
