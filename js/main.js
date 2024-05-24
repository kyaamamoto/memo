// 選択した画像ファイルのプレビューを生成する関数を定義します。

function preview(obj) {
    // #img 要素を取得
    var imgContainer = document.querySelector('#img');

    // imgContainer が存在するかチェック
    if (imgContainer) {
        // すべての子要素（既存の画像）を削除
        while (imgContainer.firstChild) {
            imgContainer.removeChild(imgContainer.firstChild);
        }

        // 選択したファイルについてループ
        for (var i = 0; i < obj.files.length; i++) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                // 新しい img 要素を作成
                var newImg = document.createElement('img');
                // 作成した img 要素に src 属性を設定
                newImg.src = e.target.result;
                // imgContainer に新しい img 要素を追加
                imgContainer.appendChild(newImg);
            };
            fileReader.readAsDataURL(obj.files[i]);
        }
    } else {
        console.error('IDが "img" の要素が見つかりません。');
    }
}



//1.saveクリックイベント
$("#save").on("click",function (){
    let date = $("#date").val();
    let namae = $("#namae").val();
    let tokucho = $("#tokucho").val();
    let memo = $("#memo").val();

 // データオブジェクト作成
    let value = {
        date: date,
        namae: namae,
        tokucho: tokucho,
        memo: memo
    }

 // keyの生成
    let key = Date.now();

 // localStorageにデータ保存
 localStorage.setItem(key, JSON.stringify(value));

 // 保存されたデータをコンソールに表示
 let result = JSON.parse(localStorage.getItem(key));

let html = `
    <li>
      <P>${result.date}</P>
      <P>${result.namae}</P>
      <P>${result.tokucho}</P>
      <P>${result.memo}</P>
    </li>
`;
 $("#list").append(html);


 //入力フィールドをクリア
 $("#date").val("");
 $("#namae").val("");
 $("#tokucho").val("");
 $("#memo").val("");
 $("#gazou").val("");
 $("#img").remove();

 // リロードする
 window.location.reload();

});


//画像について追加式入れてみる

//ここまで



//2.clear クリックイベント
$("#clear").on("click", function(){
    localStorage.clear();
    $("#list").empty();
});

//3.ページ読み込み：保存データ取得表示
$(document).ready(function(){
    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);
        const result = JSON.parse(localStorage.getItem(key));
        //console.log(result.date);
        //console.log(result.namae);
        //console.log(result.tokucho);
        //console.log(result.memo);

            let html = `
            <li>
              <p>${result.date}</p>
              <p>${result.namae}</p>
              <p>${result.tokucho}</p>
              <p>${result.memo}</p>
            </li>
            `;
            $("#list").append(html);
        
        }

})

///////////////////////



