module.exports = {
    
    isId : ( id ) => id.length >= 4,

    isPassword : ( password ) => password.length >= 4,

    isAddress : ( addr ) => {
        if(addr.length < 2) return false;
        addr.forEach((str) => {
            if(str === '') return false;
        });
        return true;
    }, 

    isPhone : ( phone ) => {
        phone = phone.replace(/[^0-9-]/g, '');
        return phone.length >= 12 && phone.length <= 13;
    },

    isEmail : ( email ) => {
        var re = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
        return re.test(email);
    }
}