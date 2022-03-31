//college data
let college = [
  {
    title: "Towson University",
    location: "Towson, Maryland",
    studentSize: "19,458",
    collegeSize: 320,
    type: "Public",
    aid: "18,750",
    majors: [
      "Business Administration",
      " Management and Operations",
      "Communication and Media Studies",
      "Psychology",
    ],
  },
  {
    title: "Massachusetts Institute of Technology",
    location: "Cambridge, Massachusetts",
    studentSize: 4516,
    collegeSize: 168,
    type: "Private",
    aid: "13,418",
    majors: ["Computer Science", "Mechanical Engineering", "Mathematics"],
  },
  {
    title: "Harvard University",
    location: "Cambridge, Massachusetts",
    studentSize: 7547,
    collegeSize: 5076,
    type: "Private",
    aid: "12,665",
    majors: ["Computer Science", "History", "Economics"],
  },
  {
    title: "University of Maryland",
    location: "College Park, Maryland",
    studentSize: 42888,
    collegeSize: 1335,
    type: "Public",
    aid: "13,418",
    majors: [
      "Information Science/Studies",
      "Business Administration",
      "Computer/Information Technology Administration and Management",
    ],
  },
  {
    title: "George Mason University",
    location: "Fairfax, Virginia",
    studentSize: 26013,
    collegeSize: 817,
    type: "Public",
    aid: "19,750",
    majors: [
      "Computer and Information Sciences",
      "Criminal Justice and Corrections",
      "Psychology",
    ],
  },
  {
    title: "United States Naval Academy",
    location: "Annapolis, MD",
    studentSize: 4538,
    collegeSize: 338,
    type: "Public",
    aid: "0",
    majors: [
      "Economics",
      "Political Science and Government",
      "Systems Engineering",
    ],
  },
];
//popup
const popupButton = document.querySelector(".container");
const popup = document.querySelector(".popup-mask");

popupButton.addEventListener("click", (e) => {
  if (e.path.some((elem) => elem.id === "one")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[0].title}</h3>
        <p class="place">${college[0].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[0].majors[0]}</li>
              <br />
              <li>${college[0].majors[1]}</li>
              <br />
              <li>${college[0].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[0].studentSize} Students</p>
            <br />
            <p>College Size: ${college[0].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[0].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[0].aid}</p>
        </div>
    `;
  } else if (e.path.some((elem) => elem.id === "two")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[1].title}</h3>
        <p class="place">${college[1].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[1].majors[0]}</li>
              <br />
              <li>${college[1].majors[1]}</li>
              <br />
              <li>${college[1].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[1].studentSize} Students</p>
            <br />
            <p>College Size: ${college[1].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[1].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[1].aid}</p>
        </div>
    `;
  } else if (e.path.some((elem) => elem.id === "three")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[2].title}</h3>
        <p class="place">${college[2].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[2].majors[0]}</li>
              <br />
              <li>${college[2].majors[1]}</li>
              <br />
              <li>${college[2].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[2].studentSize} Students</p>
            <br />
            <p>College Size: ${college[2].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[2].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[2].aid}</p>
        </div>
    `;
  } else if (e.path.some((elem) => elem.id === "four")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[3].title}</h3>
        <p class="place">${college[3].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[3].majors[0]}</li>
              <br />
              <li>${college[3].majors[1]}</li>
              <br />
              <li>${college[3].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[3].studentSize} Students</p>
            <br />
            <p>College Size: ${college[3].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[3].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[3].aid}</p>
        </div>
    `;
  } else if (e.path.some((elem) => elem.id === "five")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[4].title}</h3>
        <p class="place">${college[4].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[4].majors[0]}</li>
              <br />
              <li>${college[4].majors[1]}</li>
              <br />
              <li>${college[4].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[4].studentSize} Students</p>
            <br />
            <p>College Size: ${college[4].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[4].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[4].aid}</p>
        </div>
    `;
  } else if (e.path.some((elem) => elem.id === "six")) {
    popup.style.display = "block";
    document.querySelector(".popup").innerHTML = `
        <h3>${college[5].title}</h3>
        <p class="place">${college[5].location}</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          morbi blandit cursus risus at ultrices mi. Sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
        <div class="majors">
          <div>
            <p>Majors</p>
            <br />
            <ul>
              <li>${college[5].majors[0]}</li>
              <br />
              <li>${college[5].majors[1]}</li>
              <br />
              <li>${college[5].majors[2]}</li>
            </ul>
          </div>
          <div>
            <p>Student Size: ${college[5].studentSize} Students</p>
            <br />
            <p>College Size: ${college[5].collegeSize} Acres</p>
            <br />
            <p>Type: ${college[5].type}</p>
          </div>
        </div>
        <div class="data-box">
          <p>Avergage Aid</p>
          <p>$${college[5].aid}</p>
        </div>
    `;
  } else {
    popup.style.display = "none";
  }
});

popup.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    popup.style.display = "none";
  }
});
