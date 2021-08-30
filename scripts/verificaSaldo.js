module.exports = async function(endereço){
  console.log(await web3.eth.getBalance(endereço));
  return;
}