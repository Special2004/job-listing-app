const filterBtn = document.querySelector('.filter-btn')
const dropDown = document.querySelector('.dropdown')
const jobsDisplay = document.querySelector('.jobs')

// function to display filter
filterBtn.addEventListener('click', function(event){
    dropDown.classList.toggle('activee')
})

// data
const jobs = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python", "Django"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript", "HTML"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Ruby"],
      "tools": ["Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby", "C#"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript", "CSS"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "HTML"],
      "tools": ["React", "Sass"]
    }
  ]

//   function to load jobs
document.addEventListener('DOMContentLoaded', function(){
    jobsDisplay.innerHTML = jobs.map(function(item){
        return `<li class="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[40rem]">
        <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
        <div class="flex-1 flex items-center justify-between">
            <div>
          <div class="flex items-center gap-2">
            <h3 class="font-semibold text-base">${item.company}</h3>
            <span class="bg-teal-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">New!</span>
            <span class="bg-gray-800 text-white text-xs px-2 py-1 rounded-full uppercase">Featured</span>
          </div>
          <h2 class="text-teal-700 font-bold text-xl">${item.position}</h2>
          <p class="text-gray-500 text-sm">1d ago • Full Time • USA only</p>
          </div>
          <div class="flex gap-2 mt-2">
            <span class="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm">${item.languages[0]}</span>
            <span class="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm">${item.languages[1]}</span>
           
          </div>
        </li>
`
    }).join('')
})

// function to filter
function filterJobs() {
  const html = document.querySelector("#html").checked;
  const css = document.querySelector("#css").checked;
  const js = document.querySelector("#js").checked;
  const frontend = document.querySelector("#frontend").checked;
  const backend = document.querySelector("#backend").checked;
  const fullStack = document.querySelector("#fullstack").checked;
  const junior = document.querySelector("#junior").checked;
  const senior = document.querySelector("#senior").checked;

  // Filter jobs based on user input
  const filteredJobs = jobs.filter(job => {
      // Role filter
      const roleMatch =
          (frontend && job.role === "Frontend") ||
          (backend && job.role === "Backend") ||
          (fullStack && job.role === "Fullstack");

      // Level filter
      const levelMatch =
          (junior && job.level === "Junior") ||
          (senior && job.level === "Senior");

      // Languages filter
      const languageMatch =
          (html && job.languages.includes("HTML")) ||
          (css && job.languages.includes("CSS")) ||
          (js && job.languages.includes("JavaScript"));

      // Combine all conditions
      return (roleMatch || !frontend && !backend && !fullStack) &&
             (levelMatch || !junior && !senior) &&
             (languageMatch || !html && !css && !js);
  });

  // Update the jobs display
  jobsDisplay.innerHTML = filteredJobs.map(item => {
      return `<li class="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[40rem]">
          <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold">
              A
          </div>
          <div class="flex-1 flex items-center justify-between">
              <div>
              <div class="flex items-center gap-2">
                  <h3 class="font-semibold text-base">${item.company}</h3>
                  ${item.new ? `<span class="bg-teal-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">New!</span>` : ""}
                  ${item.featured ? `<span class="bg-gray-800 text-white text-xs px-2 py-1 rounded-full uppercase">Featured</span>` : ""}
              </div>
              <h2 class="text-teal-700 font-bold text-xl">${item.position}</h2>
              <p class="text-gray-500 text-sm">${item.postedAt} • ${item.contract} • ${item.location}</p>
              </div>
              <div class="flex gap-2 mt-2">
                  ${item.languages.map(lang => `<span class="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm">${lang}</span>`).join("")}
                  ${item.tools.map(tool => `<span class="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm">${tool}</span>`).join("")}
              </div>
          </div>
      </li>`;
  }).join('');
}

document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
  checkbox.addEventListener("change", filterJobs);
});




  
  