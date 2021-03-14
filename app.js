
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");

const github = new GitHub();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let username = nameInput.value.trim();

    if (username === "") {
        alert("Please enter username");
    } else {
        github.getGithubData(username)
            .then(resp => {
                if (resp.user.message === "Not Found") {
                    ui.showError("User not find");
                } else {
                    ui.showUserInfo(resp.user);

                    ui.showRepoInfo(resp.repo);
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {


}

function getAllSearched() {


}