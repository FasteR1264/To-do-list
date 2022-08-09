
const today = new Date();
exports.getDate = () => {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
   return today.toLocaleDateString('en-US', options);
}

exports.getDay = () => {
    const options = {
        weekday: 'long',
    };
   return today.toLocaleDateString('en-US', options);
}