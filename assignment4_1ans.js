let findCommonElements = function(arr1, arr2, arr3) {
    const result = [];

   let i = 0;
   let j = 0;
   let k = 0;
    while(i < arr1.length && j < arr2.length && k < arr3.length) {
        if(arr1[i] == arr2[j] == arr3[k]) {
            result.add(arr1[i]);
            i++;
            j++;
            k++;
        } else if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return result;
}