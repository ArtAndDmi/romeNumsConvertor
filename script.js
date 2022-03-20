function convertor() {
    let str = document.getElementById('input');
    let string = str.value
    let num = 0
    let array = []

    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'M':
                array.push(1000)
                break
            case 'D':
                array.push(500)
                break
            case 'C':
                array.push(100)
                break
            case 'L':
                array.push(50)
                break
            case 'X':
                array.push(10)
                break
            case 'V':
                array.push(5)
                break
            case 'I':
                array.push(1)
                break
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            num += array[i]
        }
        else {
            num += array[i + 1] - array[i]
        }
    }

    if (array[array.length - 2] >= array[array.length - 1]) {
        num += array[array.length - 1]
    }

    if (num === 0) {
        alert('Введите число заглавными английскими буквами\nНапример: XIX')
    }
    document.getElementById('result').textContent = num
}







