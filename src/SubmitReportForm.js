import React, { useState } from 'react';
import { submitReport } from './BugBountyInterface';

function SubmitReportForm() {
    const[bountyId, setBountyId] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitReport(bountyId, description);
    };

    
    return (
       <form onSubmit={handleSubmit}>
           <input type="number" value={bountyId} onChange={(e) => setBountyId(e.target.value)} placeholder="Bounty Id" />
           <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bug Description" />
           <button type="submit">Submit Report</button>
           
       </form>
    );
    
}

export default SubmitReportForm;
