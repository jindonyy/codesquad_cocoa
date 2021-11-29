// import { ProductInfo } from "./producr_info.js";
const $ = (selector) => document.querySelector(selector);

class productInfoManager {
    constructor() {
        this.productsInfo = new Map([
            ['burger', new Map([
                ['burger_0', new Map([
                    ['code', 'burger_0'],
                    ['prdName', '트러플 리치 포테이토 버거'],
                    ['price', 7200]
                ])],
                ['burger_1', new Map([
                    ['code', 'burger_1'],
                    ['prdName', '트러플 치즈 버거'],
                    ['price', 6300]
                ])],
                ['burger_2', new Map([
                    ['code', 'burger_2'],
                    ['prdName', '빅맥®'],
                    ['price', 5300]
                ])],
                ['burger_3', new Map([
                    ['code', 'burger_3'],
                    ['prdName', '맥스파이시® 상하이 버거'],
                    ['price', 5300]
                ])],
                ['burger_4', new Map([
                    ['code', 'burger_4'],
                    ['prdName', '1955® 버거'],
                    ['price', 6400]
                ])],
                ['burger_5', new Map([
                    ['code', 'burger_5'],
                    ['prdName', '맥치킨® 모짜렐라'],
                    ['price', 5500]
                ])],
                ['burger_6', new Map([
                    ['code', 'burger_6'],
                    ['prdName', '맥치킨®'],
                    ['price', 4000]
                ])],
                ['burger_7', new Map([
                    ['code', 'burger_7'],
                    ['prdName', '에그 불고기 버거'],
                    ['price', 3900]
                ])],
                ['burger_8', new Map([
                    ['code', 'burger_8'],
                    ['prdName', '불고기 버거'],
                    ['price', 2900]
                ])],
                ['burger_9', new Map([
                    ['code', 'burger_9'],
                    ['prdName', '슈슈버거'],
                    ['price', 5200]
                ])],
                ['burger_10', new Map([
                    ['code', 'burger_10'],
                    ['prdName', '슈비버거'],
                    ['price', 6200]
                ])],
                ['burger_11', new Map([
                    ['code', 'burger_11'],
                    ['prdName', '베이컨 토마토 디럭스'],
                    ['price', 6200]
                ])],
                ['burger_12', new Map([
                    ['code', 'burger_12'],
                    ['prdName', '쿼터파운더® 치즈'],
                    ['price', 7700]
                ])],
                ['burger_13', new Map([
                    ['code', 'burger_13'],
                    ['prdName', '치즈버거'],
                    ['price', 3000]
                ])],
                ['burger_14', new Map([
                    ['code', 'burger_14'],
                    ['prdName', '필레 오 피쉬'],
                    ['price', 4200]
                ])],
            ])],
            ['drink', new Map([
                ['cola', new Map([
                    ['code', 'cola'],
                    ['prdName', '코카-콜라'],
                    ['price', 2100],
                    ['set', true]
                ])],
                ['sprite', new Map([
                    ['code', 'sprite'],
                    ['prdName', '스프라이트'],
                    ['price', 2100],
                    ['set', true]
                ])],
                ['fanta', new Map([
                    ['code', 'fanta'],
                    ['prdName', '환타'],
                    ['price', 2100],
                    ['set', true]
                ])],
                ['strawberry', new Map([
                    ['code', 'strawberry'],
                    ['prdName', '딸기 칠러'],
                    ['price', 3400],
                    ['set', false]
                ])],
                ['plum', new Map([
                    ['code', 'plum'],
                    ['prdName', '자두 칠러'],
                    ['price', 3400],
                    ['set', false]
                ])],
            ])]
        ]);
    }
}

class productViewHandler {
    prdListTemplate(product) {
        const prdPriceStr = product.get('price').toString();
        return `<li data-prdName="${product.get('prdName')}" data-price="${prdPriceStr}" data-prdCode="${product.get('code')}">
                    <div class="img-wrap">
                        <img src="resources/images/product/${product.get('code')}_small.png" alt="">
                    </div>
                    <div class="text-wrap">
                        <div class="prd-prdName">${product.get('prdName')}</div>
                        <div class="prd-price">${prdPriceStr.slice(0, -3)},${prdPriceStr.slice(-3, -1)}원</div>
                    </div>
                </li>`;
    }
    
    addPrdList(menu) {
        let prdList = "";
    
        menu.forEach(product => {
            prdList += this.prdListTemplate(product);
        });
    
        $('.prd-list').innerHTML = prdList;
    }
}

class MenuTabEventController {
    constructor(data, view) {
        this.data = data;
        this.view = view;
    }

    initPrdList() {
        this.view.addPrdList(this.data.productsInfo.get('burger'));
    }
}


class PrdListEventController {
    constructor($) {
        
    }

    initPrdList() {

    }
}

const menuTab = new MenuTabEventController(new productInfoManager(), new productViewHandler());
menuTab.initPrdList();