// Researched mdn for async/await
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

//2
async function randomCat(){
    //3
    let fetchCat = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
    //4
    let catObject = fetchCat.url;
    //5
    console.log(catObject);
}
//6
randomCat()

/*
    Thinking
        1. This program fetches a random cat photo. I grab the URL of this and print it to the console.
        2. Creating an asynchronous function named "randomCat" which I'll use to fetch and output the URL of my random cat photo when called.
        3. Using the fetch keyword to grab our image from the link enclosed inside it. We store this inside a variable "fetchCat". "await" keyword used to ensure the computer fetches the link first before proceeding to the next step.
        4. If our call is successful, we extract the URL from our fetch call and store it in a new variable named "catObject".
        5. The URL stored in "catObject" output to the console.
        6. Calling our function to ensure it works.
*/