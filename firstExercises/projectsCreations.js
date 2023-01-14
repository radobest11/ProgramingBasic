function projectsCreations (input) {

let name = input[0];
let numberOfpojects = Number(input[1]);
let timeForoneProject = 3;
let totalWorkinghours = numberOfpojects * timeForoneProject;


console.log(`The architect ${name} will need ${totalWorkinghours} hours to complete ${numberOfpojects} project/s.`)

}

projectsCreations(["Sanya ",
"9 "]
)