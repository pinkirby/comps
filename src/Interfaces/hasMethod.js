let hasMethod = (obj, ...args) => {
    if (obj == null)
        return false;
    let i = 0, methodName;
        while((methodName = args[i++])){
        if(typeof obj[methodName] != 'function') {
            return false;
        }
    }
    return true;
};

export default hasMethod;