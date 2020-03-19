import React, { useState } from "react";

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';

import ButtonRow from "../components/ButtonRow";

import {
	Button
} from "../";

function Buttons() {
	const [anchorEl, setAnchorEl] = useState(null);
	
	function clickHandler() {
		alert("yes");
	}
	
	const openDropdown = function(event) {
		console.log("EVENT", event);
		setAnchorEl(event.currentTarget);
	}
	
	function closeDropdown() {
		setAnchorEl(null);
	}
	
	const dropdownWithIcons = [
		{
			label : "Edit",
			mIcon : CreateIcon,
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			mIcon : CloudDownloadIcon,
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		}
	];
	
	const dropdownWithColoredIcons = [
		{
			label : "Edit",
			mIcon : CreateIcon,
			color : "blue",
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			mIcon : CloudDownloadIcon,
			color : "blue",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		},
		{
			label : "Delete",
			mIcon : DeleteIcon,
			color : "red",
			onClick : function() {
				alert("DELETE CLICK");
			}
		},
		{
			label : "Cancel",
			mIcon : ChevronLeftIcon,
			onClick : function() {
				alert("CANCEL CLICK");
			}
		}
	];
	
	const dropdownWithText = [
		{
			label : "Edit",
			onClick : function() {
				alert("EDIT CLICK");
			}
		},
		{
			label : "Download",
			onClick : function() {
				alert("DOWNLOAD CLICK");
			}
		}
	];
	
	return (
		<div>
			<h1>Buttons!</h1>
			
			<h2>Contained</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="lightBlue" variant="contained" label="Save" onClick={clickHandler}/>
					<Button color="lightBlue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler}/>
					<Button color="red" variant="contained" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="contained" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Contained - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="contained" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="contained" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="contained" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="contained" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Outlined</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Outlined - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="outlined" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="outlined" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="outlined" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Text</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="text" label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Text - disabled</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="text" disabled label="Save" onClick={clickHandler}></Button>
					<Button color="blue" variant="text" disabled label="Save" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="red" variant="text" disabled label="Delete" onClick={clickHandler}></Button>
					<Button color="red" variant="text" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler}></Button>
					<Button color="black" variant="text" disabled label="Cancel" onClick={clickHandler}></Button>
					<Button color="black" variant="text" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Icon Positions</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Save" iconPosition="left" mIcon={AddIcon} onClick={clickHandler}></Button>
					<Button color="blue" variant="contained" label="Save" iconPosition="right" mIcon={AddIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Multi-Icon buttons</h2>
			<div>
				<ButtonRow>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="contained" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="contained" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="outlined" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="outlined" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<FormatListBulletedOutlinedIcon/>} variant="text" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler}></Button>
					<Button color="blue" label={<GridOnOutlinedIcon/>} variant="text" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler}></Button>
				</ButtonRow>
			</div>
			
			<h2>Icon Buttons</h2>
			<div>
				<Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>
			
			<h2>Icon Buttons - disabled</h2>
			<div>
				<Button color="blue" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="blue" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="red" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="red" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
				<Button color="black" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler}></Button>
				<Button color="black" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown}></Button>
			</div>

			<h2>Button Sizes</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="contained" label="Small" size="small"/>
					<Button color="blue" variant="contained" label="Medium (default)"/>
					<Button color="blue" variant="contained" label="Large" size="large"/>
				</ButtonRow>
			</div>
			<br/><br/>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Small" size="small" mIcon={AddIcon}/>
					<Button color="blue" variant="outlined" label="Medium (default)" mIcon={AddIcon}/>
					<Button color="blue" variant="outlined" label="Large" size="large" mIcon={AddIcon}/>
				</ButtonRow>
			</div>
			<br/><br/>
			<div>
				<ButtonRow>
					<Button color="black" variant="icon" size="small" mIcon={AddIcon}/>
					<Button color="black" variant="icon" mIcon={AddIcon}/>
					<Button color="black" variant="icon" size="large" mIcon={AddIcon}/>
				</ButtonRow>
			</div>

			<h2>Buttons that open menus</h2>
			<div>
				<ButtonRow>
					<Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons}/>
					<Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText}/>
					<Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons}/>
					<Button color="blue" variant="icon" mIcon={MoreHorizIcon} menuItems={dropdownWithIcons}/>
				</ButtonRow>
			</div>
			
			<h2>Buttons that triggers Popover</h2>
			<div>
				<ButtonRow>
					<Button
						color="blue"
						variant="outlined"
						popover={<p>Popover Content</p>}
						label="With Popover"
					/>
					<Button color="blue" variant="icon" mIcon={HelpIcon} popover={<p>Help text</p>}/>
				</ButtonRow>
			</div>
			
			<div style={{ height: "200px" }}></div>
		</div>
	)
}

export default Buttons;