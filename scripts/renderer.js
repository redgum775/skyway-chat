const streams = document.getElementById('js-remote-streams');
const localStream = document.getElementById('js-local-stream');

// カメラ接続人数によって、レイアウトを変える処理
const renderer = (count) => {
  // 人数に応じてGridレイアウトを定義
  if(count == 1) {streams.style.gridTemplateColumns = '1fr'; streams.style.gridTemplateRows = '100%';}
  if(count == 2) {streams.style.gridTemplateColumns = '1fr 1fr'; streams.style.gridTemplateRows = '100%';}
  if(count == 3) {streams.style.gridTemplateColumns = '1fr 1fr'; streams.style.gridTemplateRows = '50% 50%';}
  if(count == 4) {streams.style.gridTemplateColumns = '1fr 1fr'; streams.style.gridTemplateRows = '50% 50%';}
};

// 
const ovserver = new MutationObserver((mutations) => {
  mutations.forEach((mutations) => {
    renderer(streams.childElementCount);
  });
});

const config = {
  childList: true,
};

ovserver.observe(streams, config);