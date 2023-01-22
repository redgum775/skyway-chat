// 1秒後にjoinするスクリプト
const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

async function start() {
  await sleep(3000);
  document.getElementById('js-join-trigger').click(); 
}

start();
