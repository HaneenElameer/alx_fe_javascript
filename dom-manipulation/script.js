const quotes = [
    {text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
    {text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", category: "Individuality" },
    {text: "Life is what happens when you're busy making other plans.", category: "Life" },
    {text :'The will of man is his happiness.', category: 'happiness'},
    {text :"All improv turns into anger. All comedy improv basically turns into anger, because that's all people know how to do when they're improvising. If you notice shows that are improvising are generally people yelling at each other." , category: 'anger'},
    {text :"Reason is an action of the mind knowledge is a possession of the mind but faith is an attitude of the person. It means you are prepared to stake yourself on something being so.", category: 'attitude'}
];

function showRandomQuote (){
    const quoteDisplay = document.getElementById('quoteDisplay')
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quote =  quotes[randomIndex]

    quoteDisplay.innerHTML=`<p>${quote.text}</p><p> Category: ${quote.category}</p>`
}


function addQuote(){
    const newQuote = document.getElementById('newQuoteText').value.trim()
    const newCategory = document.getElementById('newQuoteCategory').value.trim()

    if(newQuote && newCategory ){
        quotes.push({text: newQuote, category: newCategory})
        document.getElementById('newQuoteText')= ''
        document.getElementById('newQuoteCategory')= ''
    }else{
        alert('please enter a quote !.')
    }
}
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('newQuote').addEventListener('click', showRandomQuote)
})


