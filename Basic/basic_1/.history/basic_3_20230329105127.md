# Js Strings

> JavaScript strings are for storing and manipulating text, a JavaScript string is zero or more characters written inside quotes.

```
    let text = "Giang"; // declare a variable text , assign value : Giang
    console.log(text); => Giang
    console.log(text.length); => 5

```

### Js EsCape Character

> A JavaScript string is zero or more characters written inside quotes.
> Solution: **backslash escape character**(dấu ngoặc chéo ngược)

```
    Problem: let text = "We are the so-called "Vikings" from the north.";
    Solve: let text = "We are the so-called \"Vikings\" from the north.";
```

### Breaking Long Code Lines

### JavaScript Strings as Objects

Normally, JavaScript strings are primitive values, created from literals:

```
    let x = "Giang";
    console.log(typeof(x)) => string
```

But strings can also be defined as objects with the keyword **new**:

```
    let y = new String("Giang");
    console.log(typeof(y)); => object
```

> Không thể so sánh các đối tượng JavaScript.

```
    let x = new String("John");
    let y = new String("John");
    console.log(x == y); => false
    console.log(x === y); => false
```

### String Properties and Methods

- charAt() => Returns the character at a specified index (position)
  > Syntax: **string.charAt(index)**

```
    let name = "Giang";
    let y = name.charAt(0);
    console.log(y); => G
```

- charCodeAt() => returns the Unicode of the character at a specified index (position) in a string.
  > Syntax: **string.charCodeAt(index)**

```
    let y = "A"
    console.log(y.charCodeAt(0)); => 65
```

- charPointAt() => similar charCodeAt()
- concat() => Returns two or more joined strings
  > Syntax: **string.concat(string1, string2, ..., stringX)**

```
    let text1 = "Hello";
    let text2 = "world!";
    let text3 = "Have a nice day!";
    let result = text1.concat(" ", text2, " ", text3);
    console.log(result); => Hello world! Have a nice day!
```

> Chú ý: The concat() method does not change the existing strings, returns a new string.

- constructor => Returns the string's constructor function

Trong JavaScript, một constructor string là một hàm dùng để tạo ra một đối tượng chuỗi (string).Bạn có thể tạo một constructor string bằng cách sử dụng cú pháp function như sau:

```
    function MyString(value) {
        this.value = value;
        this.length = value.length;
        this.toupper = function(){
            return value.toUpperCase();
        }
    }
    let myString = new MyString('Hello world!');
    console.log(myString.value); // 'Hello world!'
    console.log(myString.length);
    console.log(myString.toupper());
    console.log(myString.value.constructor);
```

Trong constructor string này, chúng ta định nghĩa một thuộc tính "value" để lưu trữ giá trị của chuỗi. Bằng cách sử dụng từ khóa "this", chúng ta đang tạo một tham chiếu đến đối tượng hiện tại.

Để tạo một đối tượng chuỗi mới từ constructor string, bạn có thể sử dụng từ khóa "new" như sau:

```
    let myString = new MyString('Hello world!');
    console.log(myString.value); // 'Hello world!'
```

Trong ví dụ này, chúng ta đã tạo một đối tượng chuỗi mới từ constructor string "MyString" và truyền vào giá trị "Hello world!". Khi gọi thuộc tính "value" của đối tượng này, chúng ta sẽ nhận được chuỗi "Hello world!".

- endsWith() => returns true if a string ends with a specified string, otherwise it returns false.
  > Syntax: **str.endsWith(searchString[, length])**

```
    const str = 'Hello world';
    console.log(str.endsWith('world')); // true
    console.log(str.endsWith('world', 5)); // false
```

Ở ví dụ trên, phương thức endsWith() trả về true khi kiểm tra chuỗi str kết thúc bằng chuỗi 'world'. Trong khi đó, khi bạn chỉ định độ dài của chuỗi str là 5, phương thức trả về false vì chuỗi 'world' không phải là chuỗi kết thúc của 5 ký tự đầu tiên của chuỗi str.

- startsWith() => method returns true if a string starts with a specified string, Otherwise it returns false.
  > Syntax: **string.startsWith(searchValue, start)**

```
    let str = "Phùng Đức Giang";
    let x = str.startsWith("Đức" , 6);
    console.log(x)
```

- includes: method returns true if a string contains a specified string, Otherwise it returns false.

  > Syntax: **string.includes(searchvalue, start)**

  ```
    let str = "Hello ptit svatt";
    let x = str.includes("ptit" , 6);
    console.log(x)
  ```

- indexOf : method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

> Syntax: **string.indexOf(searchvalue, start)**

```
    let str = "Hello ptit svatt";
    let x = str.indexOf("t");
    console.log(x); => 7
```

- lastIndexOf() => method returns the index (position) of the last occurrence of a specified value in a string, method searches the string from the end to the beginning, method returns -1 if the value is not found.
