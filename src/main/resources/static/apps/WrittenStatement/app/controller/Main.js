Ext.define('WrittenStatement.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'WrittenStatement.view.Settings',
        'Ext.window.Window'
    ],
    init: function () {
        this.control({
            'toolbar #settings': {
                click: this.openSettings
            }
        });
    },
    openSettings: function (view) {
        var settings = Ext.create('WrittenStatement.view.Settings');
        var win = Ext.create('widget.window', {
            height: '50%',
            width: '50%',
            closable: true,
            modal: true,
            title: 'Настройки приложения',
            layout: 'fit',
            items: [settings],
            constrainHeader: true
        });
        win.show();
    }
});
