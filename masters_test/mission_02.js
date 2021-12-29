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

    // + 구분된 사용자 입력 값에 따른 player 위치 정보 업데이트
    distinguishMoveSpotValue({stageNum, moveValue, position}) {
        const currentStageMap = this.mapInfoArr[stageNum].stageMap;

        currentStageMap[position.y][position.x] = ' ';
        currentStageMap[position.y + moveValue.y][position.x + moveValue.x] = 3;
        this.mapInfoArr[stageNum].player.x += moveValue.x;
        this.mapInfoArr[stageNum].player.y += moveValue.y;
    }

    // + 사용자 입력 값 구분
    updatePlayerSpot(stageNum, answerOne) {
        const currentStageMap = this.mapInfoArr[stageNum].stageMap;
        const position = {
            x: this.mapInfoArr[stageNum].player.x,
            y: this.mapInfoArr[stageNum].player.y
        }
        let moveValue = {x: 0, y: 0};
        let moveSpot;
        let message;

        switch(answerOne) {
            case 'w':
                moveSpot = currentStageMap[position.y - 1][position.x];
                moveValue.y = -1;
                message = 'W: 위쪽으로 이동합니다.';
                break;
            case 'a':
                moveSpot = currentStageMap[position.y][position.x - 1];
                moveValue.x = -1;
                message = 'A: 왼쪽으로 이동합니다.';
                break;
            case 's':
                moveSpot = currentStageMap[position.y + 1][position.x];
                moveValue.y = 1;
                message = 'S: 아래쪽으로 이동합니다.';
                break;
            case 'd':
                moveSpot = currentStageMap[position.y][position.x + 1];
                moveValue.x = 1;
                message = 'D: 오른쪽으로 이동합니다.';
                break;
            case 'q':
                message = 'Bye~';
                return {'message': message};
            default:
                message = 'w, a, s, d 중에 해당되지 않습니다.';
        }

        if(moveSpot !== ' ') {
            message = '(경고!) 해당 명령을 수행할 수 없습니다!';
            return {'currentStageMap': currentStageMap, 'message': message};
        }

        this.distinguishMoveSpotValue({'stageNum': stageNum, 'moveValue': moveValue, 'position': position});
        
        return {'currentStageMap': currentStageMap, 'message': message};
    }
}


// View
class OutputPrinter {
    // + 초기 출력(stage map)
    printCurrentStage(stageMapStr) {
        console.log(stageMapStr);
    }

    // + 사용자 입력 값에 따른 출력
    printMoveMap(moveStrInfo) {
        console.log(`\n${moveStrInfo.message}\n`)
        if(moveStrInfo.stageMapStr) console.log(moveStrInfo.stageMapStr); // q이외에 문자들
    }
}


// Controller
class MoveController {
    constructor(mapData, output) {
        this.mapData = mapData;
        this.output = output;
        this.stageNum = 2;
    }

    // 숫자로 저장된 배열 문자로 변환
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
        this.mapData.divideStageMapArr.call(this.mapData);
        const currentStageMap = this.mapData.mapInfoArr[this.stageNum - 1].stageMap;
        let stageMapStr = '';
        
        currentStageMap.forEach(xPointArr => {
            const xPointStr = this.changeToStringView(xPointArr).join('');
            stageMapStr += `${xPointStr}\n`;
        });

        return stageMapStr;
    }

    // + 업데이트 된 player 위치 정보를 받아 문자열로 변환하여 반환
    updateStageMapStrArr(answer) {
        const moveStrInfoArr = [];

        for(const answerOne of answer) {
            const moveInfo = this.mapData.updatePlayerSpot.apply(this.mapData, [this.stageNum - 1, answerOne]);
            let stageMapStr = '';
            
            if(!moveInfo.currentStageMap) { // q가 입력될 경우
                moveStrInfoArr.push({'message': moveInfo.message});
                continue;
            }
            moveInfo.currentStageMap.forEach(xPointArr => {
                const xPointStr = this.changeToStringView(xPointArr).join('');
                stageMapStr += `${xPointStr}\n`;
            });

            moveStrInfoArr.push({'stageMapStr': stageMapStr, 'message': moveInfo.message});
        }

        return moveStrInfoArr;
    }

    // + readline으로 사용자의 입력 값을 받을 함수
    requireUserInput() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });

        rl.setPrompt('SOKOBAN> ')
        rl.prompt()
        rl.on('line', answer => {
            const moveStrInfoArr = this.updateStageMapStrArr(answer);

            moveStrInfoArr.forEach(moveStrInfo => {
                this.output.printMoveMap.call(this.output, moveStrInfo);
            });

            switch(answer) {
                case 'q':
                    rl.close();
                default:
                    rl.prompt();
            }
        });
        rl.on('close', function() {
            process.exit();
        });
    }

    // + 초기 스테이지 출력 화면, readline 실행 셋팅 함수
    initView() {
        const initText = `Stage ${this.stageNum}\n\n${this.getCurrentStageMapStr()}`;
        this.output.printCurrentStage(initText);
        this.requireUserInput();
    }
}

const sokobanMove = new MoveController(new MapDataManeger(), new OutputPrinter());
sokobanMove.initView();