<?php
class Tasks_TasksController extends Kwf_Controller_Action_Auto_Grid
{
    protected $_modelName = 'Tasks';
    protected $_defaultOrder = array('field' => 'id', 'direction' => 'DESC');
    protected $_paging = 300;
    protected $_buttons = array('add');

    public function indexAction()
    {
        $this->view->ext('Tasks');
		
		$this->view->controllerTitle = trl('Задачи') . ' &mdash; ';
    }
    
    protected function _initColumns()
    {
        $this->_filters = array('text' => array('type' => 'TextField'));
        $this->_columns->add(new Kwf_Grid_Column('title', trlKwf('Title'), 200));
        $this->_columns->add(new Kwf_Grid_Column_Date('endDate', trlKwf('End Date'), 100))->setRenderer('taskCheckDate');
    }
    
    /*protected function _getWhere()
    {
        $users = Kwf_Registry::get('userModel');
        
        $ret = parent::_getWhere();
        
        $ret['status = ?'] = 0;
        $ret['userId = ?'] = $users->getAuthedUserId();
        return $ret;
    }*/
}
