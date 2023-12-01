var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "Youtuber", "Web Developer"],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});

const projectContainer = document.querySelector(".projects-container");

const items = [
  {
    id: 1,
    title: "Adventour",
    img: "./assets/adventour-collage-2.png",
    desc: `
        A beautifully animated and entirely user-specific website built on
        <b>React.js and Firebase</b> and many other CSS libraries and framework
        for design
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/firebase.svg",
      "./assets/bootstrap.svg",
      "./assets/json-server.png",
    ],
    live: "https://adventourr-masai.netlify.app/",
    github: "https://github.com/Faisal25DEC/adventour",
  },
  {
    id: 2,
    title: "BlogsTour.com",
    img: "./assets/medium-collage-1.png",
    desc: `
        A Complete <b>MERN Stack</b> blog website similar to <b>Medium.com</b>
        which supports CRUD operations and have entirely user specific features
        like comments, like, unlike, follows etc.
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/nodejs1.png",
      "./assets/redux.svg",
    ],
    live: "https://medium-blog-app-pi.vercel.app/",
    github: "https://github.com/Faisal25DEC/BlogTour",
  },
  {
    id: 5,
    title: "Socialms",
    img: "./assets/twitter-collage-2.png",
    desc: ` A full fledged social media platforms inpired by <b>Twitter</b> which supports messages, create posts edit profiles and users can send images in messages as well`,
    techStack: [
      "./assets/next.svg",
      "./assets/mongo.svg",
      "./assets/tailwind.svg",
      "./assets/prisma.svg",
      "./assets/firebase.svg",
    ],
    live: "https://twitter-clone-faisal25dec.vercel.app/",
    github: "https://github.com/Faisal25DEC/Socialms-twitter-inspired",
  },
  {
    id: 6,
    title: "Jotion",
    img: "./assets/jotion-collage.png",
    desc: ` A Note management platform inspired by Notion.com that incoporating features like <b>Nested children notes</b>, <b>Note smart restore</b>, publishing, deleting and full authorization and authentication`,
    techStack: [
      "./assets/next.svg",
      "./assets/convex.svg",
      "./assets/clerk.webp",
      "./assets/edgestore.png",
    ],
    live: "https://note-management-platform.vercel.app/",
    github: "https://github.com/Faisal25DEC/note-management-platform",
  },
  {
    id: 3,
    title: "Alcazar Travel Agency",
    img: "./assets/alcazar-collage-1.png",
    desc: ` 
        <b>User Specific Vanilla Javascript E-commerce website</b>, built on
        HTML, CSS, Javascript, Firebase and JSON-Server`,
    techStack: [
      "./assets/html.svg",
      "./assets/css.svg",
      "./assets/js.svg",
      "./assets/json-server.png",
      "./assets/firebase.svg",
    ],
    live: "https://alcazar-masai.netlify.app/pages/product",
    github: "https://github.com/Faisal25DEC/Alcazar-Travel-Agency",
  },
  {
    id: 4,
    title: "Instagram Clone",
    img: "./assets/instgram-collage-1.png",
    desc: `
        A complete working clone of Instagram where users can Create Posts,
        <b>Update their profiles</b>, and have all features of instagram
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/nodejs1.png",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/redux.svg",
    ],
    live: "https://instaclonevi.netlify.app/",
    github: "https://github.com/Faisal25DEC/Insta_Social",
  },
];

items.forEach((item, index) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  console.log(item.img);
  projectContainer.innerHTML += ` <article class="project-card best mix" data-order=${
    index + 1
  }>
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});
