// App.js will be used to call API to retrieve all posts.

$(document).ready( function(){

  // This is TEST Data for the Template.
  let posts =
  [{
    sidePostDate: 'Num 1',
    sidePostURL: '#',
    sidePostTitle: 'Understanding Primitives',
    sidePostContent: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types..."
  },
  {
    sidePostDate: 'Num 2',
    sidePostURL: '#',
    sidePostTitle: 'Understanding Primitives',
    sidePostContent: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types..."
  },
  {
    sidePostDate: 'Num 3',
    sidePostURL: '#',
    sidePostTitle: 'Understanding Primitives',
    sidePostContent: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types..."
  }];

  // Grab each Post object and iterate to publish to the page. 
  posts.forEach( post => {$('#sidebar > section > .divided').append(sidePostTemplate(post));});


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
            <h3><a href="${post.sidePostURL}">${post.sidePostTitle}</a></h3>
          </header>
          <p>${post.sidePostContent}
          </p>
        </article>
    </li>
    `
    return postHTML;
  }










});
