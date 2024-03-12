 let btc=document.getElementById("bitcoin")
 let et=document.getElementById("ethereum")
 let dc=document.getElementById("dogecoin")
 let ca=document.getElementById("cardano")
 let pd=document.getElementById("polkadot")
 let lc=document.getElementById("litecoin")
 let so=document.getElementById("solana")
 let th=document.getElementById("tether")
 var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Cpolkadot%2Ccardano%2Csolana%2Clitecoin%2Cquant&vs_currencies=inr",
    "method":"GET",
    "header":{}
 }
 $.ajax(settings).done(function(response){
 btc.innerHTML=response.bitcoin.inr;
 et.innerHTML=response.ethereum.inr;
 dc.innerHTML=response.dogecoin.inr;
 ca.innerHTML=response.cardano.inr;
 pd.innerHTML=response.polkadot.inr;
 lc.innerHTML=response.litecoin.inr;
 so.innerHTML=response.solana.inr;
 th.innerHTML=response.tether.inr;
 })