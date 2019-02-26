module.exports = {
    title: 'Rem',
    description: '基于UMI-BLOCK的开箱即用',
    base: '/rem/',
    dest: 'docs',
    serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Config', link: '/config/'},
            {text: 'API', link: '/api/'},
            {text: 'Github', link: 'https://github.com/xoptimal/rem'},
        ],
        sidebar: {
            '/api/': [
                {
                    title: "Common",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '',
                        'components/TableComponent',
                        'components/ListViewComponent',
                        'forms/WebForm',
                        'forms/MobileForm',
                        'modals/CommonModal',
                        'styles/CommonStyle',
                    ]
                },
                {
                    title: "Views",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        'views/NetLayout',
                        'views/NavLayout',
                        'views/ExModal',
                        'views/ExDrawer',
                        'views/ExListView',
                        'views/DescriptionView',
                    ]
                },
                {
                    title: "Utils",
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        'utils/CommonHelper',
                        'utils/ExRouteHelper',
                        'utils/ExToastHelper',
                        'utils/InputHelper',
                        'utils/RequestHelper',
                    ]
                },
            ],
            '/config/': [''],
            '/guide/': [''],
        }
    }
};
