// 画像データの配列（実際の画像ファイル名から年代を抽出）
const artworkData = [
    // 2025年の作品
    { filename: "HamCup#001_20250114083532.png", year: 2025, title: "HamCup #001" },
    { filename: "HamCup#003@_20250114083416.png", year: 2025, title: "HamCup #003" },
    { filename: "HamCup#005@_20250114083327.png", year: 2025, title: "HamCup #005" },
    { filename: "HamCup#006@_20250114083308.png", year: 2025, title: "HamCup #006" },
    { filename: "HamCup#009@_20250114083219.png", year: 2025, title: "HamCup #009" },
    { filename: "HamCup#010@_20250114083207.png", year: 2025, title: "HamCup #010" },
    { filename: "HamCup#011@_20250114083155.png", year: 2025, title: "HamCup #011" },
    { filename: "HamCup#012_20250114083140.png", year: 2025, title: "HamCup #012" },
    { filename: "HamCup#018擬人化_20250114094114.png", year: 2025, title: "HamCup #018 擬人化" },
    { filename: "HamCup#019 擬人化_20250114184225.png", year: 2025, title: "HamCup #019 擬人化" },
    { filename: "HamCup#020 擬人化_20250116070112.png", year: 2025, title: "HamCup #020 擬人化" },
    { filename: "HamCup#021 擬人化_20250118201922.png", year: 2025, title: "HamCup #021 擬人化" },
    { filename: "HamCup#022 擬人化_20250121074659.png", year: 2025, title: "HamCup #022 擬人化" },
    { filename: "HamCup#023 擬人化_20250123073949.png", year: 2025, title: "HamCup #023 擬人化" },
    { filename: "HamCup#024 擬人化_20250124085154.png", year: 2025, title: "HamCup #024 擬人化" },
    { filename: "HamCup#025 擬人化_20250628073025.jpg", year: 2025, title: "HamCup #025 擬人化" },
    { filename: "HamCup#026 擬人化_20250127081113.png", year: 2025, title: "HamCup #026 擬人化" },
    { filename: "HamCup#028 擬人化_20250129114519.png", year: 2025, title: "HamCup #028 擬人化" },
    { filename: "HamCup#17 擬人化_20250114082928.png", year: 2025, title: "HamCup #17 擬人化" },
    { filename: "HamCup擬人化全員集合_20250628065929.jpg", year: 2025, title: "HamCup 擬人化全員集合" },
    { filename: "オズ&ほんてぃ 握手_20250621101920.png", year: 2025, title: "オズ&ほんてぃ 握手" },
    { filename: "無題602_20250621090909.png", year: 2025, title: "無題602" },
    { filename: "無題603_20250621101541.png", year: 2025, title: "無題603" },
    { filename: "無題603.2025.06.21-10.06_20250621102733.png", year: 2025, title: "無題603.2" },
    { filename: "HamCup通信No.900号_20250624215413.png", year: 2025, title: "HamCup通信No.900号" },
    { filename: "無題492_20250628065915.jpg", year: 2025, title: "無題492" },
    { filename: "latest_all_members_20250628064732.jpg", year: 2025, title: "最新全員集合" },
    { filename: "ako_san_20250114083254.png", year: 2025, title: "あこさん" },
    { filename: "black_ma_20250403081926.png", year: 2025, title: "ブラックま" },
    { filename: "fukumen_taro_20240211_2109_20250628063624.jpg", year: 2025, title: "覆面太郎" },
    { filename: "untitled_314_20250513224122.png", year: 2025, title: "無題314" },
    { filename: "untitled_495_20250115230213.png", year: 2025, title: "無題495" },
    { filename: "無題508_20250628065952.jpg", year: 2025, title: "無題508" },
    { filename: "untitled_524_20250315084250.png", year: 2025, title: "無題524" },
    { filename: "untitled_536_20250401064942.png", year: 2025, title: "無題536" },

    // 2024年の作品
    { filename: "Bariさん_20240314155820.png", year: 2024, title: "Bariさん" },
    { filename: "Mioさん 幼稚園ver._20240925132340.png", year: 2024, title: "Mioさん 幼稚園ver." },
    { filename: "maoさん_20240305161058.png", year: 2024, title: "maoさん" },
    { filename: "oipyさん 幼稚園ver._20240310065616.png", year: 2024, title: "oipyさん 幼稚園ver." },
    { filename: "ozu_san_red_white_cap_ultraman_ver_20250408184013.png", year: 2024, title: "オズさん ウルトラマンver." },
    { filename: "peccoさん_20240219125742.png", year: 2024, title: "peccoさん" },
    { filename: "shunさん1_20240301060855.png", year: 2024, title: "shunさん1" },
    { filename: "あづささん_20240220054223.png", year: 2024, title: "あづささん" },
    { filename: "うみねこさん_20240324215925.png", year: 2024, title: "うみねこさん" },
    { filename: "えーいちさん_20240317053657.png", year: 2024, title: "えーいちさん" },
    { filename: "かえでせん_20240305050036.png", year: 2024, title: "かえでせん" },
    { filename: "かじゅさん01_20240220165319.png", year: 2024, title: "かじゅさん01" },
    { filename: "かなたさん_20240224220056.png", year: 2024, title: "かなたさん" },
    { filename: "さくらさん_20240318050453.png", year: 2024, title: "さくらさん" },
    { filename: "つっきーさん幼稚園_20240123230019.png", year: 2024, title: "つっきーさん幼稚園" },
    { filename: "はっぱさん_20240319051826.PNG", year: 2024, title: "はっぱさん" },
    { filename: "はんじょもさん_20240214192644.png", year: 2024, title: "はんじょもさん" },
    { filename: "ぱんさん1_20240312161146.png", year: 2024, title: "ぱんさん1" },
    { filename: "ひぐまさん_20240214192807.png", year: 2024, title: "ひぐまさん" },
    { filename: "ぴーすけさん_20240312044320.png", year: 2024, title: "ぴーすけさん" },
    { filename: "ほしこさん.2024.02.12-06.14_20240213055112.jpeg", year: 2024, title: "ほしこさん" },
    { filename: "ほとりさん_20240324064944.png", year: 2024, title: "ほとりさん" },
    { filename: "ほんてぃさん_修復済み2_20240304075613.png", year: 2024, title: "ほんてぃさん（修復済み2）" },
    { filename: "ぽんたさん_20240220050341.png", year: 2024, title: "ぽんたさん" },
    { filename: "まつるさん_20240326072214.png", year: 2024, title: "まつるさん" },
    { filename: "みずとさん_20240320081135.png", year: 2024, title: "みずとさん" },
    { filename: "みっちーさん_20240327072243.png", year: 2024, title: "みっちーさん" },
    { filename: "やすさん_20240321231821.png", year: 2024, title: "やすさん" },
    { filename: "わたちゃんさん_20240327191418.png", year: 2024, title: "わたちゃんさん" },
    { filename: "アイス君_20240218074007.png", year: 2024, title: "アイス君" },
    { filename: "アユフマさん 幼稚園ver._20240925131959.png", year: 2024, title: "アユフマさん 幼稚園ver." },
    { filename: "オズさん_20240910193353.png", year: 2024, title: "オズさん" },
    { filename: "オンタムさん_20240228215026.png", year: 2024, title: "オンタムさん" },
    { filename: "ジュニアさん_20240225221717.png", year: 2024, title: "ジュニアさん" },
    { filename: "タタさん_20240321071147.png", year: 2024, title: "タタさん" },
    { filename: "ターちゃん_20240227190921.png", year: 2024, title: "ターちゃん" },
    { filename: "トミーさん_20240211220456.png", year: 2024, title: "トミーさん" },
    { filename: "フクロウちゃん_20240314060804.png", year: 2024, title: "フクロウちゃん" },
    { filename: "ユックさん1_20240323073648.png", year: 2024, title: "ユックさん1" },
    { filename: "ヨメタムさん_20240307180754.png", year: 2024, title: "ヨメタムさん" },
    { filename: "丸ちゃん_20240306100352.png", year: 2024, title: "丸ちゃん" },
    { filename: "弱虫モン_20240304061156.png", year: 2024, title: "弱虫モン" },
    { filename: "晴れ子さん3_20240214195238.png", year: 2024, title: "晴れ子さん3" },

    // 2023年の作品（一部のみ、全リストは長すぎるため）
    { filename: "HamCup#003_20230306132632.PNG", year: 2023, title: "HamCup #003" },
    { filename: "HamCup#008.2023.03.15-09.16_20230322065747.PNG", year: 2023, title: "HamCup #008" },
    { filename: "HamCup#009_20230408162548.PNG", year: 2023, title: "HamCup #009" },
    { filename: "HamCup#012_20231025202402.PNG", year: 2023, title: "HamCup #012" },
    { filename: "HamCup#013@_20231028153224.PNG", year: 2023, title: "HamCup #013" },
    { filename: "Hamcup#005_20230309045627.PNG", year: 2023, title: "Hamcup #005" },
    { filename: "HamuCup#005_20230308051142.PNG", year: 2023, title: "HamuCup #005" },
    { filename: "無題100_20230515045149.PNG", year: 2023, title: "無題100" },
    { filename: "無題101.2023.05.29-23.07_20231113233445.png", year: 2023, title: "無題101" },
    { filename: "無題102_20230516062434.PNG", year: 2023, title: "無題102" },
    { filename: "無題103_20230516232300.PNG", year: 2023, title: "無題103" },
    { filename: "無題104_20230518070240.PNG", year: 2023, title: "無題104" },
    { filename: "無題113_20230602070214.PNG", year: 2023, title: "無題113" },
    { filename: "無題114_20230603082239.PNG", year: 2023, title: "無題114" },
    { filename: "無題116_20230604155354.jpg", year: 2023, title: "無題116" },
    { filename: "無題118_20231030052807.PNG", year: 2023, title: "無題118" },
    { filename: "無題119_20231103060834.png", year: 2023, title: "無題119" },
    { filename: "無題122_20230116212829.PNG", year: 2023, title: "無題122" },
    { filename: "無題135_20231030055422.PNG", year: 2023, title: "無題135" },
    { filename: "無題137_20230611150700.PNG", year: 2023, title: "無題137" },
    { filename: "無題138_20231101055948.PNG", year: 2023, title: "無題138" },
    { filename: "無題154_20231109061348.png", year: 2023, title: "無題154" },
    { filename: "無題167_20230227073744.PNG", year: 2023, title: "無題167" },
    { filename: "無題16_20230304140738.PNG", year: 2023, title: "無題16" },
    { filename: "無題177_20230306073025.PNG", year: 2023, title: "無題177" },
    { filename: "無題210_20230406084553.PNG", year: 2023, title: "無題210" },
    { filename: "無題215_20230601072732.PNG", year: 2023, title: "無題215" },
    { filename: "無題222_20231002061117.PNG", year: 2023, title: "無題222" },
    { filename: "無題23_20230302140306.PNG", year: 2023, title: "無題23" },
    { filename: "無題47_20230317154402.PNG", year: 2023, title: "無題47" },
    { filename: "無題50_20230319042419.PNG", year: 2023, title: "無題50" },
    { filename: "無題51_20230324153515.PNG", year: 2023, title: "無題51" },
    { filename: "無題54_20230322145330.PNG", year: 2023, title: "無題54" },
    { filename: "無題57_20230327075734.PNG", year: 2023, title: "無題57" },
    { filename: "無題59_20230401152544.PNG", year: 2023, title: "無題59" },
    { filename: "無題60_20230328070241.PNG", year: 2023, title: "無題60" },
    { filename: "無題61_20230328172306.PNG", year: 2023, title: "無題61" },
    { filename: "無題62_20230403050808.PNG", year: 2023, title: "無題62" },
    { filename: "無題64_20230410152406.PNG", year: 2023, title: "無題64" },
    { filename: "無題65_20230411172132.PNG", year: 2023, title: "無題65" },
    { filename: "無題68_20230512020516.PNG", year: 2023, title: "無題68" },
    { filename: "無題70_20230417160843.PNG", year: 2023, title: "無題70" },
    { filename: "無題71_20230419024552.PNG", year: 2023, title: "無題71" },
    { filename: "無題72_20230420071348.PNG", year: 2023, title: "無題72" },
    { filename: "無題79_20230430133952.PNG", year: 2023, title: "無題79" },
    { filename: "無題7_20230228234227.PNG", year: 2023, title: "無題7" },
    { filename: "無題81_20230501081842.PNG", year: 2023, title: "無題81" },
    { filename: "無題82_20230504072738.PNG", year: 2023, title: "無題82" },
    { filename: "無題85_20230509093450.PNG", year: 2023, title: "無題85" },
    { filename: "無題89_20230511210034.PNG", year: 2023, title: "無題89" },
    { filename: "無題90_20230514073831.jpg", year: 2023, title: "無題90" },
    { filename: "無題92_20230514155749.jpg", year: 2023, title: "無題92" }
];

// グローバル変数
let currentFilter = 'all';
let currentImageIndex = 0;
let filteredImages = [];

// DOM要素
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const loading = document.getElementById('loading');

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupEventListeners();
    setupScrollAnimation();
    setupMobileMenu();
});

// ギャラリー初期化
function initializeGallery() {
    filterArtworks('all');
}

// 作品フィルタリング
function filterArtworks(year) {
    showLoading();
    currentFilter = year;
    
    // フィルターボタンのアクティブ状態更新
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.year === year) {
            btn.classList.add('active');
        }
    });
    
    // 画像フィルタリング
    if (year === 'all') {
        filteredImages = artworkData;
    } else {
        filteredImages = artworkData.filter(artwork => artwork.year.toString() === year);
    }
    
    // 遅延処理でローディング効果を演出
    setTimeout(() => {
        renderGallery();
        hideLoading();
    }, 500);
}

// ギャラリー描画
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((artwork, index) => {
        const galleryItem = createGalleryItem(artwork, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // 遅延読み込みの設定
    setupLazyLoading();
}

// ギャラリーアイテム作成
function createGalleryItem(artwork, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item animate-on-scroll';
    item.dataset.index = index;
    
    const imagePath = `画像/${artwork.filename}`;
    
    item.innerHTML = `
        <img src="${imagePath}" alt="${artwork.title}" loading="lazy" onerror="this.src='画像/placeholder.jpg'">
        <div class="gallery-item-overlay">
            <h3 class="gallery-item-title">${artwork.title}</h3>
            <p class="gallery-item-year">${artwork.year}年</p>
        </div>
    `;
    
    // クリックイベント
    item.addEventListener('click', () => openModal(index));
    
    return item;
}

// モーダル開く
function openModal(index) {
    currentImageIndex = index;
    const artwork = filteredImages[index];
    const imagePath = `画像/${artwork.filename}`;
    
    modalImage.src = imagePath;
    modalTitle.textContent = artwork.title;
    modalYear.textContent = `${artwork.year}年`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // キーボードイベント追加
    document.addEventListener('keydown', handleKeydown);
}

// モーダル閉じる
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeydown);
}

// 前の画像
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateModalImage();
}

// 次の画像
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateModalImage();
}

// モーダル画像更新
function updateModalImage() {
    const artwork = filteredImages[currentImageIndex];
    const imagePath = `画像/${artwork.filename}`;
    
    modalImage.src = imagePath;
    modalTitle.textContent = artwork.title;
    modalYear.textContent = `${artwork.year}年`;
}

// キーボードイベントハンドラ
function handleKeydown(e) {
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
    }
}

// ローディング表示/非表示
function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}

// イベントリスナー設定
function setupEventListeners() {
    // フィルターボタン
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const year = btn.dataset.year;
            filterArtworks(year);
        });
    });
    
    // モーダル関連
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // モーダルの背景クリックで閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // スムーススクロール
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

// 遅延読み込み設定
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// スクロールアニメーション
function setupScrollAnimation() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animateElements.forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        // IntersectionObserverをサポートしていない場合
        animateElements.forEach(element => {
            element.classList.add('animated');
        });
    }
}

// モバイルメニュー
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // ナビゲーションリンククリック時にメニューを閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

// リサイズイベント
window.addEventListener('resize', () => {
    // モーダルが開いている場合の位置調整
    if (modal.style.display === 'block') {
        // 必要に応じてモーダルの位置を調整
    }
});

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.error('画像の読み込みエラー:', e);
    // エラー時のフォールバック処理
});

// パフォーマンス最適化：画像プリロード（オプション）
function preloadImages(imageArray) {
    imageArray.forEach(artwork => {
        const img = new Image();
        img.src = `画像/${artwork.filename}`;
    });
}

// 検索機能（将来的な拡張用）
function searchArtworks(query) {
    const searchResults = artworkData.filter(artwork => 
        artwork.title.toLowerCase().includes(query.toLowerCase()) ||
        artwork.year.toString().includes(query)
    );
    
    filteredImages = searchResults;
    renderGallery();
}

// ソート機能（将来的な拡張用）
function sortArtworks(sortBy) {
    switch(sortBy) {
        case 'date-desc':
            filteredImages.sort((a, b) => b.year - a.year);
            break;
        case 'date-asc':
            filteredImages.sort((a, b) => a.year - b.year);
            break;
        case 'title':
            filteredImages.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    renderGallery();
}