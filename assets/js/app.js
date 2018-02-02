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

  // Grab each Post object and iterate to publish to the page.
  posts.forEach( post => {$('#sidebar > #sideposts > .divided').append(sidePostTemplate(post));});


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










});
