const Find_Prod = (array, N) => 
{
// let array = [1,2,3,4,5]; 
 let res = 1;
// let N=5;
   for(let i=0; i<N; i++)
      res=res * array[i];
   return res;
};