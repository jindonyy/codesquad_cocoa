const data = "[111,2,[33,4,[5,[6]]]]";
const wrongData1 = "[111,2,[33,4,[5,[6]]]";
const wrongData2 = "[111,2,[33,4,[5,[6]]]]]]";

function analyzeArr() {
    this.bracketArr = [];
    this.dataInfo = {
        braket: 0,
        number: 0
    }
}

// 2. 올바른 배열인지 체크 // stack(LIFO) 사용
analyzeArr.prototype.checkTrueArr = function(data) {
    for(let i = 0, len = data.length; i < len; i++) {
        const el = data[i];
        if(el === ',' || el === ' ') continue;
        if(el === '[') this.bracketArr.push('[');
        else if(el === ']') {
            if(this.bracketArr.length) this.bracketArr.pop();
            else {
                console.log('여는 괄호가 일치하지 않습니다.');
                return false;
            }
        }
    }

    if(this.bracketArr.length) {
        console.log('닫는 괄호가 일치하지 않습니다.');
        return false;
    }
    else return true;
}

// 1. 배열 정보 출력
analyzeArr.prototype.printDataInfo = function(data) {
    if(!arrData.checkTrueArr(data)) return false;

    for(let i = 0, len = data.length; i < len; i++) {
        const el = data[i];
        if(el === ' ') continue;
        if(el === '[') this.dataInfo.braket++;
        else if(el === ',') this.dataInfo.number++;
    }

    console.log(`배열의 중첩된 깊이 수준은 ${this.dataInfo.braket}이며, 총 ${this.dataInfo.number+1}개의 원소가 포함되어 있습니다`);
}

// 3. 배열 구조 출력


const arrData = new analyzeArr();


arrData.checkTrueArr(wrongData2); // 여는 괄호가 일치하지 않습니다.
arrData.printDataInfo(data); // 배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다.