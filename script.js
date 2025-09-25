/* page setup */
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 0;
    margin: 0;
}

/* all pages header */
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2E2E4E; /* dark blue */
    color: white;
    padding: 10px 20px;
}

header img {
    vertical-align: middle;
}

header nav a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

header nav a:hover {
    color: #742C36; /* red */
}





/* homepage title */
h1 {
    color: #2E2E4E;
    text-align: center;
    margin: 20px 0;
}

/* homepage sections */
section {
    width: 90%;
    text-align: center;
    margin: 20px auto;
}

/* homepage promos */
.promos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    gap: 15px;
}

.promos div {
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    width: 150px;
    text-align: center;
}

/* homepage featured */
.featured {
    text-align: center;
}

.featured img {
    display: block;
    margin: 0 auto;
}

.featured button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #742C36; /* red */
    color: white;
    cursor: pointer;
}

.featured button:hover {
    background-color: #5C2E5C; /* purple */
}

/* homepage membership */
.membership {
    margin: 30px auto;
    max-width: 900px;
    background-color: #fff;
    border: 2px solid #2E2E4E;
    padding: 25px;
}
.membership h2 {
    margin-bottom: 20px;
    text-align: center;
}

.perks {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 15px;
}

.perks div {
    width: 180px;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
    padding: 15px;
}

/* homepage categories */
.cats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
    max-width: 800px;
    gap: 15px;
}

.cats div {
    width: 200px;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;
}







/* gallery page formatting */
.row1 {
    display: flex;
    background: #fff;
    align-items: center;
    margin: 15px auto;
    border: 1px solid #ccc;
    max-width: 900px;
    padding: 15px;
    justify-content: space-between;
}
.gImage img {
    max-width: 100px;
    height: auto;
}

.gInfo {
    flex: 1;
    text-align: left;
    margin: 0 20px;
}

.gAction button {
    padding: 10px 15px;
    border: none;
    background-color: #742C36; /* red */
    color: white;
    cursor: pointer;
}

.gAction button:hover {
    background-color: #5C2E5C; /* purple */
}







/* about page with picture */
.about {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px auto;
    max-width: 1000px;
    gap: 20px;
}

.about div {
    flex: 1;
    text-align: left;
    background: #fff;
    border: 1px solid #ccc;
    padding: 15px;
}

/* about page info */
.addInfo {
    max-width: 950px;
    text-align: left;
    background: #fff;
    border: 1px solid #ccc;
    margin: 20px auto;
    padding: 15px;
}

/* about page hours */
.hours {
    max-width: 600px;
    text-align: left;
    background: #fff;
    border: 1px solid #ccc;
    margin: 20px auto;
    padding: 15px;
}

/* about page contact us */
.contact {
    max-width: 600px;
    background: #fff;
    border: 1px solid #ccc;
    margin: 20px auto;
    padding: 20px;
}

.contact input,
.contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
}
.contact button {
    margin: 10px;
    padding: 10px 20px;
    background: #742C36; /* red */
    color: white;
    cursor: pointer;
    border: none;
}

.contact button:hover {
    background: #5C2E5C; /* purple */
}








/* Club + Events two-column layout */
.clubLayout {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px auto;
    width: 90%;
    gap: 20px;
}

.clubBox {
    flex: 2;
}

.clubBox section {
    display: flex;
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
}

.clubPic {
    margin-right: 15px;
}

.clubJoin {
    background-color: #742C36;
    color: white;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
}

.clubJoin:hover {
    background-color: #5C2E5C;
}

/* Events sidebar */
.events {
    flex: 1;
    background: #fff;
    border: 2px solid #2E2E4E;
    padding: 15px;
}

.events h2 {
    text-align: center;
    color: #2E2E4E;
    margin-bottom: 15px;
}

.events div {
    background: #f9f9f9;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}








/* all pages newsletter */
.newsletter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;
}

.newsletter img {
    display: inline-block;
}

/* all pages footer */
footer {
    background-color: #2E2E4E;
    text-align: center;
    padding: 10px;
}

footer a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
}

footer a:hover {
    color: #742C36;
}
