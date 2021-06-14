const transformCamelCase = (text) => {
    return [...text].reduce((prev, next) => {
        return (
            prev[0].match(/[a-z]/) ? prev.toUpperCase() + next :
            next.match(/[A-Z]/) ? prev + ' ' + next.toLocaleLowerCase()
            : prev + next
        )
    });
}

export default transformCamelCase;
