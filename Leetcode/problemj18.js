var hIndex = function(citations) {
    let h = citations.length;
    let atLeasth = 0;
    for(let i = citations.length - 1; i >= 0; i--){
        if(citations[i] >= h){
            atLeasth++;
        }
        if(h === atLeasth){
            return h;
        }
        if(h !== atLeasth && citations[i] < h){
            while(citations[i] < h){
                h = citations[i];
                if(citations[i] >= h){
                    atLeasth++;
                }
                if(atLeasth >= h){
                    return h;
                }
            }
        }
    }
    return h;
};

module.exports = () => console.log(hIndex([1,6,5,6,7]))