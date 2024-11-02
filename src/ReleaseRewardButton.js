import React, { useState } from 'react';
import { releaseReward } from './BugBountyInterface';

function ReleaseRewardButton() {
    const [bountyId, setBountyId] = useState('');
    
    const handleRelease = async () => {
        await releaseReward(bountyId);
    };
    
    return (
       <div>
           <input type="number" value={bountyId} onChange={(e) => setBountyId(e.target.value)} placeholder="Bounty ID" />
           <button onClick={handleRelease}>Release Reward</button>
       </div>
    );
}

export default ReleaseRewardButton;
