Ext.define('WrittenStatement.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'WrittenStatement.view.Main',
        'Ext.toolbar.Toolbar'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
            xtype: 'container',
            layout: {
                type: 'border'
            },
            items: [{
                    xtype: 'toolbar',
                    region: 'north',
                    cls: 'app-toolbar',
                    items: [{
                            xtype: 'label',
                            html: '<div class="logo"></div>'
                        }, '->', {
                            xtype: 'button',
                            text: 'Настройки',
                            itemId: 'settings'
                        }]
                }, {
                    xtype: 'app-main',
                    region: 'center'
                }]
        }]
});
