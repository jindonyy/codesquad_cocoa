const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
};

function getNumElement(data) {
    let numValue = [];

    function differentiateType(obj) {    
        for(let key in obj) {
            const el = obj[key];
            if(Object.prototype.toString.call(el) === '[object Object]') differentiateType(el);
            else {
                if(typeof(el) === 'number') numValue.push(key);
            }
        }    
    }
    differentiateType(data);
    
    return numValue;
}

console.log(getNumElement(data));

// Object.prototype.toString.call(el) === '[object Object]' 대신에
// el.constructor === Object 도 사용 가능
