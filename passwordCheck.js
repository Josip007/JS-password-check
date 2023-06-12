    function solution(S) {
        let words = S.split(' ');

        let maxPasswordLength = -1;

        words.forEach((word) => {
            if (/^[a-zA-Z0-9]*$/.test(word)) {
                let characters = word.split('');
                let digitCount = 0;
                let letterCount = 0;

                characters.forEach((char) => {
                    if (/[0-9]/.test(char)) {
                        digitCount++;
                    }
                    else if (/[a-zA-Z]/.test(char)) {
                        letterCount++;
                    }
                });

                if (digitCount % 2 === 1 && letterCount % 2 === 0) {
                    if (word.length > maxPasswordLength) {
                        maxPasswordLength = word.length;
                    }
                }
            }
        });

        return maxPasswordLength;
    }

console.log(solution("test 5 a0A pass007  fa47fa gad4gda88da48ad4  8ad4ad8g ?xy1"));
