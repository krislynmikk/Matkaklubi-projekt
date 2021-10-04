
function looMatkaHtml(matk) {
    return `
    <div class="col-md-4 card">
        <img class="card-img-top" src="${matk.pildiUrl}" alt="">
        <div class="card-body">
          <h4 class="card-title">${matk.nimetus}</h4>
          <p class="card-text">${matk.kirjeldus}</p>
          <a href="${matk.link}" class="btn btn-primary">Registreeru</a>
        </div>
      </div>
    `
}

const matk1 = {
    nimetus: "Soe jalgsimatk rannikul",
    kirjeldus: "Lähme kõnnime looduses",
    pildiUrl: './fotod/ookean.jpeg',
    link: './registreeru.html'
  
}
const matk2 = {
    nimetus: "Lindudega koos",
    kirjeldus: "Matkame läbi kauni roheluse",
    pildiUrl: './fotod/lind.jpeg',
    link: './registreeru.html'
}
const matk3 = {
    nimetus: "Tervendav metsailu",
    kirjeldus: "Avastame ajalugu läbi looduse",
    pildiUrl: './fotod/lill.jpeg',
    link: './registreeru.html'
}

const matkad = [matk1, matk2, matk3]


document.getElementById('matkad').innerHTML = ""

for (const matk of matkad) {
    document.getElementById('matkad').innerHTML += looMatkaHtml(matk)
}