const data = "[111,2,[33,4,[5,[6]]]]";
const wrongData1 = "[111,2,[33,4,[5,[6]]]";
const wrongData2 = "[111,2,[33,4,[5,[6]]]]]]";

function analyzeArr() {
}

// 1~2. 배열정보 출력 및 올바른 배열인지 체크 // stack(LIFO) 사용
analyzeArr.prototype.getDataInfo = function(data) {
    bracketArr = [];
    dataInfo = {
        braket: 0,
        number: 0
    };

    for(let i = 0, len = data.length; i < len; i++) {
        const el = data[i];
        if(el === ' ' || !isNaN(el)) continue;
        if(el === '[') {
            bracketArr.push('[');
            dataInfo.braket++;
        }
        else if(el === ',') dataInfo.number++;
        else if(el === ']') {
            if(bracketArr.length) bracketArr.pop();
            else {
                console.log('여는 괄호가 일치하지 않습니다.');
                return false;
            }
        }
    }
    
    if(bracketArr.length) console.log('닫는 괄호가 일치하지 않습니다.');
    else console.log(`배열의 중첩된 깊이 수준은 ${dataInfo.braket}이며, 총 ${dataInfo.number+1}개의 원소가 포함되어 있습니다.`);
}

// 3. 배열 구조 출력
analyzeArr.prototype.getDataStructure = function(data) {
    try {
        data = JSON.parse(data);
    } catch(e){
        console.log('열고 닫는 괄호를 확인해주세요.');
        return false;
    }

    const dataStructure = {};



    console.log(dataStructure);
}

const arrData = new analyzeArr();


arrData.getDataInfo(wrongData2); // 여는 괄호가 일치하지 않습니다.
arrData.getDataInfo(data); // 배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다.
arrData.getDataStructure(data); // 