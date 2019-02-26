import Vue from "vue"

Vue.filter('truncate', function (text, length, suffix) {
    if (text < length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});