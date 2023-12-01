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
    img: "./pictures/adventour1.png",
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
    title: "Specialized",
    img: "./assets/medium-collage-1.png",
    desc: `
    Developed a fully functional replica of the "Specialized" website, a popular
    platform for purchasing bicycles and cycling accessories. This project was
    part of an educational initiative to deepen my skills in web development and
    e-commerce.
    Implemented core e-commerce functionalities, including product listings,
    shopping cart management, and secure checkout processes.
    Integrated a simulated payment system to mimic real-world transaction
    scenarios.
    Applied responsive design principles to optimize the user experience
    across various devices.
    
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/nodejs1.png",
      "./assets/redux.svg",
    ],
    live: "https://specialized-cycles.netlify.app/index.html",
    github: "",
  },
  {
    id: 5,
    title: "BigBasket",
    img: "./assets/twitter-collage-2.png",
    desc: ` Developed a comprehensive clone of the "BigBasket" website, a leading
    online grocery platform. This educational project aimed to enhance my
    proficiency in web development, e-commerce, and user experience design.
    Implemented dynamic features such as product catalog browsing, cart
    management, and an efficient checkout process. Integrated backend functionality for user authentication, order processing,
    and database management to simulate real-world e-commerce
    operations.`,
    techStack: [
      "./assets/next.svg",
      "./assets/mongo.svg",
      "./assets/tailwind.svg",
      "./assets/prisma.svg",
      "./assets/firebase.svg",
    ],
    live: "https://bigbasket-team02.netlify.app/",
    github: "",
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
