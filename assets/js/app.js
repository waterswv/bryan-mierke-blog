// App.js will be used to call API to retrieve all posts.

$(document).ready( function(){

  // This is TEST Data for the Template.
  let posts =
  [{
    sidePostDate: 'Jan 30',
    sidePostURL: '#',
    sidePostTitle: 'Understanding Primitives',
    sidePostContent: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types..."
  },
  {
    sidePostDate: 'Jan 2',
    sidePostURL: 'http://exploringjs.com/es6/ch_destructuring.html',
    sidePostTitle: 'Destructuring',
    sidePostContent: "Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used..."
  },
  {
    sidePostDate: 'Dec 3',
    sidePostURL: 'https://medium.com/@deniswells59/singly-linked-lists-with-javascript-81859a5a5095"',
    sidePostTitle: 'Singly Linked List',
    sidePostContent: "In a linked list, a node has a pointer to the next node. So, what would that look like in JS? We explore in this post..."
  }];

  let fact = {
    dailyFactTitle: `>Meet Google Home Max - Google's latest response to Amazon Alexa ...
    a constant battle in the tech-iverse to capture every ounce of human
    data by eavesdropping on all of our conversations. I hear... it has
    pretty great speakers too.`,
    dailyFactURL: 'https://waterswv.github.io'

  }

  // Grab each Post object and iterate to publish to the page.
  posts.forEach( post => {$('#sidebar > #sideposts > .divided').append(sidePostTemplate(post));});
  $('.divided > li > .dailyfact').append(dailyFactTemplate(fact));


  // Function to generate template HTML for each smaller sidePost.
  // function will place HTML in #sidebar section .divided divs.
  function sidePostTemplate(post){
    let postHTML =
    `
    <li>
      <!-- Excerpt -->
        <article class="box excerpt">
          <header>
            <span class="date">${post.sidePostDate}</span>
            <h3><a href="${post.sidePostURL}" target='_blank'>${post.sidePostTitle}</a></h3>
          </header>
          <p>${post.sidePostContent}
          </p>
        </article>
    </li>
    `
    return postHTML;
  }

  function dailyFactTemplate(fact){
    let postHTML =
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
    return postHTML;
  }

  function dailyWordTemplate(word){


  }

  function mainPostTemplate(post){


  }









});
