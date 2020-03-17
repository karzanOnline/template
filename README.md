## template

使用正则替换,实现类ejs模板语法变量替换


----------


 - 引入

```js
<script src="tempalte.js"></script>
```

 - 使用

```jsx
var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';

document.getElementById('template').innerHTML = templateEngine(template, {
    name: "Karzan",
    profile: { age: 18 }
})
```

 - 替换效果
 ```js
 
Hello, my name is Karzan. I\'m 18 years old.

 ```


