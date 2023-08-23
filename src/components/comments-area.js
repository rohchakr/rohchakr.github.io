import React, { useEffect } from 'react';

const UTTERANCES_SCRIPT_URL = 'https://utteranc.es/client.js';
const COMMENTS_DIV_ID = 'comments-container';
const COMMENTS_REPO = 'rohchakr/rohchakr-comments-server';
const UTTERANCES_THEME = 'github-light';

const CommentsArea = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = UTTERANCES_SCRIPT_URL;
        script.setAttribute('repo', COMMENTS_REPO);
        script.setAttribute('issue-term', 'title');
        script.setAttribute('theme', UTTERANCES_THEME);
        script.crossOrigin = 'anonymous';
        script.async = true;

        const commentsDiv = document.querySelector(`#${COMMENTS_DIV_ID}`);
        if (commentsDiv)
            commentsDiv.appendChild(script);

        return () => {
            const commentsDiv = document.querySelector(`#${COMMENTS_DIV_ID}`);
            if (commentsDiv)
                commentsDiv.removeChild(commentsDiv.firstChild);
        }
    }, []);

    return <div id={COMMENTS_DIV_ID} />;
}

export default CommentsArea;