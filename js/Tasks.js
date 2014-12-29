var Tasks = Ext2.extend(Ext2.Panel,
{
       initComponent : function(test)
       {
       var form = new Kwf.Auto.FormPanel({
                                         controllerUrl   : '/tasks/task',
                                         region          : 'center'
                                         });
              
       var grid = new Kwf.Auto.GridPanel({
                                         controllerUrl   : '/tasks/tasks',
                                         region          : 'west',
                                         width           : 300,
                                         resizable       : true,
                                         split           : true,
                                         collapsible     : true,
                                         title           : trl('Задачи'),
                                         bindings: [{
                                                    queryParam: 'id',
                                                    item: form
                                                    }]
                                         });
       
       this.layout = 'border';
       this.items = [grid, {
                     layout: 'border',
                     region: 'center',
                     items: [form]
                     }];
       Tasks.superclass.initComponent.call(this);
    }
});

Ext2.util.Format.taskCheckDate = function(val)
{
    if ((val == null) || (val == '')) {
        return val;
    }

    var month = val.getMonth();
    var monthStr = month < 10 ? '0' + month : month;
    var day = val.getDay();
    var dayStr = day < 10 ? '0' + day : day;
    var year = val.getYear();
    
    var newdate = dayStr + "-" + monthStr + "-" + year;
    
    var dateToCheck1 = new Date();

    var today = new Date();
    
    dateToCheck1.setDate(dateToCheck1.getDate() + 30);
    
    if ((val > today) && (val > dateToCheck1)) {
        return '<span style="color:green;">' + val.format('d-m-Y') + '</span>';
    } else if ((val > today) && (val < dateToCheck1)) {
        return '<span style="color:orange;">' + val.format('d-m-Y') + '</span>';
    } else {
        return '<span style="color:red;">' + val.format('d-m-Y') + '</span>';
    }
    return val;
};
