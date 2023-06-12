function BinarySearch(arr, keyValue) {
    let midOfArr=Math.floor(arr.length/2);
    while(arr[midOfArr]!==keyValue&&midOfArr!==arr.length-1&&midOfArr!==0){
        
        if(arr[midOfArr]<keyValue){
            let pointerMove=Math.floor((arr.length-1-midOfArr)/2)+1;
            midOfArr+=pointerMove;

        }else{

            let pointerMove=Math.floor(midOfArr/2);
            midOfArr-=pointerMove;
        }
    }
    if (arr[midOfArr] === keyValue) {
        return midOfArr;
    } else {
        return -1;
    }
}
