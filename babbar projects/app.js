class User {
    constructor(email, password){
        this.email =email;
        this.password =password
    }
    get password(){
        return this.password.toUpperCase()
    }
}

const hitesh = new User("h@hitesh.ai","0123")
console.log(hitesh.password)