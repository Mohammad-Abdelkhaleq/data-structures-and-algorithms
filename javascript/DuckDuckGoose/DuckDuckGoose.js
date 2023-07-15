function DuckDuckGoose(array, k){
    let rounds = array.length/k;
    let index = 0;
    while(array.length > 1){
        let leftOvers = array.length-index % k;
        for(let i = 0; i < leftOvers; i++){
            array.splice(index+k-1, 1);
            index = index+k-1;
        }
        index = k_1-leftOvers;
        rounds=array.length-(index+1)/k;
}
}

