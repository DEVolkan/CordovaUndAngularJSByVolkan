cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/io.litehelpers.cordova.sqlite/www/SQLitePlugin.js",
        "id": "io.litehelpers.cordova.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/io.litehelpers.cordova.sqlite/src/windows/SQLiteProxy.js",
        "id": "io.litehelpers.cordova.sqlite.SQLiteProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/io.litehelpers.cordova.sqlite/src/windows/SQLite3-WinRT/SQLite3JS/js/SQLite3.js",
        "id": "io.litehelpers.cordova.sqlite.SQLite3",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "io.litehelpers.cordova.sqlite": "0.7.10-dev"
}
// BOTTOM OF METADATA
});