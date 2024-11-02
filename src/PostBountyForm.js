import React, { useState } from 'react';
import { postBounty } from './BugBountyInterface';

function PostBountyForm() {

    const [title, setTitle] = useState('');
    const [reward, setReward] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postBounty(title, reward);
    };
    
    return (
       <form onSubmit={handleSubmit}>
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bounty Title" />
           <input type="number" value={reward} onChange={(e) => setReward(e.target.value)} placeholder="Reward Amount" />
           <button type="submit">Post Bounty</button>
       </form>
       
    );
}
 
export default PostBountyForm;
