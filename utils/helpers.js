

//helper for formatting date



module.exports = {
    date_created: (date_created) => {
       return `${new Date(date_created).getMonth() + 1}/${new Date(date_created).getDate()}/${new Date(date_created).getFullYear()}`;

    }
};

