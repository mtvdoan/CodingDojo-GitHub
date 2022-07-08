### Useful Tip

> #### New lines
> 
> When printing strings, if you want to add a new line in the middle of your string, use `\n`. Try this out by doing this:
> 
> ```
> console.log("Hello, world!");
> console.log("Hello,\nworld!"); // Notice that the \n replaced the space here!
> ```
> 
> The expectd output of calling these functions is:
> 
> ```
> Hello, world!
> Hello,
> world!
> ```
> 
> `\n` is a special sequence of characters known as an escape sequence. There are others too, like `\t` for tab, and `\"` for when you want to insert a quote into your string. In this case though, all you need is `\n`.
> 
> #### Format strings
>
> Javascript has some special string formatting syntax that uses backticks (the key in the top left of your keyboard, above the tab key). For example:
> 
> ```
> var favoriteThing = "butts";
> console.log(`I love ${favoriteThing}!`);
> // prints "I love butts!"
> ```
> 
> You can also put expressions in the `${}`, like so:
> 
> ```
> var array = ["apples", "bananas", "carrots", "durians", "eggplant"];
> console.log(`Element number 2 is ${array[2]}!`);
> // prints "Element number 2 is carrots!"
> ```
> 
> [You can read more about it here](https://developer.chrome.com/blog/es6-template-strings/)