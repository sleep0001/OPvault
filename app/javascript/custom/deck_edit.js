



// 1.要素の取得
const cards = document.querySelectorAll(".cards");
const create_deck = document.querySelector(".create_deck");


// 2.ドラッグのトリガー
let draggedID = null;


cards.forEach(function(card){
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});


// 4.デッキ作成区画
const listarray = [];
create_deck.addEventListener("dragover", dragOver);
create_deck.addEventListener("dragenter", dragEnter);
create_deck.addEventListener("dragleave", dragLeave);
create_deck.addEventListener("drop", dragDrop);


// 3.ドラッグ関数


function dragStart(event) {
  
  event.dataTransfer.setData('text/plain',event.target.id);
  this.className += " hold";
}

function dragEnd() {
  this.className = "cards";
  create_deck.className = "create_deck";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter() {
  create_deck.className += " hoverd";

}

function dragLeave() {
  create_deck.className = "create_deck";
}

function dragDrop(event) {
  create_deck.className = "create_deck";
  draggedID = event.dataTransfer.getData('text/plain');
  if(draggedID.length == 8){
    const count = listarray.filter(item => item === draggedID).length;
    const deck_length = listarray.length;

    if(count < 4 && deck_length < 50){
      // 枚数制限を設定
      listarray.push(draggedID);
      listarray.sort();
    }else if(draggedID == "OP01-075" && deck_length < 50) {
      // パシフィスタ用
      listarray.push(draggedID);
      listarray.sort();
    }
    // 全要素を削除してから再度設定
    listSelectCard.innerHTML = "";

    
    listarray.forEach(draggedID => {
      
      const item = document.createElement('li');
      const image = document.createElement('img');
      const imageURL = "https://www.onepiece-cardgame.com/images/cardlist/card/" + draggedID + ".png";
      image.src = imageURL;
      image.className = "";

      item.appendChild(image);
      listSelectCard.appendChild(item);
    });
  }
}


// ポップアップ機能が欲しい
const cardImages = document.querySelectorAll('.cardsImage');

// ポップアップ表示用の要素を取得
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closeBtn = document.getElementById('closeBtn');

let isPopupVisible = false; // ポップアップが表示されているかを管理するフラグ

// 各カード画像にクリックイベントを追加
cardImages.forEach(cardImage => {
  cardImage.addEventListener('click', () => {
    const cardId = cardImage.id; // クリックされたカードのIDを取得
    const cardSrc = `https://www.onepiece-cardgame.com/images/cardlist/card/${cardId}.png`; // カード画像のパス

    popupImage.src = cardSrc; // ポップアップにカード画像を設定
    popup.style.display = 'block'; // ポップアップを表示
    isPopupVisible = true; // ポップアップが表示されていることを示すフラグを設定

    // ポップアップ外のクリックを検知して閉じるイベントを追加
  });
});


// 閉じるボタンを押すイベント
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // ポップアップを非表示
  isPopupVisible = false; // フラグをリセットする
});

