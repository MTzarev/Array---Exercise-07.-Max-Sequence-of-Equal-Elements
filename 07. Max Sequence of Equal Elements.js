function maxSequenceOfEqualElements(array) {
    let sequence = ;
    for (let i = 0; i <= array.length; i++) {
        let curNum = array[i];
        let curSeq = [curNum];

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];

            if (curNum === nextNum) {
                curSeq.push(nextNum);

            } else {
                break;
            }

        }
        if (curSeq.length > sequence.length) {
            sequence = curSeq;
        }
    }
    console.log(sequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequenceOfEqualElements([4, 4, 4, 4]);
//maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);