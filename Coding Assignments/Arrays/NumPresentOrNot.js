const Find_Num = (array,N,M) => 
{
  // let array = [1,2,3,4,5];
  // let N=5;
  // let M = 2;
  for(let i=0; i<N; i++)
  {
    if(array[i] == M)
    {
       return 'Yes'
    }
  }
  return "No"
};
 