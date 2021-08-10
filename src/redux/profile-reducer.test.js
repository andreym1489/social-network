import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '55'},
        {id: 2, message: 'It\'s my first post', likeCounts: '3'},
        {id: 3, message: 'FSAFASF', likeCounts: '12'},
        {id: 4, message: 'New', likeCounts: '102'}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPost("it-kamasutra.com")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

test('message of new post should be it-kamasutra.com', () => {
    let action = addPost("it-kamasutra.com")

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("it-kamasutra.com")
});

test('after deleting message should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});