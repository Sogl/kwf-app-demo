var Members = Ext2.extend(Ext2.Panel,
{
    initComponent : function()
    {
        var form = new Kwf.Auto.FormPanel({
            controllerUrl   : '/members/member',
            region          : 'center'
        });

        var contacts = new Kwf.Auto.GridPanel({
            controllerUrl   : '/members/member-contacts',
            region          : 'south',
            height          : 200,
            resizable       : true,
            split           : true,
            collapsible     : true,
            title           : trl('Contacts')
        });

        var grid = new Kwf.Auto.GridPanel({
            controllerUrl   : '/members/members',
            region          : 'west',
            width           : 700,
            resizable       : true,
            split           : true,
            collapsible     : true,
            title           : trl('Customers'),
            gridConfig: {
                tbar: [
                    //'->',
                    {
                        text:'Выгрузки',
                        icon: '/assets/silkicons/page_excel.png',
                        cls: 'x2-btn-text-icon',
                        menu: [{
                            text:'Выгрузка EXXON',
                            icon: '/assets/silkicons/page_excel.png',
                            cls: 'x2-btn-text-icon',
                            handler : this.onXls
                        },{
                            text:'Выгрузка SEIC',
                            icon: '/assets/silkicons/page_excel.png',
                            cls: 'x2-btn-text-icon',
                            handler : this.onXls
                        }
                        ]
                    },
                ]
            },
            bindings: [form, {
                queryParam: 'member_id',
                item: contacts
            }]
        });

        this.layout = 'border';
        this.items = [grid, {
            layout: 'border',
            region: 'center',
            items: [form, contacts]
        }];
        Members.superclass.initComponent.call(this);
    },

    onXls : function() {
        var params = Kwf.clone(this.getStore().baseParams);
        if(this.getStore().sortInfo){
            var pn = this.getStore().paramNames;
            params[pn["sort"]] = this.getStore().sortInfo.field;
            params[pn["dir"]] = this.getStore().sortInfo.direction;
        }

        Ext2.Ajax.request({
            url : this.controllerUrl+'/json-xls',
            params  : params,
            timeout: 600000, // 10 minuten
            progress: true,
            progressTitle : trlKwf('Excel export'),
            success: function(response, opt, r) {
                var downloadUrl = this.controllerUrl+'/download-export-file?downloadkey='+r.downloadkey;
                for (var i in params) {
                    downloadUrl += '&' + i + '=' + params[i];
                }
                if (Ext2.isIE) {
                    Ext2.Msg.show({
                        title: trlKwf('Your download is ready'),
                        msg: trlKwf('Please click on the following link to download your Excel file.')
                            +'<br /><br />'
                            +'<a class="xlsExportLink" href="'+downloadUrl+'" target="_blank">'
                            +trlKwf('Excel export file')+'</a>',
                        icon: Ext2.Msg.INFO,
                        buttons: { ok: trlKwf('Close') }
                    });
                } else {
                    Ext2.getBody().createChild({
                        html: '<iframe width="0" height="0" src="'+downloadUrl+'"></iframe>'
                    });
                }
            },
            scope: this
        });
    }
});
