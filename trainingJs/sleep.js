function sleep(time) {
  return new Promise(reslove => setTimeout(reslove,time));
}

sleep(3000).then(() => {
  console.log('sleep')
});