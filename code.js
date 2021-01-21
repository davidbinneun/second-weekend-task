class Album {
    constructor(title, cover, announcement, release, criticScore, userScore){
        this.title = title; // Album title
        this.cover = cover; // Album cover 
        this.announcement = new Date(announcement); // Announcement date of the album
        this.release = new Date(release); // Release date of the album
        this.criticScore = criticScore; // Critic Score
        this.userScore = userScore; // User Score
        this.daysWaited = Math.floor((this.release - this.announcement) / (1000*60*60*24)); // Days waited from announcement to release
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

document.write('<h1>KANYE WEST ALBUMS</h1>');

// HTML Table start
document.write('<div><table>');
// Table Headers
document.write('<tr> <th>Cover</th> <th>Title</th> <th>Announcement</th> <th>Release</th> <th>Days Waited</th> <th>Critic Score</th> <th>User Score</th> <th>Score Difference</th></tr>');

// Creating table rows with data
for (album of albums){
    document.write('<tr>' + 
    '<td class="centertd"><img src="./covers/' + album.cover + '.jpg"></td>' +
    '<td class="title">' + album.title + '</td>' +
    '<td class="centertd">' + simplifyDate(album.announcement) + '</td>' +
    '<td class="centertd">' + simplifyDate(album.release) + '</td>' +
    '<td class=' + daysWaitedColor(album.daysWaited) + '>' + album.daysWaited + '</td>' +
    '<td class="centertd">' + album.criticScore + '</td>' +
    '<td class="centertd">' + album.userScore + '</td>' +
    '<td class=' + scoreDiffColor(album.scoreDiff) + '>' + album.scoreDiff + '%</tr>');
}

// HTML Table end
document.write('</table></div>');

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