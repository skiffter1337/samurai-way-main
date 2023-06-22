import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/reducers/ProfileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/FormsComtrols/FormsControls";



type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (postText: string) => void
    deletePost: (id: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postsElement = props.posts.map(post =>
        <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            deletePost={props.deletePost}
        />)


    const addPost = (values: AddPostFormDataType) => props.addPost(values.postText)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addPost}/>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

type AddPostFormDataType = {
    postText: string
}

const maxLength10 = maxLengthCreator(10)
export const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'postText'}
                    component={TextArea}
                    placeholder={'new post here'}
                    validate={[maxLength10, required]}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

const AddPostReduxForm = reduxForm<AddPostFormDataType>({
    form: "post"
})(AddPostForm)

