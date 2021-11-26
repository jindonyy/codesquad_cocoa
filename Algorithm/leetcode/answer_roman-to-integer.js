/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    sArr = s.split('');
    let pre = 0;

    return sArr.reduceRight((acc, cur) => {
        switch(cur) {
            case 'I':
                cur = 1;
                break;
            case 'V':
                cur = 5;
                break;
            case 'X':
                cur = 10;
                break;
            case 'L':
                cur = 50;
                break;
            case 'C':
                cur = 100;
                break;
            case 'D':
                cur = 500;
                break;
            case 'M':
                cur = 1000;
                break;
        }
        
        pre <= cur ? acc += cur : acc -= cur;
        pre = cur;
        
        return acc;
    }, 0);
};