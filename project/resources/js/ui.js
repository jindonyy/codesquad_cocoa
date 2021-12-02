const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const changeToNumberNotation = function(num) {
    const numArr = num.toString().split('');

    for(let i = numArr.length-3; i > 0; i -= 3) {
        numArr[i] = `,${numArr[i]}`;
    }

    return numArr.join('');
}

class productDataManager {
    constructor() {
        this.productsData = new Map([
            ['burger', new Map([
                ['burger_0', new Map([
                    ['code', 'burger_0'],
                    ['prdName', '트러플 리치 포테이토 버거'],
                    ['price', 7200],
                    ['description', `입 안을 가득 채워주는 리치 포테이토와 2장의 쇠고기 패티,
                    거기에 진한 풍미의 트러플 데미그라스 소스가 더해져
                    더 특별해진 트러플 리치 포테이토 버거`]
                ])],
                ['burger_1', new Map([
                    ['code', 'burger_1'],
                    ['prdName', '트러플 치즈 버거'],
                    ['price', 6300],
                    ['description', `부드러운 치즈와 풍부한 육즙의 패티를
                    세배 더 진하게 즐길 수 있는 트리플 치즈버거`]
                ])],
                ['burger_2', new Map([
                    ['code', 'burger_2'],
                    ['prdName', '빅맥®'],
                    ['price', 5300],
                    ['description', `100% 순 쇠고기 패티 두 장에 빅맥®만의 특별한 소스.
                    입안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지.
                    50년 넘게 전 세계인의 입맛을 사로 잡은 버거의 대명사.`]
                ])],
                ['burger_3', new Map([
                    ['code', 'burger_3'],
                    ['prdName', '맥스파이시® 상하이 버거'],
                    ['price', 5300],
                    ['description', `매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에
                    아삭아삭한 양상추와 신선한 토마토~
                    겉은 바삭, 속은 부드러운 치킨 패티의 매콤함으로
                    입맛도 기분도 화끈하게!`]
                ])],
                ['burger_4', new Map([
                    ['code', 'burger_4'],
                    ['prdName', '1955® 버거'],
                    ['price', 6400],
                    ['description', `113g 두툼한 순 쇠고기 패티,
                    특별한 1955 소스에 깊은 풍미의 그릴드 어니언까지!
                    맥도날드가 처음 생긴 1955년의 맛을 담은
                    영원한 오리지널 1955 버거`]
                ])],
                ['burger_5', new Map([
                    ['code', 'burger_5'],
                    ['prdName', '맥치킨® 모짜렐라'],
                    ['price', 5500],
                    ['description', `든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와
                    매콤한 아라비아따 소스를 더해
                    강렬하게 재탄생한 맥치킨 모짜렐라!`]
                ])],
                ['burger_6', new Map([
                    ['code', 'burger_6'],
                    ['prdName', '맥치킨®'],
                    ['price', 4000],
                    ['description', `바삭한 치킨 패티, 고소한 화이트 마요 소스와
                    아삭한 양상추가 함께!
                    더 업그레이드된 맛으로 돌아온 맥치킨`]
                ])],
                ['burger_7', new Map([
                    ['code', 'burger_7'],
                    ['prdName', '에그 불고기 버거'],
                    ['price', 3900],
                    ['description', `불고기 버거에 국내산 1+등급 계란을 더해
                    맛의 정점을 찍다!`]
                ])],
                ['burger_8', new Map([
                    ['code', 'burger_8'],
                    ['prdName', '불고기 버거'],
                    ['price', 2900],
                    ['description', `한국인의 입맛에 딱 맞는 불고기 소스에 잘 재운 패티와
                    고소한 마요네즈, 신선한 양상추의 맛있는 조합.`]
                ])],
                ['burger_9', new Map([
                    ['code', 'burger_9'],
                    ['prdName', '슈슈버거'],
                    ['price', 5200],
                    ['description', `탱~글한 통새우살 가득~ 슈슈 버거!`]
                ])],
                ['burger_10', new Map([
                    ['code', 'burger_10'],
                    ['prdName', '슈비버거'],
                    ['price', 6200],
                    ['description', `탱~글한 통새우살에 비프 패티를 더해 푸짐하게~
                    슈비 버거`]
                ])],
                ['burger_11', new Map([
                    ['code', 'burger_11'],
                    ['prdName', '베이컨 토마토 디럭스'],
                    ['price', 6200],
                    ['description', `두 장의 100% 순 쇠고기 패티에 그릴에 구워
                    더욱 고소한 1장의 베이컨을 얹고,
                    신선한 토마토와 양상추,
                    매콤달콤한 스위트 칠리 소스, 치즈, 마요네즈를 더해
                    더욱 풍부하고 신선한 맛의 프리미엄 버거.`]
                ])],
                ['burger_12', new Map([
                    ['code', 'burger_12'],
                    ['prdName', '쿼터파운더® 치즈'],
                    ['price', 7700],
                    ['description', `쿼터파운더라는 이름에서 알 수 있듯이
                    두 배 이상 커진 1/4파운드(113그램) 비프와
                    부드러운 치즈 두 장의 환상궁합!
                    두툼한 순 쇠고기 패티와 신선한 치즈의 풍부한 맛으로
                    세계적으로 사랑받고 있는 맥도날드의 대표적인 프리미엄 버거
                    `]
                ])],
                ['burger_13', new Map([
                    ['code', 'burger_13'],
                    ['prdName', '치즈버거'],
                    ['price', 3000],
                    ['description', `고소하고 부드러운 치즈와 100% 순 쇠고기 패티,
                    맥도날드만의 심플한 클래식 치즈버거.
                    `]
                ])],
                ['burger_14', new Map([
                    ['code', 'burger_14'],
                    ['prdName', '필레 오 피쉬'],
                    ['price', 4200],
                    ['description', `100% 알래스카 폴락 패티의 바삭함,
                    맥도날드의 타르타르소스와 부드러운 스팀번이 조화로운 필레 오 피쉬
                    `]
                ])]
            ])],
            ['side', new Map([
                ['side_0', new Map([
                    ['code', 'side_0'],
                    ['prdName', '골든 모짜렐라 치즈스틱 2조각'],
                    ['price', 2900],
                    ['description', `속이 꽉 찬 황금빛 바삭함!
                    자연 모짜렐라 치즈로 빈틈 없이 고소한
                    맥도날드 치즈스틱을
                    2조각과 4조각으로 다양하게 즐겨보세요!`],
                ])],
                ['side_1', new Map([
                    ['code', 'side_1'],
                    ['prdName', '후렌치 후라이'],
                    ['price', 2400],
                    ['description', `통으로 썰어낸 감자를 맥도날드만의 노하우로 튀겨낸 남다른 맛과 바삭함!
                    맥도날드의 역사가 담긴 월드 클래스 후렌치 후라이`],
                ])],
                ['side_2', new Map([
                    ['code', 'side_2'],
                    ['prdName', '맥너겟®'],
                    ['price', 2500],
                    ['description', `바삭하고 촉촉한 치킨이 한 입에 쏙!
                    다양한 소스로 입맛에 맞게 즐겨보세요!`],
                ])],
                ['side_3', new Map([
                    ['code', 'side_3'],
                    ['prdName', '맥스파이시®치킨 텐더'],
                    ['price', 3200],
                    ['description', `부드러운 100% 닭안심살을 스파이시 시즈닝으로
                    매콤 바삭하게 튀겨낸 치킨 텐더!
                    2가지 소스로 입맛에 맞게 즐겨보세요!`],
                ])],
                ['side_4', new Map([
                    ['code', 'side_4'],
                    ['prdName', '해쉬 브라운'],
                    ['price', 1700],
                    ['description', `씹으면 바삭바삭,
                    속은 부드러운 감자의 고소함.`],
                ])]
            ])],
            ['drink', new Map([
                ['drink_0', new Map([
                    ['code', 'drink_0'],
                    ['prdName', '코카-콜라'],
                    ['price', 2100],
                    ['description', `갈증해소 뿐만이 아니라 기분까지 상쾌하게! 코카-콜라`],
                ])],
                ['drink_1', new Map([
                    ['code', 'drink_1'],
                    ['prdName', '스프라이트'],
                    ['price', 2100],
                    ['description', `청량함에 레몬, 라임향을 더한 시원함!`],
                ])],
                ['drink_2', new Map([
                    ['code', 'drink_2'],
                    ['prdName', '환타'],
                    ['price', 2100],
                    ['description', `톡 쏘는 오렌지 향!`],
                ])],
                ['drink_3', new Map([
                    ['code', 'drink_3'],
                    ['prdName', '자두 칠러'],
                    ['price', 3400],
                    ['description', `자두의 진한 달콤함이
                    얼음을 만나 더욱 시원한 여름 음료, 자두 칠러!`],
                ])],
                ['drink_4', new Map([
                    ['code', 'drink_4'],
                    ['prdName', '딸기 칠러'],
                    ['price', 3400],
                    ['description', `딸기 본연의 맛과 향이 살아 있는
                    상큼 달콤한 딸기 칠러!`],
                ])]
            ])]
        ]);
        this.setData = new Map([
            ['side', ['side_1', 'side_2']],
            ['drink', ['drink_0', 'drink_1', 'drink_2']]
        ]);
    }
}


class OrderDataManger {
    constructor() {
        this.orderList = new Map([
            ['burger', new Map([])],
            ['set', new Map([])],
            ['side', new Map([])],
            ['drink', new Map([])]
        ]);
        this.amount = 0;
        this.selectedMenu = $$('.menu-item')[0].dataset.menu;
        this.minAmount = {'standard': 15000, 'calcValue': 15000};
    }

    updateOrderList(selectedPrdData, sign) {
        const selectedMenu = this.orderList.get(this.selectedMenu);
        const selectedPrdCode = selectedPrdData.get('code');
        let quantity = selectedMenu.get(selectedPrdCode);

        if(quantity <= 1 && sign === '-') {
            quantity = 0;
            selectedMenu.delete(selectedPrdCode);
        } else if(quantity === undefined) {
            quantity = 1;
            selectedMenu.set(selectedPrdCode, quantity);
        } else {
            quantity += Number(sign + 1);
            selectedMenu.set(selectedPrdCode, quantity);
        }

        const selectedPrdPrice = selectedPrdData.get('price');
        this.amount += Number(sign + selectedPrdPrice);
        
        if(sign === '+' && this.minAmount.calcValue > 0) {
            this.minAmount.calcValue -= selectedPrdData.get('price');
        } else if(sign === '-' && this.amount < this.minAmount.standard) {
            this.minAmount.calcValue += selectedPrdData.get('price');
            if(this.minAmount.calcValue > this.minAmount.standard) {
                this.minAmount.calcValue = this.minAmount.standard;
            }
        }
        console.log(this.orderList, this.amount, this.minAmount.calcValue);
        // this.chanegeSetMenu();
        return {'quantity': quantity, 'amount': this.amount, 'minAmount': this.minAmount.calcValue};
    }

    chanegeSetMenu() {
        if(this.selectedMenu === 'set') return false;
        const checkedSet = [];

        const orderBurger = this.orderList.get('burger');
        if(orderBurger.size >= 1) checkedSet.push([...orderBurger][0]);

        checkedSet.push(this.checkSetValue('side'));

        checkedSet.push(this.checkSetValue('drink'));
        
        console.log(checkedSet);
        if(checkedSet.length !== 3) return false;
        // this.orderList.get('burger').get(checkedSet[0]) === 1 ? 
    }

    checkSetValue(menu) {
        const orderMenu = [...this.orderList.get(menu)];
        const setDataMenu = productData.setData.get(menu);

        for(let i = 0; i < orderMenu.length; i++) {
            for(let j = 0; j < setDataMenu.length; j++) {
                console.log(orderMenu[i], setDataMenu[j])
                if(orderMenu[i] === setDataMenu[j]) {
                    return orderMenu[i];
                }
            }
        }
    }
}


class ProductListViewHandler {
    prdListTemplate(prd) {
        const prdPriceStr = prd.get('price').toString();

        return `<li data-prdcode="${prd.get('code')}">
                    <div class="img-wrap">
                        <img src="resources/images/product/${prd.get('code')}_small.png" alt="">
                    </div>
                    <div class="text-wrap">
                        <div class="prd-name">${prd.get('prdName')}</div>
                        <div class="prd-price">${changeToNumberNotation(prdPriceStr)}원</div>
                    </div>
                </li>`;
    }
    
    renderPrdList(menu) {
        let prdList = "";
    
        menu.forEach(prd => {
            prdList += this.prdListTemplate(prd);
        });
    
        $('.prd-list').innerHTML = prdList;
    }

    showPrdDetail(selectedPrdData) {
        $('.contents').classList.add('detail');
        $('.prd-detail-wrap .prd-detail-img').innerHTML = `<img src="resources/images/product/${selectedPrdData.get('code')}_big.png">`;
        $('.prd-detail-wrap .prd-name').innerText = selectedPrdData.get('prdName');
        $('.prd-detail-wrap .prd-text').innerText = selectedPrdData.get('description');
    }

    animetaPrdDatail(time) {
        const $cloneImg = $('.prd-detail-wrap .prd-detail-img').cloneNode(true);
        $cloneImg.classList.add('clone-img');
        $('.prd-detail-wrap').appendChild($cloneImg);
        setTimeout(function(){
            $cloneImg.classList.add('hide1');
        }, time[0]);
        setTimeout(function(){
            $cloneImg.classList.add('hide2');
        }, time[0]+time[1]);
        setTimeout(function(){
            $cloneImg.remove();
        }, time[0]+time[1]+time[2]);
    }
}


class ReceiptViewHandler {
    renderOrderList($orderItem) {
        $('.order-list ul').appendChild($orderItem);
    }

    changeOrderQuantity(selectedPrdCode, quantity) {
        if(quantity) {
            $(`.order-list li[data-code=${selectedPrdCode}] .order-quantity`).innerText = quantity;
        } else {
            $(`.order-list li[data-code=${selectedPrdCode}]`).remove();
        }
    }
    
    updateAmountView(amount) {
        $('.receipt-box .price-num').innerText = changeToNumberNotation(amount);
    }

    updateMinAmount(minAmount) {
        if(minAmount > 0) {
            $('.warning').classList.remove('hide');
            $('#order-btn').classList.add('disabled');
            $('.warning-num em').innerText = changeToNumberNotation(minAmount);
        } else {
            $('.warning').classList.add('hide');
            $('#order-btn').classList.remove('disabled');
        }
    }
}


class MenuTabEventController {
    constructor({prdData, orderData}, prdListView) {
        this.prdData = prdData;
        this.orderData = orderData;
        this.prdListView = prdListView;
        this.selectedMenuItem = $$('.menu-item')[0];
    }

    addMenuTabEvent() {
        $$('.menu-item').forEach(menu => {
            menu.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectedMenuItem.classList.remove('on');
                this.selectedMenuItem = e.currentTarget;
                this.orderData.selectedMenu = this.selectedMenuItem.dataset.menu;
                this.selectedMenuItem.classList.add('on');
                const selectedMenu = this.orderData.selectedMenu;
                const selectedMenuData = this.prdData.productsData.get(selectedMenu);

                this.prdListView.renderPrdList(selectedMenuData);
                PrdListEventController.prototype.addPrdListEvent.call(productList);
                $('.contents').classList.remove('detail');
            });
        });
    }

    initMenuTab() {
        this.prdListView.renderPrdList(this.prdData.productsData.get(this.orderData.selectedMenu));
        this.addMenuTabEvent();
    }
}


class PrdListEventController {
    constructor({prdData, orderData}, {prdListView, receiptView}) {
        this.prdData = prdData;
        this.orderData = orderData;
        this.prdListView = prdListView;
        this.receiptView = receiptView;
    }

    addPrdListEvent() {
        $('.prd-list').addEventListener('click', e => {
            e.preventDefault();
            const target = e.target;
            const prdCode = target.closest('li').dataset.prdcode;
            const selectedMenu = this.orderData.selectedMenu;
            const selectedMenuData = this.prdData.productsData.get(selectedMenu);
            const selectedPrdData = selectedMenuData.get(prdCode);
            
            this.prdListView.showPrdDetail(selectedPrdData);
            $('.prd-add-btn').dataset.code = prdCode;
        });
    }

    addEventToAddBtn() {
        $('.prd-add-btn').addEventListener('click', e => {
            e.preventDefault();
            const target = e.currentTarget;
            const selectedPrdCode = target.dataset.code;
            const selectedMenu = this.orderData.selectedMenu;
            const selectedMenuData = this.prdData.productsData.get(selectedMenu);
            const selectedPrdData = selectedMenuData.get(selectedPrdCode);

            const orderInfo = this.orderData.updateOrderList(selectedPrdData, '+');

            const addBtnTime = [100, 200, 150];
            const orderListTime = addBtnTime.reduce((acc, cur) => acc += cur);
            this.prdListView.animetaPrdDatail(addBtnTime);
            setTimeout(() => {
                if(orderInfo.quantity === 1) {
                    ReceiptEventController.prototype.addOrderList.apply(receipt, [selectedPrdData, orderInfo.quantity]);
                } else {
                    this.receiptView.changeOrderQuantity(selectedPrdCode, orderInfo.quantity);
                }
                this.receiptView.updateAmountView(orderInfo.amount);
                this.receiptView.updateMinAmount(orderInfo.minAmount);
            }, orderListTime);
        });
    }

    initPrdList() {
        this.addPrdListEvent();
        this.addEventToAddBtn();
    }
}


class ReceiptEventController {
    constructor({prdData, orderData}, receiptView) {
        this.prdData = prdData;
        this.orderData = orderData;
        this.receiptView = receiptView;
    }

    addOrderList(selectedPrdData, quantity) {
        const $orderItem = document.createElement('li');
        $orderItem.dataset.code = selectedPrdData.get('code');
        $orderItem.innerHTML += `<span class="order-prd-name">${selectedPrdData.get('prdName')}</span>
                                <div class="quantity-wrap">
                                    <button class="plus-btn" type="button">+</button>
                                    <span class="order-quantity">${quantity}</span>
                                    <button class="minus-btn" type="button">-</button>
                                </div>`;
        this.addEventToQuantityBtn($orderItem);
        this.receiptView.renderOrderList($orderItem);
    }

    addEventToQuantityBtn($orderItem) {
        $orderItem.querySelector('.quantity-wrap').addEventListener('click', e => {
            const target = e.target;
            const selectedPrdCode = target.closest('li').dataset.code;
            const selectedMenu = this.orderData.selectedMenu;
            const selectedMenuData = this.prdData.productsData.get(selectedMenu);
            const selectedPrdData = selectedMenuData.get(selectedPrdCode);
            let sign;

            if(target.classList.contains('plus-btn')) sign = '+';
            else if(target.classList.contains('minus-btn')) sign = '-';

            const orderInfo = this.orderData.updateOrderList(selectedPrdData, sign);

            this.receiptView.changeOrderQuantity(selectedPrdCode, orderInfo.quantity);
            this.receiptView.updateAmountView(orderInfo.amount);
            this.receiptView.updateMinAmount(orderInfo.minAmount);
        });
    }

    initReceipt() {
        this.receiptView.updateMinAmount(this.orderData.minAmount.standard);
    }
}


const productData = new productDataManager();
const orderData = new OrderDataManger();
const productListView = new ProductListViewHandler();
const receiptView = new ReceiptViewHandler();
const menuTab = new MenuTabEventController({'prdData': productData, 'orderData': orderData},
                                            productListView);
const productList = new PrdListEventController({'prdData': productData, 'orderData': orderData},
                                            {'prdListView': productListView, 'receiptView': receiptView});
const receipt = new ReceiptEventController({'prdData': productData, 'orderData': orderData}, receiptView);

menuTab.initMenuTab();
productList.initPrdList();
receipt.initReceipt();