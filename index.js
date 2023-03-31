let dbUsers = [
    {
        username: "amrl",
        password: "sayahebat",
        name: "Amirul",
        email: "mirull01@gmail.com"
    },
    {
        username: "shfq",
        password: "sayatakhebat",
        name: "Shafiq",
        email: "shaffiq01@gmail.com"
    },
    {
        username: "wkwkwk",
        password: "hshshs",
        name: "hahaha",
        email: "hehehe@gmail.com"

    }
]

function login(username, password){
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if(matched) {
        if(matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }

    } else {
        return "Username not found"
    }
    
}

//try to login
login("shfq", "sayatakhebat")