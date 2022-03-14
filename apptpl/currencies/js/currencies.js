
 if (typeof objCurrencies === "undefined") var objCurrencies = {};

 $.extend(objCurrencies, {
	grid : $('#currencies-inline-grid'),
	
	addButtonCurrencies: $('#currencies-add-button'),
	refreshButtonCurrencies: $('#currencies-refresh-button'),
});

$('#currencies-inline-grid').ace('create',{
	type : 'grid',
	gtype : 'table',		
	width:'100%',		
	allowedit : true,
	alloweditinline : true,
	allowadd : false,
	allowdelete : false,
	allowrefresh : false,
	allowsearchfield:false,
	
	showeditcolumn:'',
	displayrowlines:true,
	displaycolumnlines:true,
	
	selectiontype : 'row', //can be row, or cell
	
	idfield : '_currency_id',
	net : {
		remote : true,
		autoload : false,
		fid  : 220,
	}
});

/*******************************************************
 * function called whenever the currencies display content
 */
function onDisplayContentForTagcurrenciesmenutag(tag) {
	refreshCurrencies();
}
/*******************************************************
 * function called when the currencies refresh button is called 
 */
function refreshCurrencies(){
	$.aceOverWatch.field.grid.reloadPage(objCurrencies.grid);
}
/*******************************************************
 * function called when then the add currencies button is pressed
 */
function addNewCurrencies(){
	$.aceOverWatch.field.grid.addNewRecord(objCurrencies.grid);
}


	
	/*
	Other grid configurables:
	
	gtype:'table',		//the type of grid
							//can be: table OR panel
							//table is the default type
							//			- it displays the list in horizontal rows and columns
							//			- the information about how the grid should be displayed can be found in the columns field
							//panel  is the second way a grid may be displayed
							//			- this type of grid requires a cell template to be specified: rowtpl
	rowtpl:'',
	autoloadrowfields:true,//true if the row form should autoload by itself - eg if the row has a combobox
						
	page:1,				//this is the first page loaded ( first page == 1 )
	pagination:true,
					
	loading : false, 	//this flag tells if there is a active net connection loading the gird data (no matter if the previous result was successfull or not)
	height:false,		
	width:'auto',		//this is the width of the ENTIRE grid container, the on which ACE is being run; the inner grid iside stretches to 100%
					
	columns:[],			//the columns to be displayed; 
						//an array of title / width / fieldname / type (can be normal,checkboxcol or action) For checkboxcol to show a text next to the check on every row use rowtitle property 
	data:[],			//explicit data passed from outside!
	cleardata:false,	//if true, the data is wiped; useful when modifying the grid from the outside, and we want to wipe all the data
					
	displaycheckboxcolselectall : true, //for checkboxcol column type display a checkbox that will (de)select all checkboxes in the 
	hideheader:false,
					
	selectedRow:-1,
	selectedCell:-1,
					
	showsavecolumn: '',		//or begin, or end; WIP!	also effects the default save button on panel grids
	showeditcolumn: 'begin',//or end or set void to hide; also affects the default edit button on panel grids
	showdeletecolumn: 'begin',//or end or whatever	TODO: not yet implemented; also affect the default button on panel grids

	editonselect:false,	//true if you trigger an edit when a cell is clicked
	editform: {},
	norecordstpl : '',
					
	classes:'',		//string, custom classes to be added to the grid
					
	//custom callbacks
	onsavesuccessful:null,		//callback on save successfull; parameter: the record 
	onselectionchange:null,		//called when selection was changed: grid, row, column, record
	onrowclick:null,			//same as onselectionchange, but it is triggered ALL the time the row is clicked
	
	//these callbacks affect the panel grid: params(form,record)
	onbeforerowrecordloaded:null,	//a function, or the name of the function to be ran BEFORE the data has been loaded into the row form
	onafterrowrecordloaded:null,	//a function, or the name of the function to be ran AFTER the data has been loaded into the row form
	
	Grid colums as JS records
	
	columns : [
	
	
	{
		title:_L['Is_default_currency'],
		fieldname:'_default_currency',
		atype:'combobox',
		align:'right',
	},

	
	
	{
		title:_L['Exchange_rate_to_default_currency'],
		fieldname:'_usd_exchange_rate',
		align:'right',
	},

	
	
	{
		title:_L['Number_of_decimals'],
		fieldname:'_number_of_decimals',
		align:'right',
	},

	
	
	{
		title:_L['ISO_code'],
		fieldname:'_currency_iso_code',
	},

	
	
	{
		title:_L['ISO_name'],
		fieldname:'_currency_iso_name',
	},

	
	
	{
		title:_L['ISO_unit'],
		fieldname:'_currency_iso_unit',
	},

	
	]
	
	*/
	
	
