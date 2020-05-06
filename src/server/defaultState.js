export const defaultState = {
	session: {
			authenticated: false
	},
    users: [
	    {
	        id:"User_1",
	        name:"Admin_1",
	        friends:[`User_2`]
	    },
	    {
	        id:"User_2",
	        name:"Guest_2",
	        friends:[]
	    }
	],
    groups: [
	    {
	        id:"Group_1",
	        name:"To Do",
	        owner:"User_1"
	    },
	    {
	        id:"Group_2",
	        name:"Doing",
	        owner:"User_1"
	    },
	    {
	        id:"Group_3",
	        name:"Done",
	        owner:"User_1"
	    }
    ],
    tasks: [
	    {
	        id:"Task_1",
	        name:"Refactor tests",
	        group:"Group_1",
	        owner:"User_1",
	        isComplete:false,
	    },
	    {
	        id:"Task_2",
	        name:"Meet with CTO",
	        group:"Group_1",
	        owner:"User_1",
	        isComplete:true,
	    },
	    {
	        id:"Task_3",
	        name:"Compile ES6",
	        group:"Group_2",
	        owner:"User_2",
	        isComplete:false,
	    },
	    {
	        id:"Task_4",
	        name:"Update component snapshots",
	        group:"Group_2",
	        owner:"User_1",
	        isComplete:true,
	    },
	    {
	        id:"Task_5",
	        name:"Production optimizations",
	        group:"Group_3",
	        owner:"User_1",
	        isComplete:false,
	    }
	],
    comments: [
	    {
	        id:"Comment_1",
	        owner:"User_1",
	        task:"Task_1",
	        content:"Great work!"
	    }
    ]
}