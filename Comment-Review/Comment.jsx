import React, { useState } from 'react'

export default function Comment() {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author && text) {
            setComments([...comments, { author, text }]);
            setAuthor('');
            setText('');
        }
    };

    return (
        <div>
            <h3>Comment / Review Section</h3><br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add Your Comment..."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                /> <br /><br />
                <textarea
                    placeholder="Your Review..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                /> <br /><br />
                <button type="submit">Submit</button>
            </form>
            <h2>Comments</h2>
            {
                comments.map((comment, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <b>{comment.author}</b>: {comment.text}
                    </div>
                ))
            }
        </div>
    );
}
