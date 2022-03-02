# ***DangerouslySetInnerHTML***

This commponent recives a DOM element and removes the HTML tags leaving only the innerHTML content. 

### Example

```javascript
const element = <p>Lorem Ipsum dolor sit.</p>
<div>
    <h1>Hello, World!</h1>
    <h2>
        <DangerouslySetInnerHTML content={element} />
    </h2>
</div>
```

### Result
![plot](https://cdn.discordapp.com/attachments/940958737005420626/948047066255474718/Captura.JPG)
