class Album {
    constructor(title, cover, announcement, release, criticScore, userScore){
        this.cover = cover; // Album cover 
        this.title = title; // Album title
        this.announcement = new Date(announcement); // Announcement date of the album
        this.release = new Date(release); // Release date of the album
        this.daysWaited = Math.floor((this.release - this.announcement) / (1000*60*60*24)); // Days waited from announcement to release
        this.criticScore = criticScore; // Critic Score
        this.userScore = userScore; // User Score
        this.scoreDiff = Math.floor(Math.abs(100 - ((criticScore / userScore) * 100))); // Difference between critic score and user score
    }
}

/*
Filling the array with album data
*/

let albums = [];

albums.push(new Album('The College Dropout', 'tcd', 'October 23, 2002', 'February 10, 2004', 87, 83));
albums.push(new Album('Late Registration', 'lr', 'April 20, 2005', 'August 30, 2005', 85, 84));
albums.push(new Album('Graduation', 'graduation', 'May 11, 2007', 'September 11, 2007', 79, 81));
albums.push(new Album('808s & Heartbreak', '808s', 'September 24, 2008', 'November 24, 2008', 75, 78));
albums.push(new Album('My Beautiful Dark Twisted Fantasy', 'mbdtf', 'May 28, 2010', 'November 22, 2010', 94, 83));
albums.push(new Album('Watch The Throne', 'wtt', 'August 28, 2010', 'August 8, 2011', 76, 76));
albums.push(new Album('Yeezus', 'yeezus', 'May 1, 2013', 'June 18, 2013', 84, 76));
albums.push(new Album('The Life of Pablo', 'pablo', 'March 1, 2015', 'February 14, 2016', 75, 77));
albums.push(new Album('ye', 'ye', 'May 31, 2018', 'June 1, 2018', 64, 70));
albums.push(new Album('Kids See Ghosts', 'ksg', 'June 5, 2018', 'June 8, 2018', 84, 86));

/*
Constructing the HTML Page
*/

// Page title
let title = document.createElement("h1");
let titleText = document.createTextNode("Kanye West - Album Recap (no document.write)"); 
title.appendChild(titleText); 
document.body.appendChild(title);

// Creating the main div and the table inside of it
let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");


// Inserting the table headers to the table
tableHeaders = ['Cover', 'Title', 'Announcement', 'Release', 'Days Waited', 'Critic Score', 'User Score', 'Score Difference'];
let row = document.createElement("tr");
for (header of tableHeaders) {
    let cell = document.createElement("th");
    let cellText = document.createTextNode(header);
    cell.appendChild(cellText);
    row.appendChild(cell);
}
tblBody.appendChild(row);

// Inserting the values to the table
for (album of albums) { // Goes through all the album objects
    let row = document.createElement("tr"); // Creates new row

    for (property in album) { // Goes through the properties of the album
        let cell = document.createElement("td");
        cell.classList.add('centertd'); // Basic style

        if (property === 'cover'){ // Inserts cover photo to cell
                let image = document.createElement('img');
                image.src = './covers/' + album[property] + '.jpg';
                cell.appendChild(image);
        } else { // Inserts text to cell
            if (property === 'announcement' || property === 'release'){ // Inserts date object in a readable format
                let cellText = document.createTextNode(simplifyDate(album[property])); 
                cell.appendChild(cellText);
            } else { // Inserts regular text
                let cellText = document.createTextNode(album[property]);
                cell.appendChild(cellText);
            }
        }

        // Different style for special cells
        if (property === 'daysWaited')cell.classList.add(daysWaitedColor(album[property])); // Different style for daysWaited cell

        if (property === 'scoreDiff') cell.classList.add(scoreDiffColor(album[property])); // Different style for scoreDiff cell

        if (property === 'title')  cell.classList.remove('centertd'); // Different style for title cell

        row.appendChild(cell); // Inserts the cell into the row
    }
  
    tblBody.appendChild(row); // Inserts the row into the table body
}
  
tbl.appendChild(tblBody); // Inserts the table body into the table
mainDiv.appendChild(tbl); // Inserts the table into the main div

/*
Functions
*/

// Receives a date object, returns a string of the date in the Israeli format
function simplifyDate(date){ 
    let month = date.getUTCMonth() + 1; // months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    return day + "/" + month + "/" + year;
}

// Receives days waited from announcement to release, returns a string (which is the class for the table cell)
function daysWaitedColor(days){
    if (days < 10) return "greentd";
    else if (days < 100) return "centertd";
    else if (days < 200) return "yellowtd";
    else return "redtd";
}

// Receives difference betwen critic and user score, returns a string (which is the class for the table cell)
function scoreDiffColor(diff){
    if (diff < 3) return "centertd";
    else if (diff < 5) return "lightbluetd";
    else if (diff < 10) return "bluetd";
    else return "darkbluetd";
}