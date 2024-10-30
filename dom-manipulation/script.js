document.addEventListener('DOMContentLoaded',function(){
    const quotes = [
        {text :'The will of man is his happiness.', category : 'happiness'},
        {text :"All improv turns into anger. All comedy improv basically turns into anger, because that's all people know how to do when they're improvising. If you notice shows that are improvising are generally people yelling at each other." , category : 'anger'},
        {text :"Reason is an action of the mind knowledge is a possession of the mind but faith is an attitude of the person. It means you are prepared to stake yourself on something being so.", category : 'attitude'}
    ]

    function showRandomQuote(){
        const randomIndex = Math.floor(Math.random()*quotes.length) 
        const quoteDisplay = document.getElementById('quoteDisplay')
        const quote = quotes[randomIndex]
        quoteDisplay.innerHTML= `<p>${quote.text}</p><p>category: ${quote.category}</p>`
    }

    document.getElementById('newQuote').addEventListener('click', showRandomQuote);

    function addQuote(){
        const quoteText = document.getElementById('newQuoteText').value.trim()
        const quoteCategory = document.getElementById('newQuoteCategory').value.trim()

        if (quoteText && quoteCategory){
            quotes.push({text:quoteText , category:quoteCategory})
            document.getElementById('newQuoteText').value= ''
            document.getElementById('newQuoteCategory').value=''
            alert('New quote added !')
        }else{
            alert('please add a quote.')
        }
    }
    document.getElementById('addQuote').addEventListener('click', addQuote);
})