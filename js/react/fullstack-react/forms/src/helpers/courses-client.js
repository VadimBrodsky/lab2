export const Courses = {
  core: [
  "javascripting",
  "git-it",
  "Scope Chains & Closures",
  "Elementary Electron",
  "learnyounode",
  "How to npm",
  "stream-adventure",
  "how-to-markdown"
  ],
  electives: [
  "Functional Javascript",
  "Level Me Up Scotty!",
  "ExpressWorks",
  "Make Me Hapi",
  "Promise It Won't Hurt",
  "Async You",
  "NodeBot Workshop",
  "Going Native",
  "Planet Proto",
  "WebGL Workshop",
  "ESNext Generation",
  "Test Anything",
  "Tower of babel",
  "learnyoumongo",
  "regex-adventure",
  "learn-sass",
  "Pattern Lab Workshop",
  "learnyoubash",
  "Currying in JavaScript",
  "Shader School",
  "Bytewiser",
  "Bug Clinic",
  "Browserify Adventure",
  "Intro to WebGL",
  "Count to 6",
  "Kick off Koa",
  "LololoDash",
  "learnyoucouchdb",
  "learnuv",
  "Learn Generators",
  "learnyoureact",
  "perfschool",
  "Web Audio School",
  "torrential",
  "Thinking in React",
  "Post-mortem debugging",
  "Seneca in practice",
  "LESS is more"
  ]
};

export default function apiClient(department) {
  return {
    then: function (cb) {
      setTimeout(() => { cb(Courses[department]); }, 1000);
    },
  };
}
