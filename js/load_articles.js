let block = document.getElementById('mainBlock');

function getData(){
    fetch('./data/articles.json')
    .then(function(response){
        if(response.status !== 200){
            throw 'error';
        }
        console.log(response);
        return response.json();
    })
    .then(function(articleData) {
        let fragment = document.createDocumentFragment();

        let titleBlock = document.createElement('div');
        titleBlock.setAttribute('class', 'title-block');
        fragment.appendChild(titleBlock);

        let title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.textContent = articleData.block_title;
        titleBlock.appendChild(title);

        let articleBlock = document.createElement('div');
        articleBlock.setAttribute('class', 'articles-block');
        fragment.appendChild(articleBlock);

        articleData.data.forEach(item => {
            let article = document.createElement('div');
            article.setAttribute('class', 'article');
            articleBlock.appendChild(article);

            let image = document.createElement('img');
            image.setAttribute('class', 'article-image');
            image.setAttribute('src', item.image);
            image.setAttribute('alt', item.title);
            article.appendChild(image);

            let articleHeader = document.createElement('h3');
            articleHeader.setAttribute('class', 'article-header');
            articleHeader.textContent = item.title;
            article.appendChild(articleHeader);

            let articleText = document.createElement('p');
            articleText.setAttribute('class', 'article-detail');
            articleText.textContent = item.text;
            article.appendChild(articleText);
        });
        
        block.appendChild(fragment);
        
    })
    .catch(function(error){
        let errBlock = document.createElement('div');
        errBlock.setAttribute('class', 'error-block');

        let errCode = document.createElement('p');
        errCode.setAttribute('class', 'error-code');
        errCode.textContent = '404';

        let errMessage = document.createElement('p');
        errMessage.setAttribute('class', 'error-message');
        errMessage.textContent = 'Page Not Found';

        block.appendChild(errBlock);
        errBlock.appendChild(errCode);
        errBlock.appendChild(errMessage);
    })
}
getData();

