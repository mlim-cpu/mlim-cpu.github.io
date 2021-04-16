(function(window,document,undefined){
    "use strict";
        var init = function(){
            var canvas = document.querySelector('#x');
            var icon_template = document.querySelector('#template');
            var icon_width = 40;
            var icon_height = 30;
            var the_images = [
                'https://dl.airtable.com/.attachmentThumbnails/b8119eea59c5ae6bfcdde9135a11aee9/3785e418',
                'https://dl.airtable.com/.attachmentThumbnails/34a2961f7be6cbe95dc1552ba52ff62d/776483c8',
                'https://dl.airtable.com/.attachmentThumbnails/32a73634f71e3d936502e86db29ba3cf/da594396',
                'https://dl.airtable.com/.attachmentThumbnails/89cb1bc62e15ef5c662c88e02ab58a49/83ee85b4',
                'https://dl.airtable.com/.attachmentThumbnails/00b1cf49b7d3af405f37cbd8b4bda9d1/a985f359',
                'https://dl.airtable.com/.attachmentThumbnails/7452a7cb055015efe45f42fd2a24ca1a/7f812896',
                'https://dl.airtable.com/.attachmentThumbnails/6a6e8420def8c01d5c4e62fe821af188/b3501e12',
                'https://dl.airtable.com/.attachmentThumbnails/c6f67f79e5eb8e36a1c9d0d827fa106c/e6157dc3',
                'https://dl.airtable.com/.attachmentThumbnails/fbbc5855a1a394a23f535d7c88fb9b41/85efc08a',
                'https://dl.airtable.com/.attachmentThumbnails/e18ce82a6560da00e7aedb09f99fc38a/ad9b4e11',
                'https://dl.airtable.com/.attachmentThumbnails/43c6c430b231d153077fa8676919cb04/961cdfb2',
                'https://dl.airtable.com/.attachmentThumbnails/052160bb2bdcbfbb88f62ea84c4d9fd9/7a430308',
                'https://dl.airtable.com/.attachmentThumbnails/9e9389150794024d6d1740c6fdb4a927/8f8cc96a',
                'https://dl.airtable.com/.attachmentThumbnails/4f548374c5804b6f11b040cbe47aac2d/af0a962d',
                'https://dl.airtable.com/.attachmentThumbnails/ba9e96d6f185581e17b17a041308dd96/a45008c6',
                'https://dl.airtable.com/.attachmentThumbnails/99fa7846dd1628f962a2836e06956099/5196f7c7',
                'https://dl.airtable.com/.attachmentThumbnails/677fe828716119217359e7b291952413/940cd28a',
                'https://dl.airtable.com/.attachmentThumbnails/4dd334d569119be255a4df9bc1a182f8/4e400409',
                'https://dl.airtable.com/.attachmentThumbnails/7347a0711a214271ddcf36e7be1f3d59/fe0f81f2',
                'https://dl.airtable.com/.attachmentThumbnails/c6e9b08cd3b09c6570b271e6dc57fb6f/9ff70c39',
                'https://dl.airtable.com/.attachmentThumbnails/444aa9255d262c6945e6e60615b21138/c91de49b',
                'https://dl.airtable.com/.attachmentThumbnails/b1a8a358d7cf9663a771c0bb90eab9c5/3d09a1a7',
                'https://dl.airtable.com/.attachmentThumbnails/92e04379da20e30cbc074d377ba3d0f3/5f057951',
                'https://dl.airtable.com/.attachmentThumbnails/0a2ca1f1425db8eea9a40014306b2988/efd8943f',
                'https://dl.airtable.com/.attachmentThumbnails/061272da0211b07009eac5849e451deb/15c9828a',
                'https://dl.airtable.com/.attachmentThumbnails/1ec70df15c9a034dd2fc2eb5b3588476/7dc27df1',
                'https://dl.airtable.com/.attachmentThumbnails/d75986bfa5f1202be8272ed18d1076af/c6b6e02e',
                'https://dl.airtable.com/.attachmentThumbnails/1c9d40e07a7baa2da12b74cfcd697b4d/cb692a94',
                'https://dl.airtable.com/.attachmentThumbnails/19b37ac057a513384bc632d7b6266761/cfd65b92',
                'https://dl.airtable.com/.attachmentThumbnails/67aefd1fb404a612131c3d143b42faef/cfe61799',
                'https://dl.airtable.com/.attachmentThumbnails/e71c71e8e6f9e9bc16ccc809d69590f9/c5a13527',
                'https://dl.airtable.com/.attachmentThumbnails/4a77f7ab1de04f19c317e22be0b835f1/bd8620b7',
                'https://dl.airtable.com/.attachmentThumbnails/920c45eaeaa4cd5617380e01c26e1199/e7508f72',
                'https://dl.airtable.com/.attachmentThumbnails/8c94e9033c34b54ff38522ef6b399f38/ee9c2667',
                'https://dl.airtable.com/.attachmentThumbnails/d989b677c0d23c826c1da9ac9600b3a5/f0280820',
                'https://dl.airtable.com/.attachmentThumbnails/f533b360fd215b55b2e4b80e8734bd28/88ff38a1',
                'https://dl.airtable.com/.attachmentThumbnails/4f9498a9fc0c850df54f500dfd80af9e/2d70319c',
                'https://dl.airtable.com/.attachmentThumbnails/a228a697589c9cbde1a22429f133753d/4e17236b',
                'https://dl.airtable.com/.attachmentThumbnails/03a1c54f743de042757c709d042607f3/332f2525',
                'https://dl.airtable.com/.attachmentThumbnails/21f4af02c04542d8c1e36107a034122c/4893378a',
                'https://dl.airtable.com/.attachmentThumbnails/0b59aee6ac17f980a17c81f41072049b/f23f419c',
                'https://dl.airtable.com/.attachmentThumbnails/48124c8a55d850274ad176978224b789/87db50aa',
                'https://dl.airtable.com/.attachmentThumbnails/847d44c5daae7bb940e0e25250191a8b/512dad80',
                'https://dl.airtable.com/.attachmentThumbnails/36af252776e504c1c852c9555a34a3a2/8f796a2a',
                'https://dl.airtable.com/.attachmentThumbnails/30adcb234d8d40f36efd8ce4aceda179/1b98b462',
                'https://dl.airtable.com/.attachmentThumbnails/a59f51909950182d3dc0f434e1a3d8e0/3b9903f8',
                'https://dl.airtable.com/.attachmentThumbnails/608344dbf052da78b06b8777d2fb5839/e391638e',
                'https://dl.airtable.com/.attachmentThumbnails/697a0d4a8c34f975c3e08fe3781dbdaf/59f9bef9',
                'https://dl.airtable.com/.attachmentThumbnails/2498991d33a40602fc33ab72af8fc103/1310c2db',
                'https://dl.airtable.com/.attachmentThumbnails/2c0805c43a9cbcb4375effa046afbbf7/199002c8',
                'https://dl.airtable.com/.attachmentThumbnails/f637591964f7c7310e1afee7738c9fbc/9229cdee',
                'https://dl.airtable.com/.attachmentThumbnails/90407a585d2cf8d1178a4e74b32e2925/aa61afac',
                'https://dl.airtable.com/.attachmentThumbnails/aa7b8cd82ccaa79951e3d7ed93f95018/27d127c2',
                'https://dl.airtable.com/.attachmentThumbnails/ea2ba13155780a49cb2480f7dc8a0fb4/1d9cd63d',
                'https://dl.airtable.com/.attachmentThumbnails/e4a013039f4cb12df2b612dfd587c305/4463ac14',
                'https://dl.airtable.com/.attachmentThumbnails/ab768fb027a8256435cbcaa79e90ec13/0b244c1d',
                'https://dl.airtable.com/.attachmentThumbnails/e25c1e11c785660e8abb991e793441ac/a45f694c',
                'https://dl.airtable.com/.attachmentThumbnails/d5cd7c7f06a04f347603e502cb506fa2/3980be80',
                'https://dl.airtable.com/.attachmentThumbnails/2a6c68a0917f9edf5241c967f2d1f79f/824c4999',
                'https://dl.airtable.com/.attachmentThumbnails/d9144f0b9e63f4610d475e5c2c713b30/eaab6f1d',
                'https://dl.airtable.com/.attachmentThumbnails/fa10b8b777f255d9b0c11acb37d680e5/bed3dad9',
                'https://dl.airtable.com/.attachmentThumbnails/5b572fd6303f3ba30eac9ee01220e816/aca163b5',
                'https://dl.airtable.com/.attachmentThumbnails/bd1288b7c8ba3e9b898a2364384d510e/db1ee5cb',
                'https://dl.airtable.com/.attachmentThumbnails/3084b328f04ac541d32e120c520c3d51/50dd5b7a',
                'https://dl.airtable.com/.attachmentThumbnails/33e742473f5b6cdf6c510216ee387e2e/37c98453',
                'https://dl.airtable.com/.attachmentThumbnails/dbc74a854f4923b9b5d23fd49d6db2c6/6e44f15f',
                'https://dl.airtable.com/.attachmentThumbnails/5208b367208559d64670a277d00e7dea/44d43609',
                'https://dl.airtable.com/.attachmentThumbnails/9cb56cd26757117f9779ea031b17337d/2b536b81',
                'https://dl.airtable.com/.attachmentThumbnails/c2519d9d7920bf5ea5ece47e1c708ae5/7e59ac5a',
                'https://dl.airtable.com/.attachmentThumbnails/49c45ebd61858bcfcabd77a51f2c990b/182f31fd',
                'https://dl.airtable.com/.attachmentThumbnails/39617ebdf3e092591804890494394a4b/d5b62f88',
                'https://dl.airtable.com/.attachmentThumbnails/3ed4a205069d7932f4d66387e8e2caf8/53ab5504',
                'https://dl.airtable.com/.attachmentThumbnails/0583da69ef8c4d4da409d49bcdc68919/c2963e24',
                'https://dl.airtable.com/.attachmentThumbnails/1b43d427ec050fafdc89b36726c6ba22/8550d939',
                'https://dl.airtable.com/.attachmentThumbnails/6e79401d53ae8e535639530a5349cd15/88458e01',
                'https://dl.airtable.com/.attachmentThumbnails/1f29849a20251dce0b7438456becc283/9665dce3',
                'https://dl.airtable.com/.attachmentThumbnails/d5b73a0e7fc38e1d66050a7f1485269d/3fac22dc',
                'https://dl.airtable.com/.attachmentThumbnails/ad5d9aaae6cf5ac363a14f55510f0e0b/8b6e05fa',
                'https://dl.airtable.com/.attachmentThumbnails/37b82c2d48109f5b38265cdc7b66dbef/5f718e80',
                'https://dl.airtable.com/.attachmentThumbnails/1b05821eebf0a2fff7000b89edce5253/ffab642e',
                'https://dl.airtable.com/.attachmentThumbnails/200815ade555bf37c835414ae59b1e45/cc15e9ab',
                'https://dl.airtable.com/.attachmentThumbnails/1c0cc093371d59f1da8737494bf4bb54/59f242d8',
                'https://dl.airtable.com/.attachmentThumbnails/5ec28d550cc953895f1e1ac6f10a15ab/c0524e09',
                'https://dl.airtable.com/.attachmentThumbnails/fb14d3146971318da6f6de9a59a2df32/18fd214b',
                'https://dl.airtable.com/.attachmentThumbnails/154f48d2c523ad0d4784ab6e6a5747c8/c41e5256',
                'https://dl.airtable.com/.attachmentThumbnails/cf713b1552d9516f9a09d63c944e450c/91666121',
                'https://dl.airtable.com/.attachmentThumbnails/757f486761da946e14ac9c5758914778/e99265b9',
                'https://dl.airtable.com/.attachmentThumbnails/3f645f98f741a779f7c000a8e898e5d6/ab05b5c8',

            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };
            var total_number_of_images = 175;
            var max_height = canvas.offsetHeight - icon_height;
            var max_width = canvas.offsetWidth - icon_width;
            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                var y = Math.floor( Math.random() * max_height );
                r = [x,y];
                return r;
            };
            var createImage = function(){
                var node = icon_template.cloneNode(true);
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.setAttribute('src',pickRandomImage());
                canvas.appendChild(node);
            };
            for (var i=0;i<total_number_of_images;i++){
                createImage();
            };
        };
       window.addEventListener('load',init);
})(window,document);

function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 1);
}
