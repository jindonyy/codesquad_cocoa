// Model
class MapDataManeger {
    constructor() {
        this.fs = require('fs');
        this.mapStrData = this.fs.readFileSync('map.txt','utf-8');
        this.currentStageNum = 0;
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

    // # 구분된 사용자 입력 값에 따른 player 위치 정보 업데이트
    distinguishMoveSpotValue({moveSpot, moveValue, position}) {
        const currentStageMap = this.mapInfoArr[this.currentStageNum].stageMap;

        switch(moveSpot) {
            case 0: // 벽
                return '(경고!) 해당 명령을 수행할 수 없습니다!';
            case 1: // 구멍
                currentStageMap[position.y + moveValue.y][position.x + moveValue.x] = -1; // 구멍과 겹쳐 서있을 경우 -1
                break;
            case 2: // 공
                if(currentStageMap[position.y + (moveValue.y * 2)][position.x + (moveValue.x * 2)] === 0) { // 공 앞에 벽이 있는 경우
                    return '(경고!) 해당 명령을 수행할 수 없습니다!';
                }
                currentStageMap[position.y + moveValue.y][position.x + moveValue.x] = 3;
                if(currentStageMap[position.y + (moveValue.y * 2)][position.x + (moveValue.x * 2)] === 1) { // 구멍이랑 공이 겹쳤을 때
                    this.mapInfoArr[this.currentStageNum].holes--;
                    currentStageMap[position.y + (moveValue.y * 2)][position.x + (moveValue.x * 2)] = -2;
                } else currentStageMap[position.y + (moveValue.y * 2)][position.x + (moveValue.x * 2)] = 2;
                break;
            case ' ': // 빈 공간
                currentStageMap[position.y + moveValue.y][position.x + moveValue.x] = 3;
                break;
        }
        
        currentStageMap[position.y][position.x] = currentStageMap[position.y][position.x] === 3 ? ' ' : -1;
        this.mapInfoArr[this.currentStageNum].player.x += moveValue.x;
        this.mapInfoArr[this.currentStageNum].player.y += moveValue.y;
        
        return this.mapInfoArr[this.currentStageNum].stageMap;
    }

    // # 사용자 입력 값에 따른 player 위치 정보 업데이트
    updatePlayerSpot(answer) {
        const currentStageInfo = this.mapInfoArr[this.currentStageNum];
        const currentStageMap = currentStageInfo.stageMap;
        const moveInfoArr = [];

        for(const answerOne of answer) {
            const position = {
                x: currentStageInfo.player.x,
                y: currentStageInfo.player.y
            }
            let moveValue = {x: 0, y: 0};
            let moveSpot;

            switch(answerOne) {
                case 'w': // 위쪽
                    moveSpot = currentStageMap[position.y - 1][position.x];
                    moveValue.y = -1;
                    break;
                case 'a': // 왼쪽
                    moveSpot = currentStageMap[position.y][position.x - 1];
                    moveValue.x = -1;
                    break;
                case 's': // 아래쪽
                    moveSpot = currentStageMap[position.y + 1][position.x];
                    moveValue.y = 1;
                    break;
                case 'd': // 오른쪽
                    moveSpot = currentStageMap[position.y][position.x + 1];
                    moveValue.x = 1;
                    break;
                case 'q': // 종료
                    moveInfoArr.push('Bye~');
                    return moveInfoArr;
                default:
                    moveInfoArr.push('w, a, s, d 중에 해당되지 않습니다.');
                    break;
            }

            const moveInfo = this.distinguishMoveSpotValue({'moveSpot': moveSpot,
                                                        'moveValue': moveValue,
                                                        'position': position});
            moveInfoArr.push(moveInfo);
            if(currentStageInfo.holes === 0) {
                moveInfoArr.push(`빠밤! Stage ${currentStageInfo.stageNum} 클리어!`);

                this.currentStageNum++;
                const currentStageMapStr = sokobanMove.getCurrentStageMapStr();
                moveInfoArr.push(`Stage ${this.currentStageNum + 1}\n\n${currentStageMapStr}`);

                return moveInfoArr;
            }
        }

        return moveInfoArr;
    }
}


// View
class OutputPrinter {
    // 사용자 입력 값에 따른 출력
    printMoveMap(moveStrInfo) {
        console.log(`${moveStrInfo}\n`)
    }
}


// Controller
class MoveController {
    constructor(mapData, output) {
        this.mapData = mapData;
        this.output = output;
    }

    // # 숫자로 저장된 배열 문자로 변환
    changeToStringView(xPointArr) {
        return xPointArr.map(xPoint => {
            switch(xPoint) {
                case 0:
                    return '#';
                case 1:
                    return 'O';
                case 2:
                    return 'o';
                case -2:
                    return '0';
                case 3:
                    return 'P';
                case -1:
                    return 'P';
                case ' ':
                    return ' ';
            }
        });
    }

    // 숫자 배열을 넣어주고 문자로 변환된 배열로 반환
    getCurrentStageMapStr() {
        if(!this.mapData.mapInfoArr) this.mapData.divideStageMapArr.call(this.mapData);
        const currentStageMap = this.mapData.mapInfoArr[this.mapData.currentStageNum].stageMap;
        let stageMapStr = '';
        
        currentStageMap.forEach(xPointArr => {
            const xPointStr = this.changeToStringView(xPointArr).join('');
            stageMapStr += `${xPointStr}\n`;
        });

        return stageMapStr;
    }

    // # 업데이트 된 player 위치 정보를 받아 문자열로 변환하여 반환
    updateStageMapStrArr(answer) {
        const moveStrInfoArr = [];
        const moveInfoArr = this.mapData.updatePlayerSpot.call(this.mapData, answer);

        moveInfoArr.forEach(moveInfo => {
            if(typeof moveInfo === 'string') { // 종료나 잘못된 문자를 입력 시
                moveStrInfoArr.push(moveInfo);
                return;
            }

            let stageMapStr = '';
            moveInfo.forEach(xPointArr => {
                const xPointStr = this.changeToStringView(xPointArr).join('');
                stageMapStr += `${xPointStr}\n`;
            });
            moveStrInfoArr.push(stageMapStr);
        });

        return moveStrInfoArr;
    }

    // # readline으로 사용자의 입력 값을 받을 함수
    requireUserInput() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });

        rl.setPrompt('SOKOBAN> ');
        rl.prompt();
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

    // # 초기 스테이지 출력 화면, readline 실행 셋팅 함수
    initView() {
        const initText = `Stage ${this.mapData.currentStageNum + 1}\n\n${this.getCurrentStageMapStr()}`;
        this.output.printMoveMap(initText);
        this.requireUserInput();
    }
}

const sokobanMove = new MoveController(new MapDataManeger(), new OutputPrinter());
sokobanMove.initView();