const findCount = (N, K, Arr) => 
{
    let count = 0;
    for(let i=0; i<N; i++)
    {
      if(Arr[i] == k){
      count= count+1;
      }
    }
    return count;
};
 
let N=4;
let k=3;
let Arr = [3,3,1,2];