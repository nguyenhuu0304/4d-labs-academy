export type CertificateDetails = {name:string;score:number;date:Date;id:string;demo:boolean};
const W=1600,H=1000;
function loadImage(url:string):Promise<HTMLImageElement>{return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=url})}
function fittedText(ctx:CanvasRenderingContext2D,text:string,maxWidth:number,initial:number,min:number,font='Arial'){
 let size=initial;do{ctx.font=`bold ${size}px ${font}`;if(ctx.measureText(text).width<=maxWidth||size<=min)break;size-=2}while(true);ctx.fillText(text,W/2,0)
}
export async function downloadCertificate(info:CertificateDetails){
 const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
 const c=canvas.getContext('2d');if(!c)throw new Error('Canvas unavailable');
 const bg=c.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#111822');bg.addColorStop(.5,'#080d14');bg.addColorStop(1,'#121923');c.fillStyle=bg;c.fillRect(0,0,W,H);
 try{const art=await loadImage('/certificate-hands.jpg');c.save();c.globalAlpha=.23;c.drawImage(art,0,310,W,500);c.restore()}catch{}
 c.fillStyle='rgba(5,10,17,.30)';c.fillRect(0,0,W,H);
 c.strokeStyle='rgba(180,199,223,.085)';c.lineWidth=1;for(let x=100;x<W;x+=80){c.beginPath();c.moveTo(x,105);c.lineTo(x,H-100);c.stroke()}for(let y=105;y<H-90;y+=80){c.beginPath();c.moveTo(80,y);c.lineTo(W-80,y);c.stroke()}
 c.strokeStyle='#b5c5dc';c.lineWidth=3;c.strokeRect(18,18,W-36,H-36);c.strokeStyle='rgba(196,214,237,.55)';c.lineWidth=1;c.strokeRect(38,38,W-76,H-76);
 for(const [x,y,sx,sy] of [[48,48,1,1],[W-48,48,-1,1],[48,H-48,1,-1],[W-48,H-48,-1,-1]] as const){c.save();c.translate(x,y);c.scale(sx,sy);c.strokeStyle='#e2eaf5';c.lineWidth=3;c.beginPath();c.moveTo(0,70);c.lineTo(0,0);c.lineTo(70,0);c.stroke();c.restore()}
 c.textAlign='center';c.textBaseline='middle';
 try{const logo=await loadImage('/certificate-logo.png');const width=330,height=width*logo.height/logo.width;c.drawImage(logo,(W-width)/2,62,width,height)}catch{c.fillStyle='#fff';c.font='bold 62px Arial';c.fillText('4Dlabs',W/2,115)}
 c.fillStyle='#b7c9df';c.font='24px Arial';c.fillText('4 D   L A B S   A C A D E M Y',W/2,210);
 c.fillStyle='#f7f9fc';c.font='bold 75px Georgia';c.fillText('Certificate of Completion',W/2,293);
 c.fillStyle='#b5c1d0';c.font='27px Arial';c.fillText('This certifies that',W/2,376);
 c.fillStyle='#fff';c.save();c.translate(0,475);fittedText(c,info.name.trim()||'Field Explorer',1050,68,35);c.restore();
 const line=c.createLinearGradient(520,0,1080,0);line.addColorStop(0,'transparent');line.addColorStop(.5,'#d7e8ff');line.addColorStop(1,'transparent');c.strokeStyle=line;c.lineWidth=2;c.beginPath();c.moveTo(520,532);c.lineTo(1080,532);c.stroke();
 c.fillStyle='#c5cfdd';c.font='27px Arial';c.fillText('has successfully completed the',W/2,598);
 c.fillStyle='#f7f9fd';c.font='bold 35px Arial';c.fillText('4D Labs Fundamentals Learning & Quiz',W/2,646);
 c.fillStyle='#c2cddc';c.font='24px Arial';c.fillText('and explored the foundations of Physical AI and robotics.',W/2,690);
 const positions=[330,800,1270];c.fillStyle='#f7f9fc';c.font='bold 36px Arial';c.fillText(`${info.score}/15`,positions[0],785);c.font='bold 31px Arial';c.fillText(info.date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),positions[1],785);c.font='bold 28px Arial';c.fillText(info.id,positions[2],785);
 c.fillStyle='#aab8cb';c.font='21px Arial';['Quiz score','Completion date','Certificate ID'].forEach((label,i)=>c.fillText(label,positions[i],828));
 c.strokeStyle='rgba(193,212,234,.5)';c.beginPath();c.moveTo(565,758);c.lineTo(565,837);c.moveTo(1035,758);c.lineTo(1035,837);c.stroke();
 c.fillStyle='#9daec3';c.font='19px Arial';c.fillText('Community learning certificate — not an official 4D Labs qualification.',W/2,903);
 if(info.demo){
  c.fillStyle='#9daec3';c.font='18px Arial';
  c.fillText('Practice certificate — quiz score not independently verified.',W/2,943);
 }

 const a=document.createElement('a');a.download=`4D-Labs-Academy-${info.demo?'DEMO-':''}${info.id}.png`;a.href=canvas.toDataURL('image/png');a.click();
}
