const fs = require('fs');
const path = require('path');

const feedbackFilePath = path.join(__dirname, 'UAT_feedback.md');

async function gatherFeedback(userId, feedback) {
    try {
        // Validate input
        if (!userId || !feedback) {
            throw new Error('User ID and feedback are required');
        }

        // Append feedback to the markdown file
        const feedbackEntry = `User ID: ${userId}\nFeedback: ${feedback}\n\n`;
        fs.appendFileSync(feedbackFilePath, feedbackEntry, { encoding: 'utf8' });

        console.log('Feedback successfully recorded.');
    } catch (error) {
        console.error('Error gathering feedback:', error.message);
    }
}

// Example usage
gatherFeedback('user123', 'The app is user-friendly but needs more features.');