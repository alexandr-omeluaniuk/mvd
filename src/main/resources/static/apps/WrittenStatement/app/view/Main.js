Ext.define('WrittenStatement.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.container.Container'
    ],
    xtype: 'app-main',
    layout: {
        type: 'fit'
    },
    items: [{
            xtype: 'tabpanel',
            items: [{
                    title: 'Center Tab 1'
                }]
        }]
});