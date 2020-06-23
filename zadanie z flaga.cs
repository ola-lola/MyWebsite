[W, R, R, R, W, W, W, W, R, R, W, W] => [W, W, W, W, W, W, W, R, R, R, R, R]

złożoność obliczeniowa: O(n)
złożoność pamięciowa: O(1)

O(n) ~ O(2n) ~ O(1/2 n) ~ O(10000000000 n)

O(n^ 0) = O(1)
O(n ^1) < O(n^2)



[W, W, ............, R, R]
     ^               ^
     l               r
     
array = [W, R, R, R, W, W, W, W, R, R, W, W];
     
left = 0;
right = array.length - 1;

while(left < right) {
  if (array[left] == 'W') left++;
	else
  if (array[right] == 'R') right--;
  else
if (array[left] == 'R' && array[right] == 'W') {
    pom = array[left];
    array[left] = array[right];
    array[right] = pom;
    left++;
    right--;
  }
}

[W, W W, R, R, R]
      ^  ^
      l  r

