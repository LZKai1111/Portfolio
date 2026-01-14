import pathfinding from "../assets/pathfinding.png"
import sort from "../assets/sort.png"
import NoExit from "../assets/NoExit.png"
import subscription from "../assets/subscription.jpg"

export const PROJECTS = [
    {
        url: "https://lzkai1111.github.io/Pathfinding-Visualizer/",
        picture: pathfinding,
        title: "Pathfinding Visualizer",
        description: `Pathfinding visualizer helps to visualize dijkstra's pathfinding algorithm. It also contains visualization for maze generation using depth-first search algorithm.`,
        tags: ["ReactJS", "JavaScript"],
    },
    {
        url: "https://lzkai1111.github.io/Sorting-Visualizer/",
        picture: sort,
        title: "Sorting Visualizer",
        description: `Sorting visualizer helps to visualize how sorting 
        algorithm such as merge, quick, heap and bubble sort works through 
        animations.`,
        tags: ["ReactJS", "JavaScript"],
    },
    {
        url: "https://github.com/LZKai1111/subscription-tracker",
        picture: subscription,
        title: "Subscription Tracker",
        description: `Subscription Tracker is a backend server that allows users to track their subscription services and send email reminders before it renews. It features user login with authenication, CRUD operations and security such as bot detection using Arcjet.`,
        tags: ["NodeJS", "ExpressJS", "MongoDB", "Arcjet"],
    },
    {
        url: "https://200140630.wixsite.com/lzkportfolio/no-exit",
        picture: NoExit,
        title: "No Exit VR Escape Room",
        description: `No Exit is a 90's themed single player virtual reality game where players must solve puzzles to free themselves from a trapped room. `,
        tags: ["Unity", "C++", "Game Design"]
    },
];