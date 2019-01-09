/**
 *  工具类
 * create by ym 2018/1/11
 */

/**
 * 字符串截取
 * '201604059' | subStr 4 => 2016
 * '201604059' | subStr -4 => 4059
 */
exports.subStr = (str, number) => {
    if (!str) return ''

    if (number < 0) {
        return str.substr(str.length + number)
    } else {
        return str.substr(0, number)
    }
}


/**
 * 存储localStorage
 */
exports.setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
exports.getJStore = name => {
    if (!name) return;
    console.log(JSON.parse(window.localStorage.getItem(name)))
    return JSON.parse(window.localStorage.getItem(name));
}

/**
 * 获取localStorage
 */
exports.getStore = name => {
    if (!name) return;
    // console.log(JSON.parse(window.localStorage.getItem(name)))
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
exports.removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

