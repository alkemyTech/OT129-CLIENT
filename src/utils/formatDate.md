# ***FormatDate***

This component has two methods, **`formatDate`** and **`formatDateWithTime`**

## `1.` **`formatDate`**

- `date:` the date to be formatted. (string)

### Example:

```javascript
const created_at = "2022-02-10T19:04:33.000000Z"

<div>
    <p>{formatDate(created_at)}</p>
</div> 
```

### Result:

![](https://cdn.discordapp.com/attachments/940960224200753212/948287886887903292/date.jpg)

---

## `2.` **`formatDateWithTime`**

- `date:` the date to be formatted with time. (string)

### Example:

```javascript
const created_at = "2022-03-11T18:40:33.000000Z"

<div>
    <p>{formatDateWithTime(created_at)}</p>
</div> 
```

### Result:
![](https://cdn.discordapp.com/attachments/940960224200753212/948291052526268497/date.jpg)