import React from 'react';
import { connect } from "react-redux"
import { fetchPostsAndUsers } from "../actions"
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {

        return this.props.posts.map((post) => 
                
            <div className="item" key={post.id}>
                <i className='large middle aligned icon user' />
                <div className='content'>
                    <div className="description">
                        <h3> {post.title} </h3>
                        <div> {post.body} </div>
                        <br />
                    </div> 
                    <UserHeader userId={post.userId} />
                </div>

            </div>
        
        )

    }

    render() {
        
        return <div className='ui relaced divided list'> {this.renderList()} </div>
    }

}

const mapStateToProps = (state) => {

    return { posts: state.posts }

}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);