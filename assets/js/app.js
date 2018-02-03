// App.js will be used to call API to retrieve all posts.

$(document).ready( function(){


  // Grab each Post object and iterate to publish to the page.
  // posts.forEach( post => {$('#sidebar > #sideposts > .divided').append(sidePostTemplate(post));});
  // $('.divided > li > .dailyfact').append(dailyFactTemplate(fact));
  // $('.divided > li > .dailyword').append(dailyWordTemplate(word));
  // $('#content > .mainpost').append(mainPostTemplate(mainPost));

  /*
  AJAX Calls for pulling in Posts, Word, Fact for each webpage.
  */
$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/post',
  success: onSuccessGeneratePosts
});

$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/fact',
  success: onSuccessGenerateFacts
});

$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/word',
  success: onSuccessGenerateWords
});

/*
Handling Functions built to generate HTML Snippets for each post,
side-post, Factoid, and Word section on the blog.
*/

  function onSuccessGeneratePosts(posts){

    console.log(posts);

  }
  function onSuccessGenerateFacts(facts){

    console.log(facts);

  }
  function onSuccessGenerateWords(words){

    console.log(words);

  }
  // Function to generate template HTML for each smaller sidePost.
  // function will place HTML in #sidebar section .divided divs.
  function sidePostTemplate(post){
    let postHTML =
    `
    <li>
      <!-- Excerpt -->
        <article class="box excerpt">
          <header>
            <span class="date">${post.postDate}</span>
            <h3><a href="${post.postURL}" target='_blank'>${post.postTitle}</a></h3>
          </header>
          <p>${post.sidePostContent}
          </p>
        </article>
    </li>
    `
    return postHTML;
  }

  function dailyFactTemplate(fact){
    let factHTML =
    `
      <header>
        <h3><a href="#">Today in Facts</a></h3>
      </header>
      <a href="#" class="image left"><img src="images/pic06.jpg" alt="" /></a>
      <p>${fact.dailyFactTitle}</p>
      <ul class="actions">
        <li><a href="${fact.dailyFactURL}" class="button icon fa-file">Learn More</a></li>
      </ul>

    `
    return factHTML;
  }

  function dailyWordTemplate(word){
    let wordHTML =
    `
      <header>
        <h3><a href="#">Word of the Day!</a></h3>
      </header>
      <a href="#" class="image left"><img src="images/pic07.jpg" alt="" /></a>
      <p>Today's word of the day is <strong>${word.dailyWord}</strong></p>
      <ul class="actions">
        <li><a href="${word.dailyWordURL}" class="button icon fa-file" target='_blank'>Define It</a></li>
      </ul>

    `
    return wordHTML;
  }

  function mainPostTemplate(post){
    let postHTML =

    `
      <header>${post.postTitle}</header>
      ${post.postContent}
    `
    return postHTML;
  }









});
