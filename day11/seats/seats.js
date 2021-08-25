// 자리 배치도
var customer = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉나요?");
var rowNum, i, j;

// 줄(행) 수 계산
if(customer % colNum === 0){        // 나누어 떨어질 떄
    rowNum = customer / colNum;     // 줄 수
}else{      // 나누어 떨어지지 않을 때
    rowNum = parseInt(customer / colNum + 1);
}
// document.write(rowNum + "개의 줄이 필요합니다.");

// 좌선번호 배치
document.write("<table>");
for(i = 0; i < rowNum; i++){
    document.write("<tr>")
    for(j = 1; j <= colNum; j++){
        var seatNum = i*colNum+j;
        if(seatNum > customer) break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("</tr>")
}
document.write("</table>");