export default {
    methods: {
        checkExistance: (link, size) => (link && link.length > size),
        getCharString: (data) => {
            var splitArr = data.split(" ");
            if (splitArr.length > 1) {
                return (
                    splitArr[0].substring(0, 1) +
                    "" +
                    splitArr[1].substring(0, 1)
                ).toUpperCase();
            } else {
                return splitArr[0].substring(0, 1).toUpperCase();
            }
        },
        getImgUrl(pic, defaultimage="noimage.jpg") {
            if (pic.length > 0) {
                return pic;
            } else {
                return require('@/assets/img/dontremove/'+defaultimage);
            }
        },
    },
  }