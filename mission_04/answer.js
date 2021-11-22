const data = "[111,2,[33,[4],[[5],6]]]";
const wrongData1 = "[111,2,[33,4,[5,[6]]]";
const wrongData2 = "[111,2,[33,4,[5,[6]]]]]]";

// 1~2. 배열정보 출력 및 올바른 배열인지 체크
// stack(LIFO) 사용
const getDataInfo = (data) => {
    bracketArr = [];
    dataInfo = {
        bracket: 0,
        number: 1
    };

    for(let i = 0, len = data.length; i < len; i++) {
        const el = data[i];
        switch(el) {
            case '[':
                bracketArr.push('[');
                if(bracketArr.length > dataInfo.bracket) dataInfo.bracket = bracketArr.length;
                break;
            case ',':
                dataInfo.number++;
                break;
            case ']':
                if(bracketArr.length) bracketArr.pop();
                else {
                    console.log('여는 괄호가 일치하지 않습니다.');
                    return false;
                }
            default:
                continue;
        }
    }
    
    if(bracketArr.length) console.log('닫는 괄호가 일치하지 않습니다.');
    else console.log(`배열의 중첩된 깊이 수준은 ${dataInfo.bracket}이며, 총 ${dataInfo.number}개의 원소가 포함되어 있습니다.`);
}

// 3. 배열 구조 출력
// stack 미사용..ㅠ_ㅠ // class로 바꿔봤는데 문제 있움..
const dataStructure = {
    "type": "root",
    "child": []
};
let parent = dataStructure.child;

const pushChild = (dataStr) => {
    let child;
    if(dataStr === '[') {
        child = {
            'type': 'array',
            'child': []
        };
        parent.push(child);
        return parent[parent.length-1].child;
    } else {
        child = {
            'type': isNaN(dataStr) ? 'string' : 'number',
            'value': dataStr,
            'child': []
        }
        parent.push(child);
    }
}

const getDataStructure = (data) => {
    const splitData = data.split(/\]|,/);
        
    for(let i = 0, len = splitData.length; i < len; i++) {
        const el = splitData[i];
        if(el === '') continue;
        if(el[0] === '[') {
            parent = pushChild(el[0]);
            splitData[i] = el.substring(1, el.length);
        }
        pushChild(splitData[i]);
    };

    return dataStructure;
}


getDataInfo(wrongData2); // 여는 괄호가 일치하지 않습니다.
getDataInfo(data); // 배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다.
console.log(getDataStructure(data));
/* {
    "type":"root",
    "child":[
        {
            "type":"array",
            "child":[
                {
                    "type":111,
                    "value":"111",
                    "child":[]
                },
                {
                    "type":2,
                    "value":"2",
                    "child":[]
                },
                {
                    "type":"array",
                    "child":[
                        {
                            "type":33,
                            "value":"33",
                            "child":[]
                        },
                        {
                            "type":"array",
                            "child":[
                                {
                                    "type":4,
                                    "value":"4",
                                    "child":[]
                                },
                                {
                                    "type":"array",
                                    "child":[
                                        {
                                            "type":5,
                                            "value":"5",
                                            "child":[]
                                        },
                                        {
                                            "type":"array",
                                            "child":[
                                                {
                                                    "type":6,
                                                    "value":"6",
                                                    "child":[]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
} */


// try {
//     data = JSON.parse(data);
// } catch(e){
//     console.log('열고 닫는 괄호를 확인해주세요.');
//     return false;
// }