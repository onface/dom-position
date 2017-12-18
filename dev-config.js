var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
module.exports = {
    mockServer: function (app) {
        app.post('/upload', multipartMiddleware, function(req, res) {
            console.log(req.body, req.files)
            res.contentType('text/html')
            res.send({
                status: 'success',
                data: {
                    id: 'id' + parseInt(Math.random()*1000),
                    files: req.files
                }
            })
        })
        app.get('/upload', function (req, res) {
            res.send(
                '<form action="/upload" method="post" enctype="multipart/form-data"  >' +
                '    <input type="file" name="file" />' +
                '    <button type="submit" >submit</button>' +
                '</form>'
            )
        })
        app.get('/ajaxupload', function (req, res) {
            res.send(
                function () {
                    /*!
                    <input id="file" name="file" type="file" />
                    <script src="http://apps.bdimg.com/libs/jquery/1.9.0/jquery.min.js" ></script>
                    <script>
                        $("#file").on("change", function(){
                          var formData = new FormData()
                          formData.append("file", $("#file").get(0).files[0])
                          $.ajax({
                              url: "/upload",
                              type: "POST",
                              data: formData,
                              processData: false,
                              contentType: false,
                              success: function(response){
                                      document.write(
                                          '<pre>' +
                                           response +
                                          '</pre>'
                                      )
                              }
                          })
                        })
                    </script>
                    */
                }.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '').replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '') // .trim()
            )
        })
    },
    testFiles: [
        (function () {
            if (process.env.files) {
                return process.env.files
            }
            else {
                return 'test/**/*.test.js'
            }
        })()
    ],
    // https://saucelabs.com/platforms
    customLaunchers: {
        // ie family
        sl_ie_8: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '8'
        },
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9'
        },
        sl_ie_10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8',
            version: '10'
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8.1',
            version: '11'
        },
        // sl_edge: {
        //     base: 'SauceLabs',
        //     browserName: 'MicrosoftEdge',
        //     platform: 'Windows 10'
        // },
        // the cool kids
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Windows 7'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Windows 7'
        },
        sl_mac_safari: {
            base: 'SauceLabs',
            browserName: 'safari',
            platform: 'Windows 7'
        },
        // sl_mac_safari: {
        //     base: 'SauceLabs',
        //     browserName: 'safari',
        //     platform: 'OS X 10.10'
        // },
        /*
        // mobile
        sl_ios_safari_8: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '8.4'
        },
        sl_ios_safari_9: {
            base: 'SauceLabs',
            browserName: 'iphone',
            version: '9.3'
        },
        sl_android_4_4: {
            base: 'SauceLabs',
            browserName: 'android',
            version: '4.4'
        },
        sl_android_5_1: {
            base: 'SauceLabs',
            browserName: 'android',
            version: '5.1'
        }
        */
    }
}
