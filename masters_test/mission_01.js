// Model
class MapDataManeger {
    constructor() {
        this.mapStrData = `Stage 1
#####
#OoP#
#####
=====
Stage 2
  #######  
###  O  ###
#    o    #
# Oo P oO #
###  o  ###
 #   O  #  
 ########  `;
    }
    
    // 문자를 0~3에 맞는 숫자로 변환
    pushXPointArr(line) {
        const xPointArr = [];
    
        for(const str of line) {
            switch(str) {
                case ' ':
                    xPointArr.push(' ');
                    break;
                case '#':
                    xPointArr.push(0);
                    break;
                case 'O':
                    xPointArr.push(1);
                    break;
                case 'o':
                    xPointArr.push(2);
                    break;
                case 'P':
                    xPointArr.push(3);
                    break;
            }
        }
        
        return xPointArr;
    }

    // 한 줄 단위로 split하여, Stage와 === 줄과 구분하여 배열을 생성
    getMapDataArr(mapStrData) {
        const splitMapData = mapStrData.split('\n');
        const mapDataArr = [];
    
        for(let i = 0; i < splitMapData.length; i++) {
            const line = splitMapData[i];
    
            if(/stage/gi.test(line)) continue;
            else if(/=+/gi.test(line)) mapDataArr.push(4);
            else {
                const xPointArr = this.pushXPointArr(line);
                mapDataArr.push(xPointArr);
            }
        }
        mapDataArr.push(4);
    
        return mapDataArr;
    }
      
    // 각 stage의 정보를 분석하여 반환
    getStageMapInfo(stageMap, num) {
        const stageMapInfo = {
            stageNum: num,
            stageMap: stageMap,
            horizontalSize: stageMap[0].length,
            verticalSize: stageMap.length,
            holes: 0,
            ball: 0,
            player: {
                x: 0,
                y: 0
            }
        }

        stageMap.forEach((xPointArr, i) => {
            xPointArr.forEach((xPoint, j) => {
                switch(xPoint) {
                    case 1:
                        stageMapInfo.holes++;
                        break;
                    case 2:
                        stageMapInfo.ball++;
                        break;
                    case 3:
                        stageMapInfo.player.y = i;
                        stageMapInfo.player.x = j;
                        break;
                }
            });
        });

        return stageMapInfo;
    }

    // 4를 기준으로 stage별 map배열로 나누기
    divideStageMapArr() {
        const stageMapArr = this.getMapDataArr(this.mapStrData);
        let stageMap = [];
        const mapInfoArr = [];

        stageMapArr.forEach(xPointArr => {        
            if(Array.isArray(xPointArr)) stageMap.push(xPointArr);
            else {
                const stageMapInfo = this.getStageMapInfo(stageMap, mapInfoArr.length+1);
                mapInfoArr.push(stageMapInfo);
                stageMap = [];
            }
        });

        this.mapInfoArr = mapInfoArr;
    }
}

// View
class MapInfoViewHandler {
    // 각 stage의 정보를 출력
    printStageMap(mapInfoArr, mapStrArr) {
        let printText = '';
    
        mapStrArr.forEach((mapStrArr, i) => {
            printText += `Stage ${mapInfoArr[i].stageNum}

${mapStrArr}
가로크기: ${mapInfoArr[i].horizontalSize}
세로크기: ${mapInfoArr[i].verticalSize}
구멍의 수: ${mapInfoArr[i].holes}
공의 수: ${mapInfoArr[i].ball}
플레이어 위치: (${mapInfoArr[i].player.y + 1}, ${mapInfoArr[i].player.x + 1})

    `;
});
    
        return printText;
    }
}


// Controller
class MapInfoController {
    constructor(mapData, view) {
        this.mapData = mapData;
        this.view = view;
    }

    // 숫자로 저장된 배열 문자로 번환
    changeToStringView(xPointArr) {
        return xPointArr.map(xPoint => {
            switch(xPoint) {
                case 0:
                    return '#';
                case 1:
                    return 'O';
                case 2:
                    return 'o';
                case 3:
                    return 'P';
                case ' ':
                    return ' ';
            }
        });
    }

    // 숫자 배열을 넣어주고 문자로 변환된 배열로 반환
    getCurrentStageMapStr() {
        const mapStrArr = [];

        this.mapData.mapInfoArr.forEach(stageMapInfo => {
            let StageMapStr = '';
            
            stageMapInfo.stageMap.forEach(xPointArr => {
                const xPointStr = this.changeToStringView(xPointArr).join('');
                StageMapStr += `${xPointStr}\n`;
            });
            mapStrArr.push(StageMapStr);
        });

        return mapStrArr;
    }

    // map data를 view에 넘겨주기 위한 셋팅 함수
    initStageMapView() {
        this.mapData.divideStageMapArr();
        const mapStrArr = this.getCurrentStageMapStr();

        return this.view.printStageMap(this.mapData.mapInfoArr, mapStrArr);
    }
}


const mapInfo = new MapInfoController(new MapDataManeger(), new MapInfoViewHandler);
console.log(mapInfo.initStageMapView());