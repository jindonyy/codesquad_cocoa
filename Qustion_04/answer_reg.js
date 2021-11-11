const data = "[111,2,[33,4,[5,[6]]]]";
const wrongData1 = "[111,2,[33,4,[5,[6]]]";
const wrongData2 = "[111,2,[33,4,[5,[6]]]]]]";

function analyzeArr() {
}

// 1~2. 배열정보 출력 및 올바른 배열인지 체크
analyzeArr.prototype.checkTrueArr = function(data) {
    const openBracketArr = data.match(/\[/g);
    const closeBracketArr = data.match(/\]/g);
    
    if(openBracketArr.length === closeBracketArr.length) return true;
    else if(openBracketArr.length > closeBracketArr.length) {
        console.log('닫는 괄호가 일치하지 않습니다.');
        return false;
    } else if(openBracketArr.length < closeBracketArr.length) {
        console.log('여는 괄호가 일치하지 않습니다.');
        return false;
    }
    
    const commaArr = data.match(/\,/g);
    console.log(`배열의 중첩된 깊이 수준은 ${openBracketArr.length}이며, 총 ${commaArr.length+1}개의 원소가 포함되어 있습니다.`);
}

// 3. 배열 구조 출력
analyzeArr.prototype.getDataStructure = function(data) {
    if(!arrData.checkTrueArr(data)) return false;

    const splitData = data.split(",");
    for(let i = 0, len = data.length; i < len; i++) {
        const el = data[i];
        if(el === ' ' || el === ',') continue;
        if(el === '[') this.dataInfo.braket++;
        else if(el === ',') this.dataInfo.number++;
    }

    console.log(this.dataStructure);
}

const arrData = new analyzeArr();


arrData.checkTrueArr(wrongData2); // 여는 괄호가 일치하지 않습니다.
arrData.printDataInfo(data); // 배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다.
arrData.getDataStructure(data); // 