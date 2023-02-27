const getOnlyText = (val) => {
  if (typeof(val) !== 'number') {
    const result =  val.match(/\D+/g);
    return result !== null ? result[0] : result
  }
}

const breakString = (s) => {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        const str = s.substring(0, i+1)
        if (str != '') {
            result.push(str)
        }
    }
    for (let i = 0; i < s.length; i++) {
        const str = s.substring(s.length, i + 1)
        if (str != '') {
            result.push(str)
        }
    }
    return result;
}

const main = (arr) => {
    const result = [];
     let newArr = arr.map(getOnlyText).filter((e) => e !== null);
     newArr.forEach(e => {
        const str = breakString(e)
        result.push(str)
     });
     console.log(result);
     const concat = result.flat(1)
     const unique = [...new Set(concat)];
     console.log(unique);
}

const arr = ['11','12','cii','001','2','1998','7','89','iia','fii'];
main(arr)