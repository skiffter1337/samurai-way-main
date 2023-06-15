import {addPost, deletePost, profileReducer, ProfileType} from "./ProfileReducer";


let oldState = {
    profile: {} as ProfileType,
    posts: [
        {id: "1", message: "Hello, how are you?", likesCount: 10},
        {id: "2", message: "It's my first post!", likesCount: 20},
        {id: "3", message: "It's my first post!", likesCount: 20}

    ],
    status: ""
}
// test('length of posts should be increased', () => {
//     let action = addPost('new post')
//     let newState = profileReducer(oldState, action)
//     expect(newState.posts.length).toBe(4)
//
// })
// test('new post message should be correct', () => {
//     let action = addPost('new post')
//     let newState = profileReducer(oldState, action)
//     expect(newState.posts[0].message).toBe('new post')
// })
//
// test('correct post could be deleted', () => {
//     let action = deletePost('1')
//     let newState = profileReducer(oldState, action)
//     expect(newState.posts.length).toBe(2)
//     expect(newState.posts[1].message).toBe("It's my first post!")
// })