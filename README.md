# one-endpoint

Just an endpoint to test *Async/Await* logic.



## URL

**Endpoint:** [https://one-endpoint.herokuapp.com/message?m=JavaScript&s=4](https://one-endpoint.herokuapp.com/message?m=JavaScript&s=4)



## Usage

```
GET /message?m=JavaScript&s=4
```

> Returns
>
> ```js
> {
>     message: "JavaScript"
> }
> ```
>
> After 4 seconds.

---

| Query | Abbreviation | Description                                                  |
| ----- | ------------ | ------------------------------------------------------------ |
| **m** | message      | Type the message to send back.                               |
| **s** | seconds      | The amount of seconds to wait before sending back the message. |



## LICENSE

MIT
