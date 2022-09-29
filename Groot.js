let a=[1,2,3,2,1]
let b=6
let d=[];

let findPie=(a,b)=>{

    a=a.sort()
    console.log(a)
   let c= Math.floor(a.length/2)
    
        console.log(a[c])
        for(i=0;i<+a.length;i++){
            if(a[i]+a[i+1]==a[c]){
                 d=[a[i],a[i+1]];
                console.log(d)
            }
        }
    
}
findPie(a,b)
