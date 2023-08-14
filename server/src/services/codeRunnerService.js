// This service mainly acts as a pass-through since we're not "running" the code server-side.
const getCodeOutput = ({ html, css, js }) => {
    return {
        html,
        css,
        js
    };
};

module.exports = {
    getCodeOutput
};
