const posts = [
  { title: 'post One', body: 'This is post one' },
  { title: 'post Two', body: 'This is post two'}
]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error! Something is wrong!');
      }
    }, 2000);
  })
}

//   async function init() {
//       await createPost({title: 'post Three', body: 'This is post three'});
//       getPosts();
//   }

//   init();

// async/await/fetch

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  const data = await res.json();
  data.forEach(user => console.log(user.name));
}

fetchUsers();