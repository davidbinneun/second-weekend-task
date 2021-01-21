class Album {
    constructor(title, cover, announcement, release, criticScore, userScore){
        this.title = title;
        this.cover = cover;
        this.announcement = new Date(announcement);
        this.release = new Date(release);
        this.criticScore = criticScore;
        this.userScore = userScore;
        this.daysWaited = Math.floor((this.release - this.announcement) / (1000*60*60*24));
        this.scoreDiff = Math.abs(criticScore - userScore);
    }
}

function simplifyDate(date){
    let month = date.getUTCMonth() + 1; // months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
 
    return day + "/" + month + "/" + year;
}

let albums = []

albums.push(new Album('The College Dropout', 'tcd', 'October 23, 2002', 'February 10, 2004', 87, 83));
albums.push(new Album('Late Registration', 'lr', 'April 20, 2005', 'August 30, 2005', 85, 84));
albums.push(new Album('Graduation', 'graduation', 'May 11, 2007', 'September 11, 2007', 79, 81));
albums.push(new Album('808s & Heartbreak', '808s', 'September 24, 2008', 'November 24, 2008', 75, 78));
albums.push(new Album('My Beautiful Dark Twisted Fantasy', 'mbdtf', 'May 28, 2010', 'November 22, 2010', 94, 83));
albums.push(new Album('Watch The Throne', 'wtt', 'August 28, 2010', 'August 8, 2011', 76, 76));
albums.push(new Album('Yeezus', 'yeezus', 'May 1, 2013', 'June 18, 2013', 84, 76));
albums.push(new Album('The Life of Pablo', 'pablo', 'March 1, 2015', 'February 14, 2016', 75, 77));
albums.push(new Album('ye', 'ye', 'February 10, 2004', 'June 1, 2018', 64, 70));
albums.push(new Album('Kids See Ghosts', 'ksg', 'February 10, 2004', 'June 8, 2018', 84, 8.6));

document.write('<table>');
document.write('<tr> <th>Cover</th> <th>Title</th> <th>Announcement</th> <th>Released</th> <th>Days Waited</th> <th>Critic Score</th> <th>User Score</th> <th>Score Difference</th></tr>');
for (album of albums){
    document.write('<tr>' + 
    '<td><img src=./covers/' + album.cover + '.jpg><img></td>' +
    '<td>' + album.title + '</td>' +
    '<td>' + simplifyDate(album.announcement) + '</td>' +
    '<td>' + simplifyDate(album.release) + '</td>' +
    '<td>' + album.daysWaited + '</td>' +
    '<td>' + album.criticScore + '</td>' +
    '<td>' + album.userScore + '</td>' +
    '<td>' + album.scoreDiff + '</tr>');
}
document.write('</table>');