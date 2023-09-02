const user ={
    username: " hitesh",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome yo website`);
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()