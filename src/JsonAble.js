'use strict';

function timeline(data) {
	let phases = [];
	let tasks = [];
	this.setPhase = (a)=>{a+a};
	this.pullOutTasks = function(data){ 
		return data.map( (item)=>{  
						let subs = item.subtasks.length > 0 ? this.pullOutTasks(item.subtasks) : '';
						return {id : item.id, name : item.name, due_on: item.due_on, notes: item.notes, subtasks : subs};  
					})
	};
	this.setTasks = ()=> {tasks = this.pullOutTasks(data)};
	this.getTasks = ()=> tasks;


}
const TL = {
data: [
{
id: 73050525864552,
created_at: "2015-12-11T02:04:12.446Z",
modified_at: "2015-12-16T19:25:41.362Z",
name: "Phase 1:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: null,
subtasks: [ ],
hearts: [ ],
tags: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
]
},
{
id: 73050525864554,
created_at: "2015-12-11T02:04:22.414Z",
modified_at: "2015-12-16T19:25:53.078Z",
name: "Player Bank System",
notes: "Tracks the current total number of game currency (Chips) the player has.",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864566,
created_at: "2015-12-11T02:05:07.186Z",
modified_at: "2015-12-11T03:33:34.017Z",
name: "Turn on contiguous chip tracking",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864554,
name: "Player Bank System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73076904329089,
created_at: "2015-12-11T03:34:16.573Z",
modified_at: "2015-12-11T03:34:22.222Z",
name: "Store Chip data on server",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864554,
name: "Player Bank System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73076904329091,
created_at: "2015-12-11T03:34:22.303Z",
modified_at: "2015-12-11T03:34:34.504Z",
name: "Do not reset chips on login/logout",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864554,
name: "Player Bank System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864564,
created_at: "2015-12-11T02:05:06.967Z",
modified_at: "2015-12-16T19:25:59.324Z",
name: "Player Account Login System",
notes: "Description : Controls how the player can register,login, logout, and recover password. Requirements  : Players must be able to – Create an account with Playfab. Create a Playfab account with Facebook Token. Login to an account. Log out of an account. Connect their Facebook account to their account. System must – Allow for long email addresses (50 characters) Have Automatically account login once a player has logged into an account. Turn off Automatically account login once a player has logged out of an account. Players need to be able to recover account passwords. Connected Screens and Views : Main Menu Screen –Player Login View –Lost Account View –Playfab Account Registration View Options Screen –Profile View –Settings View Bugs : Fix Facebook Login Problem with long email addresses",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
subtasks: [
{
id: 73050525864575,
created_at: "2015-12-11T02:07:11.293Z",
modified_at: "2015-12-11T03:15:57.021Z",
name: "Log out of an account.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864577,
created_at: "2015-12-11T02:07:13.626Z",
modified_at: "2015-12-16T03:00:29.061Z",
name: "[1]Connect their Facebook account to their account.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864579,
created_at: "2015-12-11T02:07:13.972Z",
modified_at: "2015-12-16T03:00:41.484Z",
name: "[1]Bug - Allow for long email addresses.Validation of email needs to allow longer email address (i.e. scott@loudmouthclothinggolfgame.net) didn’t work because too long",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864581,
created_at: "2015-12-11T02:07:14.279Z",
modified_at: "2015-12-16T03:14:34.594Z",
name: "[1]Have Automatically account login once a player has logged into an account. Turn off Automatically account login once a player has logged out of an account.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864583,
created_at: "2015-12-11T02:07:14.576Z",
modified_at: "2015-12-16T03:14:40.206Z",
name: "[1]Players need to be able to recover account passwords.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864585,
created_at: "2015-12-11T02:07:14.888Z",
modified_at: "2015-12-11T02:07:14.888Z",
name: "Fix Facebook Login",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864587,
created_at: "2015-12-11T02:07:15.211Z",
modified_at: "2015-12-11T02:07:15.211Z",
name: "Problem with long email addresses",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864589,
created_at: "2015-12-11T02:07:15.513Z",
modified_at: "2015-12-16T03:14:52.957Z",
name: "[1]Bug - Error message on why cant login or registration",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864564,
name: "Player Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864573,
created_at: "2015-12-11T02:06:01.975Z",
modified_at: "2015-12-16T19:26:41.232Z",
name: "Player Options Management System",
notes: "Description : Controls how the player can select or change their setting, preferences, account username, Icon marker. Requirements  : Players must be able to – Settings Turn vibrate on/off Push notifications on/off Profile Preferences Input/Change location. Input/Change Username as long as current username is the temporary username. Input/Change Zip Code. Select/Change Icon marker  Select their Facebook Profile Photo System must – Validate account usernames are unique. Alert the player another name must be selected, If the user name is not unique. Screens : Options Screen –Profile View –Marker Selection View –Settings View Bugs : NA",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
hearts: [ ],
hearted: false,
tags: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864591,
created_at: "2015-12-11T02:07:39.349Z",
modified_at: "2015-12-11T02:07:54.737Z",
name: "Turn vibrate on/off",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864593,
created_at: "2015-12-11T02:07:51.477Z",
modified_at: "2015-12-11T02:07:51.477Z",
name: "Push notifications on/off",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864595,
created_at: "2015-12-11T02:07:51.805Z",
modified_at: "2015-12-11T02:07:51.805Z",
name: "Input/Change Username as long as current username is the temporary username.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864597,
created_at: "2015-12-11T02:07:52.108Z",
modified_at: "2015-12-11T02:07:52.108Z",
name: "Input/Change Zip Code.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864599,
created_at: "2015-12-11T02:07:52.408Z",
modified_at: "2015-12-11T02:07:52.408Z",
name: "Select/Change Icon marker",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864601,
created_at: "2015-12-11T02:07:52.712Z",
modified_at: "2015-12-11T02:07:52.712Z",
name: "Select their Facebook Profile Photo",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864603,
created_at: "2015-12-11T02:07:53.098Z",
modified_at: "2015-12-11T03:54:53.982Z",
name: "Validate account usernames (Playfab TitleDisplayName) are unique.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864605,
created_at: "2015-12-11T02:07:53.494Z",
modified_at: "2015-12-11T02:07:53.494Z",
name: "Alert the player another name must be selected, If the user name is not unique.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864607,
created_at: "2015-12-11T02:07:53.899Z",
modified_at: "2015-12-11T02:07:53.899Z",
name: "When hitting back text input fields do not go away.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864609,
created_at: "2015-12-11T02:07:54.307Z",
modified_at: "2015-12-11T02:08:22.471Z",
name: "input new survey content",
notes: "Survey #2 Content Have you been to a casino in the last 30 Days 6 Months Last Year Never How often a year do you go to a Gambling Destination Once a Year Twice a Year More than twice a Year Never Have you been to a destination in last 12 months – check all that apply Maccau Atlantic City Local Casino Las Vegas Biloxi Connecticut When you travel – do you travel by: Car Commercial Airline Private Airline Do you gamble on the golf course yes no Do you play texas holdem online? yes no Do you play Texas Holdem on your mobile device or tablet? yes no Survey #3 Content Do you consider yourself an avid golfer? yes no How often do you play a month 0 1 2 3 4 5 6+ What golf ball do you use ( Drop Down ) Titleist Callaway Srixon Top-Flite Bridgestone Nike TaylorMade Wilson Vice Maxfli Other note: prompts a conditional field that is a required text input field. What brand of golf shoes do you wear ( Drop Down ) Ecco Footjoy Nike Other note: prompts a conditional field that is a required text input field. What brand irons do you use? ( Drop Down ) Titleist Callaway Nike TaylorMade Other note: prompts a conditional field that is a required text input field. What brand Driver/Woods do you use?( text input field ) What brand Wedges do you use?( text input field ) What brand Putter do you use?( text input field ) What brand Hybrids do you use?( text input field )",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864573,
name: "Player Options Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864568,
created_at: "2015-12-11T02:05:07.767Z",
modified_at: "2015-12-16T19:26:45.998Z",
name: "First Time Account Login System",
notes: "Description : Controls certain unique UI elements and Interactions that the player sees or do the first time they login. Requirements  : Players must be able to – Input/Change location. Input/Change Username as long as current username is the temporary username. Input/Change Zip Code. Select/Change Icon marker System must– Auto generate a temporary Unique username. ie “Player”+ playfab_account_ID. Set profile Marker for Facebook linked accounts to the Facebook account’s Profile Photo. Set profile Marker to the one of the four suit Markers(spade, club, heart, diamond) if no Marker is selected by the player. Connected Screens and Views : Bugs : After registering with a new email; The auto generate  user name is preventing the player from entering a username. It backspaces after every letter is typed and needs to be shut down before allowing you to enter data.",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
subtasks: [
{
id: 73050525864619,
created_at: "2015-12-11T02:09:27.603Z",
modified_at: "2015-12-11T02:09:31.510Z",
name: "Input/Change Username as long as current username is the temporary username.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864621,
created_at: "2015-12-11T02:09:28.822Z",
modified_at: "2015-12-11T02:09:28.822Z",
name: "Input/Change Zip Code.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864623,
created_at: "2015-12-11T02:09:29.169Z",
modified_at: "2015-12-11T02:09:29.169Z",
name: "Auto generate a temporary Unique username. ie “Player”+ playfab_account_ID.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864625,
created_at: "2015-12-11T02:09:29.479Z",
modified_at: "2015-12-11T04:05:21.210Z",
name: "Auto set profile Marker for Facebook linked accounts to the Facebook account’s Profile Photo. (Facebook Graph API User.Picture)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864627,
created_at: "2015-12-11T02:09:29.813Z",
modified_at: "2015-12-11T02:09:29.813Z",
name: "Set profile Marker to the one of the four suit Markers(spade, club, heart, diamond) if no Marker is selected by the player.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864629,
created_at: "2015-12-11T02:09:30.189Z",
modified_at: "2015-12-11T02:09:30.189Z",
name: "FIX- After registering with a new email; The auto generate user name is preventing the player from entering a username. It backspaces after every letter is typed and needs to be shut down before allowing you to enter data.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864631,
created_at: "2015-12-11T02:09:30.508Z",
modified_at: "2015-12-11T04:07:16.542Z",
name: "On initial log in, pop-up transparent modal with instructions (x to exit)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864633,
created_at: "2015-12-11T02:09:30.830Z",
modified_at: "2015-12-11T02:09:30.830Z",
name: "Other instruction screens",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864635,
created_at: "2015-12-11T02:09:31.161Z",
modified_at: "2015-12-11T02:09:31.161Z",
name: "Bug – New email registration does not allow to add name, city without quiting",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864568,
name: "First Time Account Login System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864637,
created_at: "2015-12-11T02:10:02.015Z",
modified_at: "2015-12-16T19:26:50.255Z",
name: "Splash Screen",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
hearts: [ ],
tags: [ ],
parent: null,
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
subtasks: [
{
id: 73050525864639,
created_at: "2015-12-11T02:10:25.435Z",
modified_at: "2015-12-11T02:10:29.818Z",
name: "leave the way it is for now (except for new logo)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864637,
name: "Splash Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864641,
created_at: "2015-12-11T02:10:29.947Z",
modified_at: "2015-12-11T02:11:02.798Z",
name: "remove Mlife logo(Maybe)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864637,
name: "Splash Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
]
},
{
id: 73050525864643,
created_at: "2015-12-11T02:11:27.128Z",
modified_at: "2015-12-16T19:26:54.198Z",
name: "Options Screen",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
hearts: [ ],
tags: [ ],
parent: null,
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
],
subtasks: [
{
id: 73050525864645,
created_at: "2015-12-11T02:11:42.351Z",
modified_at: "2015-12-11T18:00:31.312Z",
name: "Profile View – Add button to link account to Facebook.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864643,
name: "Options Screen"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
]
},
{
id: 73050525864647,
created_at: "2015-12-11T02:11:44.086Z",
modified_at: "2015-12-11T17:17:57.600Z",
name: "Marker Selection View – Allow Facebook linked accounts to use their Facebook profile picture as their marker.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
parent: {
id: 73050525864643,
name: "Options Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864649,
created_at: "2015-12-11T02:11:45.120Z",
modified_at: "2015-12-11T17:18:05.156Z",
name: "Help View – Get all copy and assets for each help option.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864643,
name: "Options Screen"
}
},
{
id: 73050525864651,
created_at: "2015-12-11T02:11:45.479Z",
modified_at: "2015-12-11T17:18:17.927Z",
name: "Friends List View – HookupFriendsListManagement to FriendsListView.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864643,
name: "Options Screen"
}
},
{
id: 73050525864653,
created_at: "2015-12-11T02:11:45.856Z",
modified_at: "2015-12-11T17:18:30.002Z",
name: "Facebook Friends",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864643,
name: "Options Screen"
}
}
]
},
{
id: 73050525864655,
created_at: "2015-12-11T02:12:05.852Z",
modified_at: "2015-12-16T19:27:08.302Z",
name: "Universal Menu View",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
],
assignee: {
id: 31422053277149,
name: "Tian Chen"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
],
subtasks: [
{
id: 73143340332545,
created_at: "2015-12-11T18:01:13.038Z",
modified_at: "2015-12-11T18:01:38.273Z",
name: "2D ART:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864655,
name: "Universal Menu View"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864657,
created_at: "2015-12-11T02:12:19.872Z",
modified_at: "2015-12-11T02:12:22.242Z",
name: "Make all Screens other than In-game Screen have a consistent nav bar.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864655,
name: "Universal Menu View"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73143340332527,
created_at: "2015-12-11T17:32:08.901Z",
modified_at: "2015-12-12T02:04:16.098Z",
name: "Make a down state(Darker) for all of the Buttons that don't have any.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 31422053277149,
name: "Tian Chen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
],
projects: [ ],
tags: [
{
id: 73346231541535,
name: "4"
}
],
memberships: [ ],
parent: {
id: 73050525864655,
name: "Universal Menu View"
}
},
{
id: 73143340332529,
created_at: "2015-12-11T17:33:51.971Z",
modified_at: "2015-12-12T02:05:06.342Z",
name: "Make a set of standard button assets that can be reused in other places.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 31422053277149,
name: "Tian Chen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
],
projects: [ ],
tags: [
{
id: 73346231541537,
name: "2"
}
],
memberships: [ ],
parent: {
id: 73050525864655,
name: "Universal Menu View"
}
},
{
id: 73143340332543,
created_at: "2015-12-11T18:00:44.711Z",
modified_at: "2015-12-11T18:00:51.200Z",
name: "UX:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864655,
name: "Universal Menu View"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864659,
created_at: "2015-12-11T02:12:21.422Z",
modified_at: "2015-12-13T03:11:51.347Z",
name: "Darken active Screen’s button.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [
{
id: 73346231541520,
name: "1"
}
],
memberships: [ ],
parent: {
id: 73050525864655,
name: "Universal Menu View"
}
},
{
id: 73050525864661,
created_at: "2015-12-11T02:12:21.821Z",
modified_at: "2015-12-13T03:12:11.956Z",
name: "Make the Purchase Chips button the size of the whole icon and the plus button.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [
{
id: 73346231541520,
name: "1"
}
],
memberships: [ ],
parent: {
id: 73050525864655,
name: "Universal Menu View"
}
}
]
},
{
id: 73372295612123,
created_at: "2015-12-13T03:21:13.689Z",
modified_at: "2015-12-16T19:27:14.687Z",
name: "Project Management 1",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2015-12-31",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearts: [ ],
tags: [ ],
parent: null,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864552,
name: "Phase 1:"
}
}
]
},
{
id: 73050525864556,
created_at: "2015-12-11T02:04:23.191Z",
modified_at: "2015-12-16T19:28:12.773Z",
name: "Phase 2:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: null,
subtasks: [ ],
hearts: [ ],
tags: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
]
},
{
id: 73050525864724,
created_at: "2015-12-11T02:20:59.607Z",
modified_at: "2015-12-16T19:28:23.380Z",
name: "Game Join/Creation SystemD",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
hearts: [ ],
hearted: false,
tags: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864742,
created_at: "2015-12-11T02:22:39.449Z",
modified_at: "2015-12-11T02:22:43.725Z",
name: "Select pot limit type Filter. (No Limit, Pot Limit)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864724,
name: "Game Join/Creation SystemD"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864744,
created_at: "2015-12-11T02:22:41.361Z",
modified_at: "2015-12-11T02:26:02.841Z",
name: "Select Ante per hole amount Filter. (refer to chart below)",
notes: "Ante per hole amount Buy In amount $500 $25,000 $1,000 $50,000 $2,500 $100,000 $6,750 $250,000 $12,500 $500,000 $25,000 $1,000,000 $125,000 $5,000,000",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864724,
name: "Game Join/Creation SystemD"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864746,
created_at: "2015-12-11T02:22:41.777Z",
modified_at: "2015-12-11T02:22:41.777Z",
name: "View the Buy-in amount for the correlating Ante per hole amount.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864724,
name: "Game Join/Creation SystemD"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864748,
created_at: "2015-12-11T02:22:42.184Z",
modified_at: "2015-12-11T02:22:42.184Z",
name: "Select a Friends Only Option.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864724,
name: "Game Join/Creation SystemD"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864750,
created_at: "2015-12-11T02:22:43.297Z",
modified_at: "2015-12-11T02:22:43.297Z",
name: "Place players into a Game lobby based on their filtering and Option criteria. If no games with the provided criteria exist the the system will auto create a new game and place the player into a wait Game Lobby.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864724,
name: "Game Join/Creation SystemD"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864726,
created_at: "2015-12-11T02:21:10.259Z",
modified_at: "2015-12-16T19:28:32.060Z",
name: "Games Analytics System",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
hearted: false,
tags: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864752,
created_at: "2015-12-11T02:26:41.431Z",
modified_at: "2015-12-11T02:26:46.474Z",
name: "Track which surveys have been been completed by the player.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864754,
created_at: "2015-12-11T02:26:43.352Z",
modified_at: "2015-12-11T02:26:43.352Z",
name: "Track number of finished Holes.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864756,
created_at: "2015-12-11T02:26:43.760Z",
modified_at: "2015-12-11T02:26:43.760Z",
name: "Track number of Holes Won.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864758,
created_at: "2015-12-11T02:26:44.157Z",
modified_at: "2015-12-11T02:26:44.157Z",
name: "Track number of Games left before a course is finished.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864760,
created_at: "2015-12-11T02:26:44.546Z",
modified_at: "2015-12-11T02:26:44.546Z",
name: "Track which View the player is in and what Hole the player is on if the Game/Course is left prematurely.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864762,
created_at: "2015-12-11T02:26:44.912Z",
modified_at: "2015-12-11T02:26:44.912Z",
name: "Track how long player takes to Bet.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864764,
created_at: "2015-12-11T02:26:45.308Z",
modified_at: "2015-12-11T02:26:45.308Z",
name: "Segment tool for analytics",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864766,
created_at: "2015-12-11T02:26:45.676Z",
modified_at: "2015-12-11T02:26:45.676Z",
name: "Track how long player takes to hit the ball.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864768,
created_at: "2015-12-11T02:26:46.076Z",
modified_at: "2015-12-11T02:26:46.076Z",
name: "Track the number of times a Chat Phrases is used.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864726,
name: "Games Analytics System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864728,
created_at: "2015-12-11T02:21:36.184Z",
modified_at: "2015-12-16T19:28:36.707Z",
name: "Game Selection Screen",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
hearts: [ ],
tags: [ ],
parent: null,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
],
subtasks: [
{
id: 73050525864770,
created_at: "2015-12-11T02:29:13.438Z",
modified_at: "2015-12-11T17:55:12.567Z",
name: "Joinable Games View – Hook up the filter changes the current UI.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864728,
name: "Game Selection Screen"
}
},
{
id: 73050525864772,
created_at: "2015-12-11T02:29:14.904Z",
modified_at: "2015-12-11T17:55:26.876Z",
name: "Game Creation View – Hook up the Game Creation System to the current UI",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864728,
name: "Game Selection Screen"
}
}
]
},
{
id: 73050525864730,
created_at: "2015-12-11T02:21:46.970Z",
modified_at: "2015-12-16T19:28:52.710Z",
name: "In-game Screen",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
hearts: [ ],
tags: [ ],
parent: null,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
],
subtasks: [
{
id: 73050525864774,
created_at: "2015-12-11T02:29:30.645Z",
modified_at: "2015-12-11T17:57:54.602Z",
name: "Game Results View – Show the player's total score.",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864730,
name: "In-game Screen"
}
},
{
id: 73050525864776,
created_at: "2015-12-11T02:29:31.433Z",
modified_at: "2015-12-11T03:53:45.065Z",
name: "Add particle effect divots on grass shots",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864730,
name: "In-game Screen"
}
}
]
},
{
id: 73959899329291,
created_at: "2015-12-15T14:59:21.430Z",
modified_at: "2015-12-16T19:28:52.719Z",
name: "Phase 1 Feedback",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: null,
subtasks: [ ],
hearts: [ ],
tags: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
]
},
{
id: 73372295612126,
created_at: "2015-12-13T03:21:34.527Z",
modified_at: "2015-12-16T19:28:52.723Z",
name: "Project Management 2",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-14",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearts: [ ],
tags: [ ],
parent: null,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864556,
name: "Phase 2:"
}
}
]
},
{
id: 73050525864558,
created_at: "2015-12-11T02:04:28.299Z",
modified_at: "2015-12-16T19:29:40.927Z",
name: "Phase 3:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: null,
subtasks: [ ],
hearts: [ ],
tags: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
]
},
{
id: 73050525864722,
created_at: "2015-12-11T02:20:34.030Z",
modified_at: "2015-12-16T19:29:40.939Z",
name: "Gameplay Avatar Selection System",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864732,
created_at: "2015-12-11T02:22:22.500Z",
modified_at: "2015-12-13T03:16:15.564Z",
name: "Select one of the existing Avatar Models that the player owns.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864722,
name: "Gameplay Avatar Selection System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864734,
created_at: "2015-12-11T02:22:24.064Z",
modified_at: "2015-12-11T02:22:24.064Z",
name: "Select one of the existing Outfit Textures the player owns.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864722,
name: "Gameplay Avatar Selection System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864736,
created_at: "2015-12-11T02:22:24.477Z",
modified_at: "2015-12-11T02:22:24.477Z",
name: "Preview their selected changes to the Avatar.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864722,
name: "Gameplay Avatar Selection System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864738,
created_at: "2015-12-11T02:22:24.873Z",
modified_at: "2015-12-11T02:22:24.873Z",
name: "Save their changes to the Avatar.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864722,
name: "Gameplay Avatar Selection System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864740,
created_at: "2015-12-11T02:22:25.334Z",
modified_at: "2015-12-11T02:22:25.334Z",
name: "Bug – Should save Avatar to profile and when reopening game",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864722,
name: "Gameplay Avatar Selection System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864670,
created_at: "2015-12-11T02:15:28.379Z",
modified_at: "2015-12-16T19:29:40.947Z",
name: "Locker Room Management System",
notes: "Description : Controls how the player can customize their Avatar. Requirements  : Players must be able to – Select one of the existing Avatar Models that the player owns. Select one of the existing Outfit Textures the player owns. Preview their selected changes to the Avatar. Save their changes to the Avatar. System must – Check all Avatar models owned by the player. Check all Outfit textures owned by the player. Save changes made to the Avatar. Connected Screens and Views : Locker Room Screen –Avatar Selection View –Outfit Item Selection View( same style as Avatar Selection View) Bugs :",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
hearted: false,
tags: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
subtasks: [
{
id: 73050525864672,
created_at: "2015-12-11T02:16:27.482Z",
modified_at: "2015-12-11T04:18:10.493Z",
name: "Select one of the existing Avatar Models that the player owns.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864682,
created_at: "2015-12-11T02:18:34.065Z",
modified_at: "2015-12-11T04:18:10.511Z",
name: "Select one of the existing Outfit Textures sets the player owns. (Each model has 1 set: shirt, pants, gloves, shoes; hardcode internal references to sets)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864684,
created_at: "2015-12-11T02:18:34.423Z",
modified_at: "2015-12-11T04:18:10.514Z",
name: "Preview their selected changes to the Avatar.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864686,
created_at: "2015-12-11T02:18:34.752Z",
modified_at: "2015-12-11T04:18:10.518Z",
name: "Save their changes to the Avatar.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73076904329105,
created_at: "2015-12-11T04:16:21.205Z",
modified_at: "2015-12-11T04:18:10.524Z",
name: "Store on PlayFab which is the current model and current outfit, also store all owned (unlocked) outfits and models player has access to",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864688,
created_at: "2015-12-11T02:18:35.071Z",
modified_at: "2015-12-11T04:18:10.521Z",
name: "Bug – Should save Avatar to profile and when reopening game",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864670,
name: "Locker Room Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864690,
created_at: "2015-12-11T02:18:47.456Z",
modified_at: "2015-12-16T19:29:40.951Z",
name: "Survey Management System",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
tags: [ ],
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
],
subtasks: [
{
id: 73050525864692,
created_at: "2015-12-11T02:19:10.551Z",
modified_at: "2015-12-11T02:19:18.897Z",
name: "Store completed survey answers in the player’s playfab account.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864690,
name: "Survey Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864694,
created_at: "2015-12-11T02:19:12.003Z",
modified_at: "2015-12-11T02:19:12.003Z",
name: "Send completed survey answers a designated 3rd party database.(still waiting on the 3rd party)(how would you like to consume the date and receive it - reporting? CSV file?) – Dashboard – Begin Web Admin Section – Videos and Advertising",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864690,
name: "Survey Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
}
},
{
id: 73050525864668,
created_at: "2015-12-11T02:15:15.861Z",
modified_at: "2015-12-16T19:29:40.963Z",
name: "Friends Management System",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
hearted: false,
tags: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
subtasks: [
{
id: 73050525864698,
created_at: "2015-12-11T02:20:10.741Z",
modified_at: "2015-12-11T02:20:14.896Z",
name: "Add registered users to their Friends List.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864700,
created_at: "2015-12-11T02:20:12.642Z",
modified_at: "2015-12-11T04:22:28.658Z",
name: "Accept any pending friends request. (Note: Playfab offers ability to add, remove, and get friends, but friends are one sided: my friends list is not my friend's friends list.)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864702,
created_at: "2015-12-11T02:20:13.055Z",
modified_at: "2015-12-11T04:23:58.086Z",
name: "Deny any pending friends request (See above)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864704,
created_at: "2015-12-11T02:20:13.419Z",
modified_at: "2015-12-11T02:20:13.419Z",
name: "Search for names in the user database.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864706,
created_at: "2015-12-11T02:20:13.775Z",
modified_at: "2015-12-11T02:20:13.775Z",
name: "Directly input names and add into friends list.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864708,
created_at: "2015-12-11T02:20:14.132Z",
modified_at: "2015-12-11T02:20:14.132Z",
name: "See all friends in a list.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864710,
created_at: "2015-12-11T02:20:14.492Z",
modified_at: "2015-12-11T04:24:17.282Z",
name: "See all friends request in a list. (See above)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864668,
name: "Friends Management System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864666,
created_at: "2015-12-11T02:15:07.360Z",
modified_at: "2015-12-16T19:29:40.971Z",
name: "Locker Room Screen",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearts: [ ],
parent: null,
hearted: false,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
],
subtasks: [
{
id: 73050525864712,
created_at: "2015-12-11T02:20:27.962Z",
modified_at: "2015-12-13T03:14:20.351Z",
name: "Adjust the last approved Screenshot to incorporate changes made to Avatar Data Management",
notes: "Add in a way to select gender in the GUI and provide assets.",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 31422053277149,
name: "Tian Chen"
},
parent: {
id: 73050525864666,
name: "Locker Room Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422053277149,
name: "Tian Chen"
}
],
projects: [ ],
tags: [
{
id: 73346231541520,
name: "1"
}
],
memberships: [ ]
},
{
id: 73143340332537,
created_at: "2015-12-11T17:56:30.725Z",
modified_at: "2015-12-11T17:56:42.765Z",
name: "UX:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864666,
name: "Locker Room Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864714,
created_at: "2015-12-11T02:20:29.664Z",
modified_at: "2015-12-13T03:15:10.060Z",
name: "Add three male characters (the pro, Rodney Dangerfield, Meat Head al Caddyshack)",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [
{
id: 73346231541537,
name: "2"
}
],
memberships: [ ],
parent: {
id: 73050525864666,
name: "Locker Room Screen"
}
},
{
id: 73050525864718,
created_at: "2015-12-11T02:20:30.450Z",
modified_at: "2015-12-13T03:15:23.905Z",
name: "Avatar Selection View – Add buttons to allow the player to choose an avatar",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [
{
id: 73346231541537,
name: "2"
}
],
memberships: [ ],
parent: {
id: 73050525864666,
name: "Locker Room Screen"
}
},
{
id: 73050525864720,
created_at: "2015-12-11T02:20:30.821Z",
modified_at: "2015-12-13T03:15:48.762Z",
name: "Outfit Item Selection View – choose one of three outfits",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [
{
id: 73346231541520,
name: "1"
}
],
memberships: [ ],
parent: {
id: 73050525864666,
name: "Locker Room Screen"
}
}
]
},
{
id: 73959899329293,
created_at: "2015-12-15T15:00:37.350Z",
modified_at: "2015-12-16T19:29:40.975Z",
name: "Phase 2 Feedback",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
]
},
{
id: 73372295612129,
created_at: "2015-12-13T03:21:51.318Z",
modified_at: "2015-12-16T19:29:40.978Z",
name: "Project Management 3",
notes: "",
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-01-28",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
subtasks: [ ],
hearts: [ ],
parent: null,
hearted: false,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864558,
name: "Phase 3:"
}
}
]
},
{
id: 73050525864560,
created_at: "2015-12-11T02:04:32.954Z",
modified_at: "2015-12-16T19:30:07.901Z",
name: "Phase 4:",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
subtasks: [ ],
hearts: [ ],
hearted: false,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
]
},
{
id: 73050525864562,
created_at: "2015-12-11T02:04:45.724Z",
modified_at: "2015-12-16T19:30:07.912Z",
name: "Purchase Chips System",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearted: false,
hearts: [ ],
tags: [ ],
parent: null,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
subtasks: [
{
id: 73050525864821,
created_at: "2015-12-11T02:33:52.355Z",
modified_at: "2015-12-11T04:28:45.999Z",
name: "Prompt user to buy more chip when they have run out, if they cannot afford the Buy-in for a game or if they cannot afford reBuy-in for a game after losing all Buy-in money. (Currently player must go into the lobby to buy more chips. Is this task asking the player to buy more chips during a game? Are the other players in the game forced to wait while this transaction is validated?)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864562,
name: "Purchase Chips System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864823,
created_at: "2015-12-11T02:33:53.744Z",
modified_at: "2015-12-11T04:27:39.970Z",
name: "Return the player back to the hole in progress after a purchase successful purchase. (What if this is not possible?)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864562,
name: "Purchase Chips System"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
],
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
]
},
{
id: 73050525864780,
created_at: "2015-12-11T02:30:42.946Z",
modified_at: "2015-12-16T19:30:07.924Z",
name: "Buy Chips Screen",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
hearted: false,
hearts: [ ],
parent: null,
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
subtasks: [
{
id: 73050525864817,
created_at: "2015-12-11T02:33:38.436Z",
modified_at: "2015-12-11T02:33:40.375Z",
name: "Screen needs to close upon successful purchase valid.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864780,
name: "Buy Chips Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864819,
created_at: "2015-12-11T02:33:39.904Z",
modified_at: "2015-12-11T02:33:39.904Z",
name: "Upon successful purchase valid a notification saying “Thank you for your Purchase!” needs to come up then go away and close this Screen.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864780,
name: "Buy Chips Screen"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864782,
created_at: "2015-12-11T02:30:51.545Z",
modified_at: "2015-12-16T19:30:07.928Z",
name: "Other Known Bugs",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
hearts: [ ],
num_hearts: 0,
parent: null,
hearted: false,
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
subtasks: [
{
id: 73050525864815,
created_at: "2015-12-11T02:33:02.234Z",
modified_at: "2015-12-11T02:33:05.539Z",
name: "8 hole par 3 – hit into the water, allowed to hit out of water and holed for Par. (Need to check camera angles)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864782,
name: "Other Known Bugs"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864784,
created_at: "2015-12-11T02:31:07.748Z",
modified_at: "2015-12-16T19:30:07.932Z",
name: "Additional Requests",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
hearted: false,
hearts: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
subtasks: [
{
id: 73050525864798,
created_at: "2015-12-11T02:32:18.052Z",
modified_at: "2015-12-11T18:07:25.874Z",
name: "Flags on every hole – for advertising",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
subtasks: [ ],
hearted: false,
hearts: [ ],
projects: [ ],
tags: [ ],
memberships: [ ],
assignee: {
id: 31422050226041,
name: "Alex Gregorie"
},
parent: {
id: 73050525864784,
name: "Additional Requests"
},
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422050226041,
name: "Alex Gregorie"
}
]
},
{
id: 73050525864800,
created_at: "2015-12-11T02:32:19.839Z",
modified_at: "2015-12-11T18:04:40.104Z",
name: "Leaderboard for Advertising spots (in 3D world) scores not necessarily readable just advertising",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 31422050226041,
name: "Alex Gregorie"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 31422050226041,
name: "Alex Gregorie"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864784,
name: "Additional Requests"
}
},
{
id: 73050525864802,
created_at: "2015-12-11T02:32:20.351Z",
modified_at: "2015-12-11T18:04:56.271Z",
name: "Match making best on level of play (need to research)",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 59305348027804,
name: "Tim Frank"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864784,
name: "Additional Requests"
}
},
{
id: 73050525864804,
created_at: "2015-12-11T02:32:20.762Z",
modified_at: "2015-12-13T03:20:10.336Z",
name: "Share on Facebook (results) possibly for giveaways",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864784,
name: "Additional Requests"
}
},
{
id: 73050525864808,
created_at: "2015-12-11T02:32:21.597Z",
modified_at: "2015-12-11T18:06:07.975Z",
name: "Back button logs out in settings, should go to home screen",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ],
parent: {
id: 73050525864784,
name: "Additional Requests"
}
},
{
id: 73050525864810,
created_at: "2015-12-11T02:32:22.019Z",
modified_at: "2015-12-11T18:08:04.916Z",
name: "When invite friend both get logged and entered into contest",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864812,
created_at: "2015-12-11T02:32:22.454Z",
modified_at: "2015-12-11T18:07:50.423Z",
name: "Watch video to earn chips",
notes: "",
completed: false,
assignee_status: "inbox",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: {
id: 13376144999297,
name: "Walter Stephens"
},
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
},
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73959899329285,
created_at: "2015-12-15T14:47:10.406Z",
modified_at: "2015-12-15T14:47:16.963Z",
name: "need to add the distance to the hole above the % to the hole in the purple box below the username.",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73959899329287,
created_at: "2015-12-15T14:49:17.537Z",
modified_at: "2015-12-15T14:49:23.962Z",
name: "When the game begins, instead of saying “Let’s get started” could it say “Ante Up”",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73959899329289,
created_at: "2015-12-15T14:58:06.188Z",
modified_at: "2015-12-15T14:58:13.147Z",
name: "The Chat feature needs to be updated",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73143340332551,
created_at: "2015-12-11T18:06:28.697Z",
modified_at: "2015-12-11T18:06:35.246Z",
name: "Blocked:",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864806,
created_at: "2015-12-11T02:32:21.177Z",
modified_at: "2015-12-11T02:32:21.177Z",
name: "Wood on Driver look more like wood than hybrid",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864784,
name: "Additional Requests"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73050525864786,
created_at: "2015-12-11T02:31:21.099Z",
modified_at: "2015-12-16T19:30:07.936Z",
name: "Tasks Currently in the Backlog",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
hearted: false,
hearts: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
subtasks: [
{
id: 73050525864788,
created_at: "2015-12-11T02:31:56.591Z",
modified_at: "2015-12-11T02:32:00.119Z",
name: "Gameplay shots for app stores",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864790,
created_at: "2015-12-11T02:31:58.369Z",
modified_at: "2015-12-11T02:31:58.369Z",
name: "Icons for game stores (will need final logo from creative agency)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864792,
created_at: "2015-12-11T02:31:58.829Z",
modified_at: "2015-12-11T02:31:58.829Z",
name: "Course Design camera positions",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864794,
created_at: "2015-12-11T02:31:59.258Z",
modified_at: "2015-12-11T02:31:59.258Z",
name: "Pro Shop (confirming this will just be a coming soon feature for this release) – lead to coming soon page with Avatar",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73050525864796,
created_at: "2015-12-11T02:31:59.687Z",
modified_at: "2015-12-11T04:29:48.629Z",
name: "Add particle effect when taking shot in sand",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
},
{
id: 73076904329124,
created_at: "2015-12-11T04:29:31.024Z",
modified_at: "2015-12-11T04:29:46.195Z",
name: "Add particle effect for ball landing in water (Note: As of 2015-12-10 it is impossible for ball to land in water)",
notes: "",
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: null,
due_at: null,
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
assignee: null,
parent: {
id: 73050525864786,
name: "Tasks Currently in the Backlog"
},
subtasks: [ ],
hearted: false,
hearts: [ ],
followers: [
{
id: 13376144999297,
name: "Walter Stephens"
}
],
projects: [ ],
tags: [ ],
memberships: [ ]
}
]
},
{
id: 73959899329295,
created_at: "2015-12-15T15:01:11.730Z",
modified_at: "2015-12-16T19:30:07.939Z",
name: "Phase 3 Feedback",
notes: "",
assignee: null,
parent: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
subtasks: [ ],
hearted: false,
hearts: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
]
},
{
id: 73372295612132,
created_at: "2015-12-13T03:22:04.325Z",
modified_at: "2015-12-16T19:30:07.943Z",
name: "Project Management 4",
notes: "",
assignee: null,
completed: false,
assignee_status: "upcoming",
completed_at: null,
due_on: "2016-02-11",
due_at: null,
tags: [ ],
workspace: {
id: 31185761354774,
name: "redsquadron.com"
},
num_hearts: 0,
parent: null,
subtasks: [ ],
hearted: false,
hearts: [ ],
projects: [
{
id: 72228675978482,
name: "No Limit Milestone : 6"
}
],
memberships: [
{
project: {
id: 72228675978482,
name: "No Limit Milestone : 6"
},
section: {
id: 73050525864560,
name: "Phase 4:"
}
}
],
followers: [
{
id: 59305348027804,
name: "Tim Frank"
}
]
}
]
}