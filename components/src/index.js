import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:20PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Agnes"
                    timeAgo="Today at 3:00PM"
                    content="I like the writing!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Istvan"
                    timeAgo="Today at 2:56PM"
                    content="I like the subject!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'))