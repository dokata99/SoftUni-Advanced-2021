class Story{

    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`
        }

        if(this._likes.length == 1){
            let obj = this._likes[0];
            return `${obj.username} likes this story!`;
        }
        let { firstPerson } = Object.values(this._likes)[0];
        let postLike = this._likes.length - 1
        return `${firstPerson} and ${postLike} others like this story!`
    }

    like(username){

        let user = this._likes.find(i => Object.values[i] == username)

        if(user){
            throw new Error("You can't like the same story twice!")
        }

        if(this.creator == username){
            throw new Error("You can't like your own story!")
        }

        this._likes.push({ username })
        return `${username} liked ${this.title}!`
    }

    dislike(username){

        let user = this._likes.find(i => Object.values(i) == username)
        
        if(user == undefined){
            throw new Error("You can't dislike this story!")
        }

        let indexOfUser = this._likes.indexOf(user)
        this._likes.splice(indexOfUser, 1)
        return `${username} disliked ${this.title}` 
    }

    comment (username, content, id){

        let commentSrch = this.comments.some(com => Object.values(com)[0] == id)
        if(id == undefined || commentSrch == false){
            let newID = this.comments.length + 1


            this.comments.push({id: newID, username, content, replies: {} })
            return `${username} commented on ${this.title}`
        }
        if(id && commentSrch){
            let commentToReply = this._comments.find(c => Object.values(c)[0] == id);
            commentToReply.replies[`${Number(id)}.${Number(Object.values(commentToReply.replies).length) + 1}`] = { id: `${Number(id)}.${Number(Object.values(commentToReply.replies).length) + 1}`, username, content };
            return "You replied successfully";
        }

    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John")
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
