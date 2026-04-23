// ================== 多语言字典 ==================
const translations = {
    'zh-CN': {
        nav_home: '首页',
        nav_products: '产品',
        nav_features: '特性',
        nav_download: '下载',
        hero_tools: '工具套件',
        hero_subtitle: '轻量 · 高效 · 完全自定义',
        hero_desc: '从强大的命令行终端到复古风格的文件管理器，Alre 为你打造统一的 Windows 效率工具链。',
        hero_explore: '探索产品',
        hero_download: '免费下载',
        products_title: '核心产品',
        products_subtitle: '专为开发者与效率控精心打造',
        alret_tagline: 'AlreTerminal Special Edition',
        alret_desc: '强大的自定义命令行终端，支持导航、文件操作、应用启动、中英双语、隐藏彩蛋…… 一个真正能用的 Windows CMD 替代品。',
        alret_feat1: '📁 智能导航与文件管理 (lead / enter / show)',
        alret_feat2: '🌐 中英双语即时切换，配置自动记忆',
        alret_feat3: '🎮 彩蛋指令 (Taskkill AlreTml) 模拟蓝屏',
        alret_feat4: '🔗 联动启动 AlreDoc 文件管理器',
        alret_feat5: '🎨 彩色提示符与 ASCII 艺术横幅',
        alredoc_tagline: 'Win95 风格文件管理器',
        alredoc_desc: '复古与现代结合的文件资源管理器。双栏浏览、前进后退、右键菜单、文件搜索，带你重温经典的同时提供高效操作。',
        alredoc_feat1: '🪟 经典 Win95 灰色主题 + 立体按钮',
        alredoc_feat2: '⬅️➡️ 前进/后退历史导航',
        alredoc_feat3: '🔍 实时文件搜索与过滤',
        alredoc_feat4: '📋 完整的复制/粘贴/删除/重命名',
        alredoc_feat5: '🗂️ 地址栏直达 + 驱动器快速切换',
        features_title: '为什么选择 Alre？',
        features_subtitle: '不仅仅是工具，更是一种高效的工作哲学',
        feat1_title: '极速响应',
        feat1_desc: '纯 Python 构建，本地运行，无网络延迟。',
        feat2_title: '深度自定义',
        feat2_desc: '从配色到提示符，一切由你掌控。',
        feat3_title: '生态联动',
        feat3_desc: '终端与文件管理器无缝协作，一键互调。',
        feat4_title: '安全透明',
        feat4_desc: '数据 100% 存储于本地，无任何上传。',
        download_title: '立即获取',
        download_subtitle: '免费下载，解压即用。支持 Windows 10 / 11。',
        alret_dl_desc: 'AlreTerminal Special Edition',
        alredoc_dl_desc: 'Win95 风格文件管理器',
        installer_note: '约 8 MB · 一键安装',
        download_hint: '⚡ 若 Windows 提示“已保护你的电脑”或“阻止了无法识别的应用”，请放心：<br><strong>1. 本文件为 .zip 压缩包，解压后即可正常使用，无安全风险。</strong><br><strong>2. 或点击 SmartScreen 弹窗中的“更多信息”，选择“仍要运行”。</strong><br><span style="color: #00c6ff;">本软件 100% 安全，仅因未购买微软数字签名被误报。</span><br>❤️ 感谢您使用与信任我们！',
        download_thanks: '',
        footer_rights: '保留所有权利。',
        footer_tagline: '用 Python 构建 · 为效率而生'
    },
    'en': {
        nav_home: 'Home',
        nav_products: 'Products',
        nav_features: 'Features',
        nav_download: 'Download',
        hero_tools: 'Tool Suite',
        hero_subtitle: 'Lightweight · Efficient · Fully Customizable',
        hero_desc: 'From a powerful command-line terminal to a retro-style file manager, Alre builds a unified Windows efficiency toolchain for you.',
        hero_explore: 'Explore Products',
        hero_download: 'Download for Free',
        products_title: 'Core Products',
        products_subtitle: 'Carefully crafted for developers and efficiency enthusiasts',
        alret_tagline: 'AlreTerminal Special Edition',
        alret_desc: 'A powerful custom command-line terminal with navigation, file operations, app launching, bilingual support, hidden Easter eggs... A truly usable Windows CMD replacement.',
        alret_feat1: '📁 Smart navigation & file management (lead / enter / show)',
        alret_feat2: '🌐 Instant bilingual switching, config auto-save',
        alret_feat3: '🎮 Easter egg command (Taskkill AlreTml) simulates BSOD',
        alret_feat4: '🔗 Link to launch AlreDoc file manager',
        alret_feat5: '🎨 Colorful prompts & ASCII art banner',
        alredoc_tagline: 'Win95 Style File Manager',
        alredoc_desc: 'A retro-modern file explorer with dual-pane browsing, forward/back navigation, context menus, file search—bringing back classic efficiency.',
        alredoc_feat1: '🪟 Classic Win95 gray theme + 3D buttons',
        alredoc_feat2: '⬅️➡️ Forward/backward history navigation',
        alredoc_feat3: '🔍 Real-time file search & filtering',
        alredoc_feat4: '📋 Full copy/paste/delete/rename support',
        alredoc_feat5: '🗂️ Address bar navigation + drive quick switch',
        features_title: 'Why Alre?',
        features_subtitle: 'More than tools—a philosophy of efficiency',
        feat1_title: 'Blazing Fast',
        feat1_desc: 'Built in pure Python, runs locally, zero network latency.',
        feat2_title: 'Deep Customization',
        feat2_desc: 'From color schemes to prompts, you are in full control.',
        feat3_title: 'Ecosystem Integration',
        feat3_desc: 'Terminal and file manager work seamlessly together.',
        feat4_title: 'Secure & Transparent',
        feat4_desc: '100% local data storage, no uploads.',
        download_title: 'Get It Now',
        download_subtitle: 'Free download, unzip and run. Supports Windows 10 / 11.',
        alret_dl_desc: 'AlreTerminal Special Edition',
        alredoc_dl_desc: 'Win95 Style File Manager',
        installer_note: '~8 MB · One-click install',
        download_hint: '⚡ If Windows says "protected your PC" or "unrecognized app", rest assured:<br><strong>1. This .zip file is safe; just extract and run, no security risk.</strong><br><strong>2. Or click "More info" in the SmartScreen popup, then "Run anyway".</strong><br><span style="color: #00c6ff;">This software is 100% safe, flagged only due to lacking a Microsoft digital signature.</span><br>❤️ Thank you for your trust!',
        download_thanks: '',
        footer_rights: 'All rights reserved.',
        footer_tagline: 'Built with Python · Made for Efficiency'
    },
    'zh-TW': {
        nav_home: '首頁',
        nav_products: '產品',
        nav_features: '特性',
        nav_download: '下載',
        hero_tools: '工具套件',
        hero_subtitle: '輕量 · 高效 · 完全自訂',
        hero_desc: '從強大的命令列終端到復古風格的檔案總管，Alre 為你打造統一的 Windows 效率工具鏈。',
        hero_explore: '探索產品',
        hero_download: '免費下載',
        products_title: '核心產品',
        products_subtitle: '專為開發者與效率控精心打造',
        alret_tagline: 'AlreTerminal 特別版',
        alret_desc: '強大的自訂命令列終端，支援導覽、檔案操作、應用程式啟動、雙語切換、隱藏彩蛋…… 一個真正能用的 Windows CMD 替代品。',
        alret_feat1: '📁 智慧導覽與檔案管理 (lead / enter / show)',
        alret_feat2: '🌐 中英雙語即時切換，設定自動記憶',
        alret_feat3: '🎮 彩蛋指令 (Taskkill AlreTml) 模擬藍屏',
        alret_feat4: '🔗 連動啟動 AlreDoc 檔案總管',
        alret_feat5: '🎨 彩色提示符與 ASCII 藝術橫幅',
        alredoc_tagline: 'Win95 風格檔案總管',
        alredoc_desc: '復古與現代結合的檔案總管。雙欄瀏覽、前進後退、右鍵選單、檔案搜尋，帶你重溫經典的同時提供高效操作。',
        alredoc_feat1: '🪟 經典 Win95 灰色主題 + 立體按鈕',
        alredoc_feat2: '⬅️➡️ 前進/後退歷史導覽',
        alredoc_feat3: '🔍 即時檔案搜尋與過濾',
        alredoc_feat4: '📋 完整的複製/貼上/刪除/重新命名',
        alredoc_feat5: '🗂️ 網址列直達 + 磁碟機快速切換',
        features_title: '為什麼選擇 Alre？',
        features_subtitle: '不僅是工具，更是一種高效的工作哲學',
        feat1_title: '極速回應',
        feat1_desc: '純 Python 建構，本機執行，無網路延遲。',
        feat2_title: '深度自訂',
        feat2_desc: '從配色到提示符，一切由你掌控。',
        feat3_title: '生態連動',
        feat3_desc: '終端與檔案總管無縫協作，一鍵互調。',
        feat4_title: '安全透明',
        feat4_desc: '資料 100% 儲存於本機，無任何上傳。',
        download_title: '立即取得',
        download_subtitle: '免費下載，解壓即用。支援 Windows 10 / 11。',
        alret_dl_desc: 'AlreTerminal 特別版',
        alredoc_dl_desc: 'Win95 風格檔案總管',
        installer_note: '約 8 MB · 一鍵安裝',
        download_hint: '⚡ 若 Windows 提示「已保護您的電腦」或「無法辨識的應用程式」，請放心：<br><strong>1. 本 .zip 壓縮檔安全無虞，解壓縮後即可正常使用。</strong><br><strong>2. 或點選 SmartScreen 彈窗中的「更多資訊」，選擇「仍要執行」。</strong><br><span style="color: #00c6ff;">本軟體 100% 安全，僅因未購買微軟數位簽章而被誤報。</span><br>❤️ 感謝您使用與信任我們！',
        download_thanks: '',
        footer_rights: '保留所有權利。',
        footer_tagline: '用 Python 建構 · 為效率而生'
    }
};

// 当前语言
let currentLang = 'zh-CN';

// 切换语言函数
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新所有带 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // 更新页面语言属性
    document.documentElement.lang = lang;
    
    // 更新按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 保存用户语言偏好到 localStorage
    localStorage.setItem('alre_lang', lang);
}

// 初始化语言切换按钮
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // 从 localStorage 读取保存的语言偏好
    const savedLang = localStorage.getItem('alre_lang');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        // 默认简体中文
        switchLanguage('zh-CN');
    }
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(8, 8, 12, 0.9)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }
    });
}

// 启动所有初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initSmoothScroll();
    initNavbarScroll();
});
