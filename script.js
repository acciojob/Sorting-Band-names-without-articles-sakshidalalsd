let arr= ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let regpex=/\b the\b | \b an \b | \b a \b /gi;
let article=[];
let map={};
for(let i=0;i<arr.length;i++){
	let art=arr[i].replace(regpex ,"").trim();
	article.push(art);
	map[art]=arr[i];
}
  article.sort();
  let ans=[];
 for(let j=0;j<article.length;j++){
	 ans.push(mp[i]);
 }
console.log(ans);


