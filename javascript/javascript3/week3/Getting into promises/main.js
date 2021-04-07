class Classmates {

    constructor(name, username) {
        this.name = name;
        this.username = username;
    }

    fetchRepositories() {
        fetch(`https://api.github.com/search/repositories?q=user:${this.username}`)
            .then(response => response.json())
            .then((repositories) => {
                console.log(repositories);
                this.renderRepositories(repositories);
            })
    }

    renderRepositories(data) {
        const title = document.createElement("h2");
        title.innerHTML = `${this.name}'s Repositories:`;
        const body = document.querySelector("body");
        body.appendChild(title);

        data.items.forEach(repository => {
            const repoUl = document.createElement("ul");
            const li = document.createElement("li");
            li.classList.add("list");
            li.innerHTML = `
          Repository name: ${repository.full_name}
          Repository URL: ${repository.url}
          Repository owner: ${repository.owner.login}`;
            repoUl.appendChild(li);
            body.appendChild(repoUl);
        });
    }
}

const classMate1 = new Classmates("Saide", "Saidemm");
const classMate2 = new Classmates("Gohar", "Gohar33");
const classMate3 = new Classmates("Slavia", "SlaviaF");
const classMate4 = new Classmates("Islam", "islam-fawzy25");
const classMate5 = new Classmates("Karolina", "shpomp");
const classMate6 = new Classmates("Natalia ", "NatsGt");
const classMate7 = new Classmates("Diny", "dinythomas89");
const classMate8 = new Classmates("Seena", "seenachacko");
const classMate9 = new Classmates("Bhuvaneshwari", "Bhuvaneshwari29");
const classMate10 = new Classmates("Maha", "mahakarzoun");
const classMate11 = new Classmates("Darinka", "DarinkaGM");
const classMate12 = new Classmates("Rasim", "Rasim-Deniz");
const classMate13 = new Classmates("Adnan", "adnan832");
const classMate14 = new Classmates("Shan", "shanhaider23");
const classMate15 = new Classmates("Wencho", "WENCHO22");

function fetchAllATOnce() {
    Promise.all([
        classMate1.fetchRepositories(),
        classMate2.fetchRepositories(),
        classMate3.fetchRepositories(),
        classMate4.fetchRepositories(),
        classMate5.fetchRepositories(),
        classMate6.fetchRepositories(),
        classMate7.fetchRepositories(),
        classMate9.fetchRepositories(),
        classMate10.fetchRepositories(),
        classMate11.fetchRepositories(),
        classMate12.fetchRepositories(),
        classMate13.fetchRepositories(),
        classMate14.fetchRepositories(),
        classMate15.fetchRepositories()
    ])
        .then(console.log("All the fetches have been done"))
        .catch(Error => {
            console.log(Error);
        })
}

fetchAllATOnce();