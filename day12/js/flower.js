function showText(){
    // 설명글 보이기
    document.getElementById("desc").style.display = "block";

    // 보기버튼 숨기기
    document.getElementById("open").style.display = "none";
}
function hideText(){
    // 설명글 숨기기
    document.getElementById("desc").style.display = "none";

    // 보기버튼 보이기
    document.getElementById("open").style.display = "block";
}