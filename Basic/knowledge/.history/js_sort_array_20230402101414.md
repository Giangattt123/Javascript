# Js sort

**Sort()** là một phương thức của đối tượng mảng trong JavaScript. Phương thức này được sử dụng để sắp xếp các phần tử trong mảng theo thứ tự tăng dần hoặc giảm dần và trả về mảng đã được sắp xếp.

> Syntax: array.sort(compareFunction)

Trong đó:

- **compareFunction** là một hàm tùy chọn được sử dụng để xác định cách sắp xếp các phần tử trong mảng. Hàm này có thể nhận vào hai tham số và trả về một giá trị số để xác định thứ tự sắp xếp. Nếu không truyền vào tham số compareFunction, phương thức sort() sẽ chuyển đổi các phần tử thành chuỗi và sắp xếp chúng theo thứ tự Unicode.
  > Phương thức sort() sẽ sắp xếp các phần tử trong mảng gốc và trả về mảng đã được sắp xếp. Mảng gốc sẽ bị thay đổi.

```
const arr = [3, 1, "10", true];
arr.sort();
console.log(arr); // Kết quả: [1, 10, 3, true]
```

Ở đây, mảng arr bao gồm các kiểu dữ liệu khác nhau như số, chuỗi và boolean. Khi gọi phương thức sort() mà không truyền vào tham số compareFunction, các phần tử trong mảng sẽ được chuyển đổi thành chuỗi sử dụng phương thức toString() tương ứng. Kết quả sắp xếp sẽ theo thứ tự Unicode của các chuỗi tương ứng.
Do đó, trong ví dụ trên, chuỗi "10" sẽ được sắp xếp trước số 3 vì ký tự "1" có mã Unicode nhỏ hơn ký tự "3". Các giá trị boolean true và số 1 đều được chuyển đổi thành chuỗi "true" và "1", nên chúng được sắp xếp cùng nhau và đứng trước chuỗi "10".

```
const arr =  [1 , 10 , 23 , 14 , 3 , 5 , 34];
arr.sort();
console.log(arr); // (7) [1, 10, 14, 23, 3, 34, 5]
```

Vì lí do này, nên khi ta sắp xếp các phần tửu của mảng theo dạng số sẽ đem lại kết quả không chính xác, bởi mặc định **sort()** sắp xếp giá trị theo strings.
Trong hàm **compareFunction**, nếu giá trị của a nhỏ hơn b, ta trả về một số âm, ngược lại nếu a lớn hơn b thì trả về một số dương. Nếu a bằng b thì trả về 0.

Vì vậy, khi phương thức sort() gọi hàm **compareFunction** để so sánh các phần tử trong mảng, nó sẽ sử dụng kết quả trả về của hàm compareFunction để quyết định vị trí của các phần tử. Nếu kết quả trả về là một số âm, thì phần tử a sẽ được đặt trước phần tử b, và nếu kết quả trả về là một số dương, thì phần tử b sẽ được đặt trước phần tử a. Nếu kết quả trả về là 0, thì các phần tử sẽ được giữ nguyên vị trí của chúng.

Trong đoạn code trên, hàm compareFunction trả về a - b, do đó các phần tử trong mảng arr sẽ được sắp xếp theo thứ tự tăng dần.

Cách viết ngắn gọn hơn bằng **arrow function**

```
const arr = [3, 1, 4, 2, 5];
arr.sort((a, b) => a - b);
console.log(arr); // Kết quả: [1, 2, 3, 4, 5]
```

## Sắp xếp các phần tửu trong mảng bằng thuật toán Burble Sort

Mã code thực hiện thuật toán

```
function burble_sort(a){
  let len = a.length;
  for(let i = 0 ; i < len - 1 ; i++){
    for(let j = 0 ; j < len - i - 1 ; j++){
      if(a[j] > a[j + 1]){
        let tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }
  return a;
}
```

Hình ảnh minh họa:

![image1](https://live.staticflickr.com/65535/52786926374_a35ab9faee.jpg)

> Ngoài ra chúng ta có thể sắp xếp bằng rất nhiều thuật toán khác nữa như : insertion , selection , quicksort , merge , counting , ....

## Sorting an Array in Random Order

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>
<p>Click the button (again and again) to sort the array in random order.</p>

<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
    const points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo").innerHTML = points;
    function myFunction() {
    points.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = points;
}
</script>
</body>
</html>
```
