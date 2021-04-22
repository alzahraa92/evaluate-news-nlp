export function handleSubmit(event) {
    event.preventDefault();
    let url = document.getElementById('name').value;
    if (Client.checkUrl(url)) {
        let post = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ url: url })
    };
    fetch("http://localhost:8081/data", post)
    .then(res => res.json())
    .then( 
    alldata => {
        document.getElementById('agreement').innerHTML = `agreement: ${alldata.agreement}`;
        document.getElementById('subjectivity').innerHTML = `subjectivity: ${alldata.subjectivity}`;
        document.getElementById('confidence').innerHTML = `confidence: ${alldata.confidence}`;
        document.getElementById('irony').innerHTML = `irony: ${alldata.irony}`;
        document.getElementById('score_tag').innerHTML = `score_tag: ${alldata.score_tag}`;
    })
    } else {
        console.log('please check your URL')
    }
}