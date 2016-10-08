#template

> 使用正则替换 实现template效果


----------


 - 引入

```
<script src="tempalte.js"></script>
```

 - 使用

```
var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';

document.getElementById('template').innerHTML = templateEngine(template, {
    name: "Karzan",
    profile: { age: 18 }
})
```

 - 效果

Hello, my name is Karzan. I\'m 18 years old.
