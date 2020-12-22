export interface userList {
    getUserList : [{

        _id: string,
        username: string,
        password: string
    }]
}

export interface userRegister {
    verificationUsernamePresentInbase : boolean
}