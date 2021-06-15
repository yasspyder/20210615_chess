function chessboard1() {
    var newTable = document.createElement('table'),
        lets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        blackFigs1 = [
            '8', '&#9820;', '&#9820;', '&#9820;', '&#9820;', '&#9820;', '&#9820;', '&#9820;', '&#9820;', '8'
        ],
        whiteFigs1 = [
            '1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'
        ],
        blackFigs2 = [
            '7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'
        ],
        whiteFigs2 = [
            '2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'
        ];

    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newTr = newTable.insertRow(i); // i - номер строки с нуля
        for (var j = 0; j < 10; j++) { //j - номер столбца
            var newTd = newTr.insertCell(j); //в строку вставляем ячейку
            switch (i) {
                case 0:
                    newTd.innerText = lets[j];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[j];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[j];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[j];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[j];
                    break;
                case 9:
                    newTd.innerText = lets[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.append(newTable);
}
chessboard1();