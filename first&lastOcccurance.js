function firstLastOccur(nums,target) {
    let first = 0;
    let last = nums.length-1;
    let ans=[];
    ans[0]=-1;
    ans[1]=-1;
    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);
        let currentVal = nums[mid];
        if(currentVal==target){
            ans[0]=mid;
            last=mid-1;
        }
        else if(currentVal>target) {
            last = mid-1;
        }
        else if(currentVal<target){
            first = mid+1;
        }
    }
    first = 0;
     last = nums.length-1;
    while(first<=last){
        let mid = Math.floor(first+(last-first)/2);
        let currentVal = nums[mid];
        if(currentVal==target){
            ans[1]=mid;
            first=mid+1;
        }
        else if(currentVal>target) {
            last = mid-1;
        }
        else if(currentVal<target){
            first = mid+1;
        }
    }
  
  
      return ans[1]-ans[0]+1;
  
    
}

let array = [1,2];
console.log(firstLastOccur(array,1));