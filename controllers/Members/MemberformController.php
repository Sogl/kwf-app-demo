<?php
class Members_MemberformController extends Kwf_Controller_Action_Auto_Form
{
    protected $_buttons = array('save');
    protected $_permissions = array('save', 'add');
    protected $_modelName = 'Members';

    protected function _initFields()
    {
       $this->_form->add(new Kwf_Form_Field_Select('sex', trl('Sex')))
            ->setValues(array('male' => trl('Male'), 'female' => trl('Female')))
            ->setWidth(400); 
			
		$this->_form->add(new Kwf_Form_Field_PoolSelect('branch_id', trl('Branch Category')))
            ->setPool('Branches')
            //->setListWidth(300)
            ->setWidth(400)
            ->setShowNoSelection(true)
            ->setAllowBlank(true);
			
		$this->_form->add(new Kwf_Form_Field_PoolSelect('branch_id', trl('Branch Category')))
            ->setPool('Branches')
            //->setListWidth(300)
            ->setWidth(400)
            ->setShowNoSelection(true)
            ->setAllowBlank(true);
				
		$this->_form->add(new Kwf_Form_Field_PoolSelect('branch_id', trl('Branch Category')))
            ->setPool('Branches')
            //->setListWidth(300)
            ->setWidth(400)
            ->setShowNoSelection(true)
            ->setAllowBlank(true);

			
		/*$typeModel = Kwf_Model_Abstract::getInstance('KwfPools');
        $typeSelect = $typeModel->select()->whereEquals('visible', '1')->order('value');	
			
		$langs = new Kwf_Form_Field_Select('branch_id', trlKwf('branch_id'));
        $langs->setValues($typeModel->getRows($typeSelect));
        $langs->setAllowBlank(false);
        $langs->setWidth(400);
		
		$typeModel2 = Kwf_Model_Abstract::getInstance('KwfPools');
        $typeSelect2 = $typeModel2->select()->whereEquals('pos', '1')->order('value');
		
		$langs2 = new Kwf_Form_Field_Select('picture_id', trlKwf('picture_id'));
        $langs2->setValues($typeModel2->getRows($typeSelect2));
        $langs2->setAllowBlank(false);
        $langs2->setWidth(400);
	

	
		$this->_form->add(new Kwf_Form_Field_FilterField())
        ->setFilterColumn('branch_id')
        ->setFilteredField($langs2)
        ->setFilterField($langs)
        ->setWidth(400); */
		
		
		$this->_form->add(new Kwf_Form_Field_TextArea('miscellaneous', trlKwf('miscellaneous')))
        ->setHeight(70)
        ->setWidth(400);
		
		
    }
}
