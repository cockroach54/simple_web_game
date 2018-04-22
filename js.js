        var cnt=0;
        function cntPlus(){
            cnt++;
            var cnt_num = document.getElementById('dd');
            cnt_num.innerHTML = cnt;
        }
        function changeColor(){
            var col = document.getElementById('aa');
            if(cnt%2===0)
                col.style.backgroundColor = 'hotpink';
            else
                col.style.backgroundColor = 'aquamarine';
            //cnt+=1;
            cntPlus();
        }
        function resetCnt(){
            var col = document.getElementById('bb');
            cnt=-1;
            cntPlus();
            if(col.style.backgroundColor==='aqua')
                col.style.backgroundColor='#666';
            else
                col.style.backgroundColor='aqua'
        }
function showText(){
    var te = document.getElementById('tt').value;
    //var te = showText2;   //함수 객체를 html에 쓸수도 있음
    document.getElementById('bu').innerHTML = te
}

function showText2(){
    document.getElementById('aa').innerHTML='aaaa';
}